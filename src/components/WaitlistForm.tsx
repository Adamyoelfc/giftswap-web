"use client";

import { useState } from "react";

const WAITLIST_URL = "https://api.giftswap.store/api/waitlist";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm({ source, id }: { source: string; id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus("done");
        return;
      }
      const data = await res.json().catch(() => null);
      setError(
        res.status === 429
          ? "Too many tries. Please wait a bit and try again."
          : data?.error || "Something went wrong. Please try again."
      );
      setStatus("error");
    } catch {
      setError("Couldn't reach GiftSwap. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div id={id} role="status" className="rounded-2xl bg-white/15 px-6 py-5 ring-1 ring-white/25 text-white">
        <p className="font-display text-lg font-bold">You&apos;re on the list! 🎁</p>
        <p className="mt-1 text-white/80 text-sm">We&apos;ll email you as soon as GiftSwap is ready for you.</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={submit} className="w-full max-w-md scroll-mt-28">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-lg sm:shadow-navy/20">
        <label htmlFor={`${source}-email`} className="sr-only">Email address</label>
        <input
          id={`${source}-email`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full bg-white px-5 py-4 sm:py-3 text-foreground placeholder:text-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light sm:focus-visible:ring-0"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gold px-6 py-4 sm:py-3 font-semibold text-navy transition hover:brightness-105 disabled:opacity-70"
        >
          {status === "sending" ? "Joining…" : "Get early access"}
        </button>
      </div>
      <p className={`mt-3 text-sm ${status === "error" ? "text-[#FFD0C7]" : "text-white/65"}`} role={status === "error" ? "alert" : undefined}>
        {status === "error" ? error : "Be first in line when we launch. No spam, ever."}
      </p>
    </form>
  );
}
