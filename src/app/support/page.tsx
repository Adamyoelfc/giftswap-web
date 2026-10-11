import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support | GiftSwap",
  description: "Get help with GiftSwap — gift exchanges, wishlists and your account.",
};

const faqs = [
  {
    q: "How do I start a Secret Santa?",
    a: "Tap Create, choose a gift exchange, set the date and budget, then invite people by email or share the join code. When everyone is in, tap Draw names — each person privately sees who they are buying for.",
  },
  {
    q: "How do I join an event someone shared with me?",
    a: "Open the invite link on your iPhone, or go to Home → Join and enter the 6-character code from the organizer.",
  },
  {
    q: "Will the person I'm buying for see that I claimed their gift?",
    a: "No. Claims are hidden from the wishlist owner so the surprise stays a surprise. Other guests can see an item is taken, so nobody buys it twice.",
  },
  {
    q: "Can I make a wishlist for my kid or a baby on the way?",
    a: "Yes. Add a child from your profile, or create a baby shower event — the wishlist lives on your account and you manage it.",
  },
  {
    q: "I didn't get my verification or reset code.",
    a: "Check your spam or promotions folder, wait a minute and request a new code. Still nothing? Email us and we'll sort it out.",
  },
  {
    q: "How do I report abusive content or a user?",
    a: `Email ${SUPPORT_EMAIL} with the event name, the person's name or @handle and a screenshot if you can. We review every report within 24 hours and remove content or accounts that break our Terms of Use.`,
  },
  {
    q: "How do I delete my account?",
    a: `Email ${SUPPORT_EMAIL} from the address on your account and we'll permanently delete your account and data within 30 days.`,
  },
];

export default function Support() {
  return (
    <LegalPage title="How can we help?">
      <div className="rounded-2xl bg-blue-pale p-6 md:p-8 not-legal">
        <p className="text-lg text-blue-dark font-semibold">Contact support</p>
        <p className="mt-2">
          Email us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-blue-primary underline underline-offset-4">
            {SUPPORT_EMAIL}
          </a>
          . We usually reply within one business day. Include your iPhone model and what you were
          doing when the problem happened — screenshots help a lot.
        </p>
      </div>

      <h2>Frequently asked questions</h2>
      {faqs.map(({ q, a }) => (
        <details key={q} className="faq">
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}

      <h2>Terms and privacy</h2>
      <p>
        Read our <a href="/terms/">Terms of Use</a> and how we handle your data in our <a href="/privacy/">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
