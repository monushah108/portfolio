import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const VIEWS_FILE = path.join(DATA_DIR, "views.json");
const INITIAL_VIEWS = 2847;

function getStoredViews(): number {
  try {
    if (!fs.existsSync(VIEWS_FILE)) {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(
        VIEWS_FILE,
        JSON.stringify({ views: INITIAL_VIEWS, updatedAt: new Date().toISOString() }),
        "utf8"
      );
      return INITIAL_VIEWS;
    }
    const data = JSON.parse(fs.readFileSync(VIEWS_FILE, "utf8"));
    return typeof data.views === "number" ? data.views : INITIAL_VIEWS;
  } catch {
    return INITIAL_VIEWS;
  }
}

function incrementStoredViews(): number {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    let current = INITIAL_VIEWS;
    if (fs.existsSync(VIEWS_FILE)) {
      try {
        const data = JSON.parse(fs.readFileSync(VIEWS_FILE, "utf8"));
        current = typeof data.views === "number" ? data.views : INITIAL_VIEWS;
      } catch {
        current = INITIAL_VIEWS;
      }
    }
    const nextViews = current + 1;
    fs.writeFileSync(
      VIEWS_FILE,
      JSON.stringify({ views: nextViews, updatedAt: new Date().toISOString() }),
      "utf8"
    );
    return nextViews;
  } catch {
    return INITIAL_VIEWS + 1;
  }
}

export async function GET() {
  const views = getStoredViews();
  return NextResponse.json({ views }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST() {
  const views = incrementStoredViews();
  return NextResponse.json({ views }, { headers: { "Cache-Control": "no-store" } });
}
