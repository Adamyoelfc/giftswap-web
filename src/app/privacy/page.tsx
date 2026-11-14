import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | GiftSwap",
  description: "How GiftSwap collects, uses and protects your information.",
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="November 10, 2026">
      <p>
        GiftSwap helps friends and families organize gift exchanges, share wishlists and
        celebrate together. This policy explains what we collect when you use the GiftSwap
        app and website, why, and the choices you have. We do not sell or share your personal
        information for advertising, we do not show third-party ads, and we do not track you
        across other companies&apos; apps or websites.
      </p>

      <h2>Information you give us</h2>
      <ul>
        <li><strong>Account details</strong>: your name, email address, password (stored only as a one-way hash) and an @username. If you use <strong>Sign in with Apple</strong> we receive your Apple user ID and the name and email you choose to share (which may be an Apple private relay address). If you use <strong>Sign in with Google</strong> we receive your name, email and Google account ID.</li>
        <li><strong>Profile</strong>: an optional profile photo, birthday and interests (gift categories and short interests you write yourself, plus things to avoid).</li>
        <li><strong>Kids</strong>: if you add a child, the name and age you enter so you can keep a wishlist for them. The child does not get an account.</li>
        <li><strong>Events</strong>: the events you create or join, their type, dates, budget, optional address and cover image, and the people you invite by @username, email, QR code or share link.</li>
        <li><strong>Wishlists</strong>: the items you save, with their links, prices, notes and priority, and the gifts you claim on other people&apos;s lists.</li>
        <li><strong>Messages</strong>: what you post in an event chat, and in the anonymous chat between a Secret Santa giver and their recipient, including replies and reactions.</li>
        <li><strong>Reports and blocks</strong>: when you report a message or block someone, we keep the report (the message, who sent it and your reason) and your block list.</li>
        <li><strong>Website forms</strong>: if someone opens a wishlist web link and claims a gift without an account, the name and email they enter.</li>
        <li><strong>Support</strong>: anything you send us when you contact support.</li>
      </ul>

      <h2>Information collected automatically</h2>
      <ul>
        <li><strong>Push token</strong>: if you allow notifications, a device token so we can send you event, chat and wishlist updates.</li>
        <li><strong>Store link clicks</strong>: when you open a product in a store from GiftSwap, we record that click (product, store, time, IP address and user-agent) on our own servers so we can attribute affiliate commissions. This is not shared with ad networks.</li>
        <li><strong>Web app storage</strong>: if you use GiftSwap at app.giftswap.store, your browser keeps your sign-in and settings (such as dark mode) in its local storage so you stay signed in. It is not used for tracking. Signing out removes your sign-in, and clearing your browser data removes the rest.</li>
        <li><strong>Server logs</strong>: standard request logs (IP address, time, errors) kept for a short time for security and debugging.</li>
      </ul>
      <p>
        GiftSwap does not use third-party analytics or advertising SDKs. The app does not access
        your location, contacts or photo library unless you choose a photo to upload.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To run the app: create your account, run name draws, show wishlists to the people you share them with, deliver chat messages and send notifications and reminders.</li>
        <li>To send account email such as verification codes, password resets and the invitations and reminders you ask us to send.</li>
        <li>To power optional features such as gift suggestions, &ldquo;Write a card&rdquo; and automatic item categories (see AI features below).</li>
        <li>To review reports, enforce our <a href="/terms/">Terms of Use</a>, keep GiftSwap secure, prevent abuse and fix problems.</li>
      </ul>

      <h2>Who can see your information</h2>
      <ul>
        <li>Your name, @username and photo are visible to people who search for your exact @username or email, to your friends and to people in your events.</li>
        <li>Wishlists are visible to the friends and event participants you share them with. If you create a web link for a wishlist, anyone with that link can view the list and claim gifts on it, even without an account. You can turn the link off at any time.</li>
        <li>Name-draw results are shown only to the giver. In the anonymous chat, your recipient sees your messages but not who you are.</li>
        <li>Event chat is visible to that event&apos;s participants. Gift claims are hidden from the wishlist owner.</li>
      </ul>

      <h2>AI features</h2>
      <p>
        Some features send a small amount of information to <strong>Anthropic</strong> (the
        maker of Claude) to generate text. Gift suggestions send the recipient&apos;s first name,
        their interests, items on their wishlist and the event&apos;s type and budget. &ldquo;Write
        a card&rdquo; sends the occasion, tone and recipient&apos;s first name you enter. When you
        save an item, its name may be sent to pick a category. Anthropic processes this to return
        a result and does not use it to train its models.
      </p>

      <h2>Service providers</h2>
      <p>We share data only with providers that help us operate GiftSwap, and only what they need:</p>
      <ul>
        <li><strong>DigitalOcean</strong>: hosts our servers, database and uploaded photos in the United States.</li>
        <li><strong>Cloudflare</strong>: secures and delivers traffic to our website and servers.</li>
        <li><strong>Cloudinary</strong>: may store and resize uploaded photos.</li>
        <li><strong>Resend</strong>: sends account, invitation and reminder email.</li>
        <li><strong>Apple Push Notification service and Expo</strong>: deliver push notifications.</li>
        <li><strong>Anthropic</strong>: AI features described above.</li>
        <li><strong>Address search</strong> (Mapbox or the OpenStreetMap-based Photon service): when you type an event address, the text you type is sent to suggest matching places.</li>
        <li><strong>Apple and Google</strong>: if you choose to sign in with them.</li>
        <li><strong>Stores</strong> (for example Amazon): when you open a product link, it opens in your browser or the store&apos;s app and the store receives the visit under its own privacy policy. As an Amazon Associate we earn from qualifying purchases.</li>
      </ul>
      <p>We may also disclose information if required by law or to protect people from harm.</p>

      <h2>Retention and deleting your account</h2>
      <p>
        We keep your information while your account is active. You can edit or remove profile
        details, wishlists and events in the app at any time.
      </p>
      <p>
        You can delete your account in the app: <strong>Profile &rarr; Account settings &rarr;
        Delete account</strong>. Deletion happens right away and cannot be undone. We remove your
        name, email, password, @username, photo, birthday, Apple and Google sign-in links, push
        token, wishlists, friends, blocks, interests and notifications, and release the gifts you
        claimed. If you signed in with Apple, we also revoke GiftSwap&apos;s access to your Apple
        ID. Upcoming events you organize are handed to a guest or cancelled, and you leave the
        others. So that other people&apos;s past events and chats still make sense, past events,
        draw results and chat messages stay, shown under &ldquo;Deleted user&rdquo; with nothing
        that identifies you. Copies in our server backups are deleted as those backups expire
        (within 6 months).
      </p>
      <p>
        If you can&apos;t access the app, email {mail} from the address on your account and we
        will delete it for you within 30 days.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (including the EU/UK under the GDPR and California under the
        CCPA), you may have the right to access, correct, export or delete your personal
        information, and to object to certain processing. Contact us at {mail} to exercise any of
        these rights; we will not discriminate against you for doing so.
      </p>

      <h2>Children</h2>
      <p>
        GiftSwap accounts are for people 13 and older. Parents can add a child&apos;s wishlist to
        their own account; the child does not get an account and we do not knowingly collect
        personal information directly from children under 13. If you believe a child under 13
        has an account, email us and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        Data is sent over HTTPS, passwords are hashed, our servers accept connections only through
        Cloudflare, and access to our servers and backups is restricted. No system is perfectly
        secure, but we work to protect your information.
      </p>

      <h2>Changes</h2>
      <p>If we make material changes we will update this page and the date above, and tell you in the app.</p>

      <h2>Contact</h2>
      <p>Questions? Email {mail}.</p>
    </LegalPage>
  );
}
