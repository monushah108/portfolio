"use client";

import { useEffect, useState } from "react";

export default function WebsiteViewsCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function recordView() {
      try {
        const sessionKey = "monu_portfolio_viewed";
        const hasViewedInSession =
          typeof window !== "undefined" && sessionStorage.getItem(sessionKey);

        const method = hasViewedInSession ? "GET" : "POST";
        const response = await fetch("/api/views", {
          method,
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          if (isMounted && typeof data.views === "number") {
            setViews(data.views);
            if (!hasViewedInSession) {
              sessionStorage.setItem(sessionKey, "1");
            }
          }
        } else {
          fallbackLocalViews();
        }
      } catch {
        fallbackLocalViews();
      }
    }

    function fallbackLocalViews() {
      if (typeof window !== "undefined") {
        const localKey = "monu_portfolio_local_views";
        const current = parseInt(localStorage.getItem(localKey) || "1", 10);
        const hasViewed = sessionStorage.getItem("monu_portfolio_viewed");
        const next = hasViewed ? current : current + 1;
        localStorage.setItem(localKey, next.toString());
        sessionStorage.setItem("monu_portfolio_viewed", "1");
        if (isMounted) setViews(next);
      }
    }

    recordView();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <span className="text-xs sm:text-sm text-muted-foreground font-mono">
      {views === null ? "..." : `${views.toLocaleString()} views`}
    </span>
  );
}
