"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .stagger-children").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="font-body">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-lg shadow-[#095F8A]/5 py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className={`transition-all duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            >
              <GiftLogo scrolled={scrolled} />
            </div>
            <span
              className={`text-xl md:text-2xl font-bold font-display transition-colors duration-300 ${
                scrolled ? "text-[#095F8A]" : "text-white"
              }`}
            >
              GiftSwap
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#features" scrolled={scrolled}>
              Features
            </NavLink>
            <NavLink href="#how-it-works" scrolled={scrolled}>
              How it Works
            </NavLink>
            <a
              href="#notify"
              className={`relative px-7 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden group ${
                scrolled
                  ? "bg-[#095F8A] text-white hover:bg-[#074d6f]"
                  : "bg-white text-[#095F8A] hover:bg-white/90"
              }`}
            >
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 btn-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#095F8A]" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#095F8A]" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#095F8A]" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[60px] bg-[#095F8A]/98 menu-backdrop transition-all duration-400 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
            <MobileNavLink
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              delay={0}
              visible={mobileMenuOpen}
            >
              Features
            </MobileNavLink>
            <MobileNavLink
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              delay={100}
              visible={mobileMenuOpen}
            >
              How it Works
            </MobileNavLink>
            <MobileNavLink
              href="#notify"
              onClick={() => setMobileMenuOpen(false)}
              delay={200}
              visible={mobileMenuOpen}
              isButton
            >
              Get Early Access
            </MobileNavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#095F8A] via-[#1299BE] to-[#095F8A] animate-gradient" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Organic blobs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 blob animate-float" />
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-[#5BC4E0]/10 blob animate-float-delayed" />
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-white/5 blob animate-float" />

          {/* Floating gift icons */}
          <div className="absolute top-1/4 left-[10%] animate-float opacity-20">
            <FloatingGift size={48} />
          </div>
          <div className="absolute top-1/3 right-[15%] animate-float-delayed opacity-15">
            <FloatingGift size={36} />
          </div>
          <div className="absolute bottom-1/4 left-[20%] animate-float opacity-10">
            <FloatingGift size={56} />
          </div>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-[#FFD966] rounded-full animate-pulse" />
              Coming Soon
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 md:mt-10 animate-fade-in-up opacity-0 animation-delay-100">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.1] tracking-tight">
              Share the Joy
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold mt-2 bg-gradient-to-r from-white via-[#5BC4E0] to-white bg-clip-text text-transparent leading-[1.1] tracking-tight">
              of Giving
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-200 px-4">
            The ultimate app for wishlists, gift exchanges, and celebrating
            special moments with the people you love.
          </p>

          {/* Email Signup */}
          <div
            id="notify"
            className="mt-10 md:mt-12 max-w-md mx-auto animate-fade-in-up opacity-0 animation-delay-300 px-4"
          >
            {submitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl sm:rounded-full bg-white/15 backdrop-blur-md text-white placeholder-white/50 border border-white/25 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-base"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative px-8 py-4 bg-white text-[#095F8A] rounded-2xl sm:rounded-full font-semibold text-base hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  >
                    <span className="relative z-10">Notify Me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD966] to-[#FF8C7A] opacity-0 group-hover:opacity-10 transition-opacity" />
                  </button>
                </div>
                <p className="mt-4 text-white/50 text-sm">
                  Be the first to know when we launch. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* App Store Badges */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-400 px-4">
            <StoreBadge type="apple" />
            <StoreBadge type="google" />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-5 md:px-8 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8F6FA]/50 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 md:mb-20 reveal">
            <span className="inline-block px-4 py-1.5 bg-[#E8F6FA] text-[#095F8A] rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-[#095F8A] leading-tight">
              Everything You Need
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto">
              GiftSwap makes it effortless to organize events, create wishlists, and
              share meaningful moments with those you love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 stagger-children">
            <FeatureCard
              icon={<WishlistIcon />}
              title="Smart Wishlists"
              description="Create beautiful wishlists with links, prices, and priorities. Share them instantly with friends and family."
              accent="#FF8C7A"
            />
            <FeatureCard
              icon={<EventIcon />}
              title="Event Planning"
              description="Organize gift exchanges for birthdays, holidays, and special occasions. Everyone stays in sync."
              accent="#FFD966"
            />
            <FeatureCard
              icon={<FriendsIcon />}
              title="Social Circle"
              description="Connect with friends, track important dates, and discover what they truly want."
              accent="#5BC4E0"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 md:py-32 px-5 md:px-8 bg-[#F7F7F7] relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <span className="inline-block px-4 py-1.5 bg-[#095F8A]/10 text-[#095F8A] rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-[#095F8A] leading-tight">
              Simple as 1, 2, 3, 4
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto">
              Get started in minutes and transform how you give and receive
              gifts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            <StepCard
              number="01"
              title="Create Account"
              description="Sign up and personalize your profile with your preferences and important dates."
            />
            <StepCard
              number="02"
              title="Build Wishlist"
              description="Add items you love with links, notes, and priority levels."
            />
            <StepCard
              number="03"
              title="Connect Friends"
              description="Find your people and share wishlists to plan perfect gifts."
            />
            <StepCard
              number="04"
              title="Celebrate Together"
              description="Organize exchanges and spread joy with every gift."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-[#095F8A] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1299BE]/20 blob" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 blob" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 reveal">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white leading-tight">
              Ready to Transform
              <span className="block mt-1">Gift Giving?</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl mx-auto">
              Join thousands on our waitlist and be the first to experience the
              future of thoughtful gifting.
            </p>

            <div className="mt-10 max-w-md mx-auto">
              {submitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-5 py-4 rounded-2xl sm:rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40 transition-all text-base"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-white text-[#095F8A] rounded-2xl sm:rounded-full font-semibold hover:bg-[#FFD966] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-5 md:px-8 bg-[#074d6f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="#" className="flex items-center gap-2.5">
              <GiftLogo scrolled={false} />
              <span className="text-xl font-bold font-display text-white">
                GiftSwap
              </span>
            </a>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/60 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>

            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} GiftSwap
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components

function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) {
  return (
    <a
      href={href}
      className={`relative text-sm font-medium transition-colors duration-300 group ${
        scrolled ? "text-[#5A5A5A] hover:text-[#095F8A]" : "text-white/80 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
          scrolled ? "bg-[#095F8A]" : "bg-white"
        }`}
      />
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  delay,
  visible,
  isButton,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  delay: number;
  visible: boolean;
  isButton?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-2xl font-display font-medium text-white transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${isButton ? "mt-4 px-8 py-3 bg-white text-[#095F8A] rounded-full text-lg" : ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </a>
  );
}

function SuccessMessage() {
  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 animate-scale-in">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5BC4E0]/30 flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <p className="text-xl font-display font-semibold">You&apos;re on the list!</p>
      <p className="mt-2 text-white/70">We&apos;ll notify you when GiftSwap launches.</p>
    </div>
  );
}

function StoreBadge({ type }: { type: "apple" | "google" }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/15 text-white/80 hover:bg-white/15 hover:border-white/25 transition-all cursor-pointer group">
      {type === "apple" ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm18-17v17c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM15.5 12l-6.5 6.5V5.5l6.5 6.5z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-wider opacity-70">
          {type === "apple" ? "Download on the" : "Get it on"}
        </div>
        <div className="text-sm font-semibold -mt-0.5">
          {type === "apple" ? "App Store" : "Google Play"}
        </div>
      </div>
      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
        Soon
      </span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-lift border border-[#EDEDED]">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${accent}20` }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-[#095F8A] mb-3">
        {title}
      </h3>
      <p className="text-[#5A5A5A] leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative group">
      {/* Connector line for desktop */}
      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#1299BE]/30 to-transparent -z-10" />

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#EDEDED]">
        <div className="text-5xl font-display font-bold text-[#1299BE]/20 mb-4 group-hover:text-[#1299BE]/40 transition-colors">
          {number}
        </div>
        <h3 className="text-lg font-display font-semibold text-[#095F8A] mb-2">
          {title}
        </h3>
        <p className="text-[#5A5A5A] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// Icon Components

function GiftLogo({ scrolled }: { scrolled: boolean }) {
  const color = scrolled ? "#095F8A" : "white";
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12V22H4V12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7H2V12H22V7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingGift({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 12V22H4V12" />
      <path d="M22 7H2V12H22V7Z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" />
      <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF8C7A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11L12 14L22 4" />
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" />
    </svg>
  );
}

function EventIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFD966"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" />
      <path d="M16 2V6" />
      <path d="M8 2V6" />
      <path d="M3 10H21" />
      <circle cx="12" cy="16" r="2" fill="#FFD966" />
    </svg>
  );
}

function FriendsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5BC4E0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
    </svg>
  );
}
