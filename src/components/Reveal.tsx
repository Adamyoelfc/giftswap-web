"use client";

import { useEffect } from "react";

/** Fades `.reveal` elements in as they scroll into view. Without JS they simply show. */
export function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
