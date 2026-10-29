"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(false);
    let navigationTimer: number | undefined;

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname) return;

      setIsNavigating(true);
      window.clearTimeout(navigationTimer);
      navigationTimer = window.setTimeout(() => setIsNavigating(false), 8000);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.clearTimeout(navigationTimer);
    };
  }, [pathname]);

  return (
    <div
      className={`navigation-progress${isNavigating ? " navigation-progress--active" : ""}`}
      role="progressbar"
      aria-label="Loading page"
      aria-valuetext={isNavigating ? "Loading" : "Complete"}
    />
  );
}
