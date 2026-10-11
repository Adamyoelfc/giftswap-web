import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL, SiteFooter } from "@/components/Brand";
import { LandingNav } from "@/components/LandingNav";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

const occasions = [
  "Secret Santa",
  "Birthdays",
  "Christmas",
  "Weddings",
  "Baby showers",
  "Graduations",
  "Office exchanges",
  "Valentine's Day",
  "Easter",
];

const features = [
  {
    eyebrow: "Secret Santa",
    title: "Draw names in one tap",
    body: "Invite everyone with a link or a 6-character code. When the group is in, draw names and each person privately sees who they're buying for. No hats, no group texts, no peeking.",
    points: ["Join with a link or a code", "Private assignments", "Budgets and dates in one place"],
    screen: "/screens/secret-santa.webp",
    alt: "GiftSwap event screen showing a Secret Santa assignment",
    tint: "from-cream to-white",
  },
  {
    eyebrow: "Wishlists",
    title: "Lists they'll actually shop",
    body: "Add anything from any store with a link, price and priority. Make a list for yourself, your kids or a baby on the way, and share it with exactly who you want.",
    points: ["Any store, any link", "High, medium or low priority", "Public or private lists"],
    screen: "/screens/wishlist.webp",
    alt: "GiftSwap wishlist screen with AirPods, a coffee kit and a sweater",
    tint: "from-blue-pale to-white",
  },
  {
    eyebrow: "No duplicates",
    title: "Claim it. Keep it secret.",
    body: "Claim the gift you're buying so nobody else does. Other guests see it's taken; the person celebrating never does, so the surprise survives.",
    points: ["One tap to claim", "Hidden from the wishlist owner", "Unclaim any time"],
    screen: "/screens/claim.webp",
    alt: "GiftSwap wishlist with Claim This Gift buttons and one gift already claimed",
    tint: "from-[#EAFBF4] to-white",
  },
  {
    eyebrow: "Event chat",
    title: "Plan together, spoil nothing",
    body: "Every event gets its own group chat for logistics, photos and the occasional ugly-sweater debate, without dragging the birthday person into the thread.",
    points: ["A chat per event", "Share photos", "Notifications when it matters"],
    screen: "/screens/chat.webp",
    alt: "GiftSwap event chat with messages about the gift exchange",
    tint: "from-[#FFF1EE] to-white",
  },
];

const steps = [
  { n: "1", title: "Create an event", body: "Pick the occasion, date and budget. Birthday, wedding or a full Secret Santa." },
  { n: "2", title: "Invite your people", body: "Share a link or a join code. Friends add their wishlists as they join." },
  { n: "3", title: "Draw, claim, celebrate", body: "Draw names, claim gifts secretly and keep plans in the event chat." },
];

const faqs = [
  { q: "Is GiftSwap free?", a: "Yes. GiftSwap is free to use, with no ads. Some product links are affiliate links, which is how we keep it free." },
  { q: "When can I download it?", a: "GiftSwap is in testing on iPhone now and coming to the App Store soon. Leave your email above and we'll let you know the moment it's ready." },
  { q: "Will the birthday person see what I claimed?", a: "No. Claims are hidden from the wishlist owner. Other guests only see that an item is taken, so nobody buys it twice." },
  { q: "What occasions does it work for?", a: "Secret Santa and gift exchanges, birthdays, weddings, baby showers and holidays. Pick the kind of event and GiftSwap sets up who gives to whom." },
];

export default function Home() {
  return (
    <div id="top" className="font-body">
      <Reveal />
      <LandingNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-blue-dark to-blue-primary text-white">
        <Confetti />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-40 md:pb-28 grid gap-14 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Coming soon to iPhone
            </span>
            <h1 className="mt-6 font-display font-extrabold text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
              Gifting,
              <span className="block text-gold">minus the chaos.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Draw names for Secret Santa, share wishlists people actually shop from, and claim
              gifts secretly so nobody buys the same thing twice.
            </p>
            <div className="mt-9 flex justify-center lg:justify-start">
              <WaitlistForm source="landing-hero" id="join" />
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-white/75">
              {["Free to use", "No ads", "Surprises stay secret"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[460px] h-[400px] sm:h-[560px]">
            <div className="absolute left-0 top-10 w-[58%] -rotate-[7deg] float-y-slow">
              <Phone src="/screens/secret-santa.webp" alt="Secret Santa assignment in GiftSwap" />
            </div>
            <div className="absolute right-0 top-0 w-[62%] rotate-[4deg] float-y">
              <Phone src="/screens/home.webp" alt="GiftSwap home screen with upcoming events" priority />
            </div>
            <div className="absolute left-[2%] bottom-6 sm:bottom-10 rounded-2xl bg-white px-4 py-3 text-left text-foreground shadow-xl shadow-navy/25 float-y">
              <p className="text-xs font-semibold text-gray">Family Secret Santa</p>
              <p className="mt-0.5 flex items-center gap-2 text-sm font-bold text-green">
                <Check /> Names have been drawn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section aria-label="Occasions" className="border-b border-gray-light bg-white py-5 overflow-hidden">
        <div className="flex w-max marquee">
          {[...occasions, ...occasions].map((o, i) => (
            <span key={i} aria-hidden={i >= occasions.length} className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-lg font-semibold text-blue-dark/70">
              {o}
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto reveal">
            <Eyebrow>Everything in one place</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-navy leading-tight">
              The whole gift exchange, handled.
            </h2>
            <p className="mt-5 text-lg text-gray-dark">
              From the first invite to the last unwrapped box, GiftSwap keeps everyone on the same
              page and the surprise intact.
            </p>
          </div>

          <div className="mt-16 md:mt-24 space-y-20 md:space-y-32">
            {features.map((f, i) => (
              <div key={f.title} className="grid items-center gap-10 md:gap-16 md:grid-cols-2">
                <div className={`reveal ${i % 2 ? "md:order-2" : ""}`}>
                  <div className={`relative mx-auto max-w-[420px] rounded-[2.5rem] bg-gradient-to-b ${f.tint} px-10 pt-10 sm:px-16 sm:pt-14 overflow-hidden`}>
                    <div className="mx-auto max-w-[280px] -mb-[38%]">
                      <Phone src={f.screen} alt={f.alt} />
                    </div>
                  </div>
                </div>
                <div className={`reveal text-center md:text-left ${i % 2 ? "md:order-1" : ""}`}>
                  <Eyebrow>{f.eyebrow}</Eyebrow>
                  <h3 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-navy leading-tight">{f.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-gray-dark max-w-lg mx-auto md:mx-0">{f.body}</p>
                  <ul className="mt-6 space-y-3 inline-block text-left">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 font-medium text-foreground">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-pale text-blue-primary">
                          <Check />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto reveal">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-navy leading-tight">
              Set up in under a minute.
            </h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="reveal rounded-3xl bg-white p-8 shadow-[0_1px_0_rgba(6,47,71,0.06),0_20px_40px_-28px_rgba(6,47,71,0.35)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-dark font-display text-xl font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-dark">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Privacy promise */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="reveal grid gap-8 md:grid-cols-[auto_1fr] items-center rounded-[2rem] bg-blue-pale p-8 md:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-primary shadow-sm">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">Private by design</h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-dark">
                We don&apos;t sell your data or show third-party ads. Draw results are only visible to
                the person who drew them, and your lists are shared only with who you choose.{" "}
                <Link href="/privacy/" className="font-semibold text-blue-primary underline underline-offset-4">
                  Read our Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-white pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center reveal">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-navy">Questions, answered</h2>
          </div>
          <div className="mt-10 reveal">
            {faqs.map(({ q, a }) => (
              <details key={q} className="faq">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-dark">
            Something else?{" "}
            <Link href="/support/" className="font-semibold text-blue-primary underline underline-offset-4">Visit support</Link>{" "}
            or email <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-blue-primary">{SUPPORT_EMAIL}</a>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-dark to-blue-primary text-white">
        <Confetti />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center reveal">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
            This year, let the app
            <span className="block text-gold">hold the hat.</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
            GiftSwap is coming to the App Store. Leave your email and be first in line.
          </p>
          <div className="mt-9 flex flex-col items-center gap-6">
            <WaitlistForm source="landing-cta" />
            <AppStoreSoon />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Phone({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="phone fade-bottom">
      <div className="screen">
        <Image src={src} alt={alt} width={600} height={1202} priority={priority} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-pale px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-dark">
      <span className="h-1.5 w-1.5 rounded-full bg-coral" />
      {children}
    </span>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function AppStoreSoon() {
  return (
    <span className="inline-flex items-center gap-3 rounded-2xl bg-black/25 px-5 py-3 ring-1 ring-white/20" aria-label="Coming soon to the App Store">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/70">Coming soon to the</span>
        <span className="block text-sm font-semibold">App Store</span>
      </span>
    </span>
  );
}

/** Scattered dots and dashes, echoing the App Store artwork. */
function Confetti() {
  const bits = [
    { c: "bg-gold", s: "left-[6%] top-[22%] h-2.5 w-2.5 rounded-full" },
    { c: "bg-coral", s: "left-[14%] top-[72%] h-1.5 w-5 rounded-full rotate-[-30deg]" },
    { c: "bg-blue-light", s: "left-[46%] top-[12%] h-2 w-2 rounded-full" },
    { c: "bg-gold", s: "right-[8%] top-[18%] h-1.5 w-5 rounded-full rotate-[40deg]" },
    { c: "bg-coral", s: "right-[4%] top-[64%] h-2.5 w-2.5 rounded-full" },
    { c: "bg-white/60", s: "left-[40%] bottom-[10%] h-1.5 w-4 rounded-full rotate-[20deg]" },
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-blue-light/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-coral/15 blur-3xl" />
      {bits.map((b, i) => (
        <span key={i} className={`absolute opacity-80 ${b.c} ${b.s}`} />
      ))}
    </div>
  );
}
