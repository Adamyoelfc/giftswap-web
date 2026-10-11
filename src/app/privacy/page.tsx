import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | GiftSwap",
  description: "How GiftSwap collects, uses and protects your information.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 7, 2026">
      <p>
        GiftSwap helps friends and families organize gift exchanges, share wishlists and
        celebrate together. This policy explains what we collect when you use the GiftSwap
        app and website, why, and the choices you have. We do not sell your personal
        information, and we do not show third-party advertising.
      </p>

      <h2>Information you give us</h2>
      <ul>
        <li><strong>Account details</strong> — your name, email address, password (stored only as a one-way hash) and an auto-generated @handle. If you sign in with Google we receive your name, email and Google account ID.</li>
        <li><strong>Profile</strong> — an optional profile photo, birthday and gift preferences (sizes, favorite things, things to avoid).</li>
        <li><strong>Events and wishlists</strong> — the events you create or join, their dates, budgets, optional location, cover images, participants you invite by email, and the items on your wishlists.</li>
        <li><strong>Messages and photos</strong> — messages and images you post in an event chat.</li>
        <li><strong>Support</strong> — anything you send us when you contact support.</li>
      </ul>

      <h2>Information collected automatically</h2>
      <ul>
        <li><strong>Push token</strong> — if you allow notifications, a device token so we can send you event and wishlist updates.</li>
        <li><strong>Affiliate clicks</strong> — when you open a product in a partner store from inside the app, we record that click (product, store, time, IP address and browser user-agent) so the store can attribute any resulting purchase.</li>
        <li><strong>Server logs</strong> — standard request logs (IP address, time, errors) kept for security and debugging.</li>
      </ul>
      <p>We do not use third-party analytics or advertising SDKs, and we do not track you across other companies&apos; apps or websites.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To run the app: create your account, run name draws, show wishlists to the people you share them with, and deliver chat messages and notifications.</li>
        <li>To send account email such as verification codes, password resets and invitations you ask us to send.</li>
        <li>To keep GiftSwap secure, prevent abuse and fix problems.</li>
      </ul>

      <h2>Who can see your information</h2>
      <p>
        Wishlists are visible to the friends and event participants you share them with, or to
        anyone with the link if you make a wishlist public. Name-draw results are only shown to
        the person who drew them. Event chat is visible to that event&apos;s participants.
      </p>

      <h2>Service providers</h2>
      <p>We share data only with providers that help us operate GiftSwap, and only what they need:</p>
      <ul>
        <li><strong>Cloudinary</strong> — stores uploaded photos.</li>
        <li><strong>Email delivery</strong> (Google Workspace / SendGrid) — sends account and invitation email.</li>
        <li><strong>Apple Push Notification service / Expo</strong> — delivers push notifications.</li>
        <li><strong>Anthropic</strong> — when you use “Write a card”, the occasion, tone and recipient first name you enter are sent to generate a suggested message. It is not used to train models.</li>
        <li><strong>Partner stores</strong> (for example Amazon, Walmart, eBay) — when you open a product link, the store receives the visit under its own privacy policy.</li>
        <li><strong>Google</strong> — if you choose Google Sign-In.</li>
      </ul>
      <p>We may also disclose information if required by law.</p>

      <h2>Retention and deletion</h2>
      <p>
        We keep your information while your account is active. You can edit or remove profile
        details, wishlists and events in the app at any time. To delete your account and
        associated data, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the
        address on your account and we will complete the deletion within 30 days.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (including the EU/UK under the GDPR and California under the
        CCPA), you may have the right to access, correct, export or delete your personal
        information, and to object to certain processing. Contact us to exercise any of these
        rights; we will not discriminate against you for doing so.
      </p>

      <h2>Children</h2>
      <p>
        GiftSwap accounts are for people 13 and older. Parents can add a child&apos;s wishlist to
        their own account; the child does not get an account and we do not knowingly collect
        personal information directly from children under 13.
      </p>

      <h2>Security</h2>
      <p>
        Data is sent over HTTPS, passwords are hashed, and access to our servers is restricted.
        No system is perfectly secure, but we work to protect your information.
      </p>

      <h2>Changes</h2>
      <p>If we make material changes we will update this page and the date above, and tell you in the app.</p>

      <h2>Contact</h2>
      <p>Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
    </LegalPage>
  );
}
