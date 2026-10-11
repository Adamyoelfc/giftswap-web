import Link from "next/link";
import { Logo, SiteFooter } from "./Brand";

export { SUPPORT_EMAIL } from "./Brand";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated?: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="font-body min-h-screen bg-white">
      <header className="bg-gradient-to-br from-navy via-blue-dark to-blue-primary">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
          <Logo />
          <nav className="flex gap-5 text-sm font-medium text-white/80" aria-label="Pages">
            <Link href="/support/" className="hover:text-white">Support</Link>
            <Link href="/terms/" className="hover:text-white">Terms</Link>
            <Link href="/privacy/" className="hover:text-white">Privacy</Link>
          </nav>
        </div>
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-6 pb-12 md:pt-10 md:pb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white">{title}</h1>
          {updated && <p className="mt-3 text-sm text-white/70">Last updated {updated}</p>}
          {intro && <div className="mt-4 text-white/85 text-lg leading-relaxed max-w-2xl">{intro}</div>}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="legal">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
