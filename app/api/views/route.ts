import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const VIEWS_FILE = path.join(DATA_DIR, "views.json");
const INITIAL_VIEWS = 1;

// Memory fallback for serverless instances when filesystem is read-only
let memoryViews = INITIAL_VIEWS;

// Optional Upstash Redis integration (zero-dependency via REST API)
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function getViewsFromRedis(): Promise<number | null> {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  try {
    const res = await fetch(`${REDIS_URL}/get/portfolio_views`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.result === "string" || typeof data.result === "number"
      ? parseInt(String(data.result), 10)
      : INITIAL_VIEWS;
  } catch {
    return null;
  }
}

async function incrementViewsInRedis(): Promise<number | null> {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  try {
    const res = await fetch(`${REDIS_URL}/incr/portfolio_views`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.result === "number" ? data.result : null;
  } catch {
    return null;
  }
}

function getStoredViews(): number {
  try {
    if (fs.existsSync(VIEWS_FILE)) {
      const data = JSON.parse(fs.readFileSync(VIEWS_FILE, "utf8"));
      if (typeof data.views === "number") {
        memoryViews = data.views;
        return data.views;
      }
    }
  } catch {
    // Filesystem may be read-only in Vercel serverless environment
  }
  return memoryViews;
}

function incrementStoredViews(): number {
  memoryViews += 1;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(
      VIEWS_FILE,
      JSON.stringify({ views: memoryViews, updatedAt: new Date().toISOString() }, null, 2),
      "utf8"
    );
  } catch {
    // On Vercel, filesystem is read-only so writeFileSync is safely ignored
  }
  return memoryViews;
}

export async function GET() {
  // 1. Try Redis if environment variables are configured
  const redisViews = await getViewsFromRedis();
  if (redisViews !== null) {
    return NextResponse.json(
      { views: redisViews },
      { headers: { "Cache-Control": "no-store" } }
    );
  }

  // 2. Fallback to local file / memory
  const views = getStoredViews();
  return NextResponse.json(
    { views },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST() {
  // 1. Try Redis if environment variables are configured
  const redisViews = await incrementViewsInRedis();
  if (redisViews !== null) {
    return NextResponse.json(
      { views: redisViews },
      { headers: { "Cache-Control": "no-store" } }
    );
  }

  // 2. Fallback to local file / memory
  const views = incrementStoredViews();
  return NextResponse.json(
    { views },
    { headers: { "Cache-Control": "no-store" } }
  );
}
