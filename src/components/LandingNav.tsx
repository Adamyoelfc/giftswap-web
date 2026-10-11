"use client";

import { useEffect, useState } from "react";
import { GiftMark } from "./Brand";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(6,47,71,0.08)] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#top" className={`flex items-center gap-2 ${solid ? "text-blue-dark" : "text-white"}`}>
          <GiftMark />
          <span className="text-xl font-bold font-display">GiftSwap</span>
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-gray-dark hover:text-blue-dark" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              solid ? "bg-blue-dark text-white hover:bg-navy" : "bg-white text-blue-dark hover:bg-cream"
            }`}
          >
            Get early access
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block w-6 h-4">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`absolute left-0 block h-0.5 w-6 rounded transition-all duration-300 ${
                  solid ? "bg-blue-dark" : "bg-white"
                } ${
                  i === 0 ? (open ? "top-[7px] rotate-45" : "top-0") : i === 1 ? (open ? "top-[7px] opacity-0" : "top-[7px]") : open ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            ))}
          </span>
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-white transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 px-5 pt-6" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-2xl font-display font-semibold text-blue-dark border-b border-gray-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-blue-dark px-6 py-4 text-center font-semibold text-white"
          >
            Get early access
          </a>
        </nav>
      </div>
    </header>
  );
}
