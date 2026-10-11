import Link from "next/link";

export const SUPPORT_EMAIL = "support@giftswap.store";

export function GiftMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-blue-dark";
  return (
    <Link href="/" className={`flex items-center gap-2 ${text}`} aria-label="GiftSwap home">
      <GiftMark />
      <span className="text-xl font-bold font-display">GiftSwap</span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Secret Santa draws, wishlists and group gifting for the people you love.
          </p>
        </div>
        <nav aria-label="Legal" className="text-sm">
          <p className="font-semibold text-white">Legal</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/terms/" className="hover:text-white">Terms of Use</Link></li>
            <li><Link href="/privacy/" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </nav>
        <nav aria-label="Help" className="text-sm">
          <p className="font-semibold text-white">Help</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/support/" className="hover:text-white">Support &amp; FAQ</Link></li>
            <li><a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white">{SUPPORT_EMAIL}</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 text-xs leading-relaxed text-white/50 flex flex-col md:flex-row gap-3 md:justify-between">
          <span>© {new Date().getFullYear()} GiftSwap. All rights reserved.</span>
          <span className="md:max-w-xl md:text-right">
            Some product links in GiftSwap are affiliate links. If you buy through them we may earn a
            commission, at no extra cost to you.
          </span>
        </div>
      </div>
    </footer>
  );
}
