import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support | GiftSwap",
  description: "Get help with GiftSwap — gift exchanges, wishlists and your account.",
};

const faqs = [
  {
    q: "How do I start a Secret Santa?",
    a: "Tap Create, choose a gift exchange, set the date and budget, then invite people by @username or a share link. When everyone is in, tap Draw names. Each person privately sees who they are buying for, nobody gets themselves, and repeat events avoid last year's pairs.",
  },
  {
    q: "How do I join an event someone shared with me?",
    a: "Open the invite link on your iPhone or in your browser, accept the invitation on your Home screen, or go to Events → Join and enter the 6-digit code from the organizer.",
  },
  {
    q: "Can I ask the person I'm buying for a question without giving myself away?",
    a: "Yes. After names are drawn, open the event and use the secret chat with the person you're gifting. They see your messages as coming from \"Your Secret Santa\", never your name.",
  },
  {
    q: "Will the person I'm buying for see that I claimed their gift?",
    a: "No. Claims are hidden from the wishlist owner so the surprise stays a surprise. Other guests can see an item is taken, so nobody buys it twice.",
  },
  {
    q: "Can I share my wishlist with someone who doesn't have the app?",
    a: "Yes. Open your wishlist, tap Share and turn on the web link. Anyone with the link can see the list in their browser and claim a gift with their name and email. You can turn the link off at any time.",
  },
  {
    q: "Can I make a wishlist for my kid or a baby on the way?",
    a: "Yes. Add a child from your profile, or create a baby shower event. The wishlist lives on your account and you manage it.",
  },
  {
    q: "Can I use GiftSwap on my computer?",
    a: "Yes. Go to app.giftswap.store in any browser and sign in with the same account you use in the app. Everything stays in sync. Push notifications are only on the phone app for now.",
  },
  {
    q: "I didn't get my verification or reset code.",
    a: "Check your spam or promotions folder, wait a minute and request a new code. Still nothing? Email us and we'll sort it out.",
  },
  {
    q: "How do I report or block someone?",
    a: `In any chat, long-press the message and choose Report or Block. Blocked people can't message you, and you can unblock them later from your profile. You can also email ${SUPPORT_EMAIL} with the event name, the person's @username and a screenshot. We review every report within 24 hours and remove content or accounts that break our Terms of Use.`,
  },
  {
    q: "How do I delete my account?",
    a: `In the app, go to Profile → Account settings → Delete account (at the bottom of the screen). It happens right away and can't be undone. Can't get into the app? Email ${SUPPORT_EMAIL} from the address on your account and we'll delete it for you.`,
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
          . We usually reply within one business day. Include your iPhone model (or browser, if you use the web app) and what you were
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
