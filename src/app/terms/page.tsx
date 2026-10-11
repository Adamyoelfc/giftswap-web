import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, SUPPORT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | GiftSwap",
  description: "The rules for using the GiftSwap app and website.",
};

// Where disputes are governed. If emptied,
// the governing-law sentence is left out.
const GOVERNING_LAW = "the State of Florida, United States";

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="October 11, 2026"
      intro="The short version: be kind, only post what you have the right to share, and keep the surprises secret. The full terms are below."
    >
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) are an agreement between you and GiftSwap
        (&ldquo;GiftSwap&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and apply to the GiftSwap mobile
        app, the website at giftswap.store and related services (together, the
        &ldquo;Service&rdquo;). By creating an account or using the Service you agree to these Terms
        and to our <Link href="/privacy/">Privacy Policy</Link>. If you do not agree, please do not
        use the Service.
      </p>

      <h2>1. Who can use GiftSwap</h2>
      <p>
        You must be at least 13 years old to create an account. If you are under the age of
        majority where you live, you may use GiftSwap only with the permission of a parent or
        guardian. Parents can add a child&apos;s wishlist to their own account; the child does not
        get an account. You are responsible for the information you add about your children.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>Give accurate information and keep your password private. You are responsible for activity on your account.</li>
        <li>One person per account. Don&apos;t impersonate anyone or create accounts on someone else&apos;s behalf without permission.</li>
        <li>Tell us right away at {mail} if you think someone has accessed your account.</li>
      </ul>

      <h2>3. What GiftSwap does</h2>
      <p>
        GiftSwap helps you organize gift exchanges and celebrations: create events, invite people,
        draw names, share wishlists, claim gifts and chat with the group. GiftSwap does not sell
        products, take payments or ship gifts. Purchases you make happen in third-party stores
        (see section 7). Name draws are random, and we cannot guarantee that every participant
        will take part, buy a gift or keep the surprise.
      </p>

      <h2>4. Your content</h2>
      <p>
        &ldquo;Your content&rdquo; means anything you add to GiftSwap: profile details, event
        names and descriptions, wishlist items, photos, chat messages and similar material. You
        keep ownership of your content. You give GiftSwap a worldwide, non-exclusive, royalty-free
        license to host, store, reproduce, display and share it only as needed to run the Service,
        for example showing your wishlist to the people you share it with. This license ends when
        you delete the content or your account, except for copies other people already received
        (such as messages in a group chat) and backups kept for a limited time.
      </p>
      <p>
        You confirm that you have the right to post your content, including permission from
        anyone who appears in photos you upload.
      </p>

      <h2>5. Community rules</h2>
      <p>
        GiftSwap is for friends and families. <strong>We have zero tolerance for objectionable
        content or abusive users.</strong> You agree not to post or send content that:
      </p>
      <ul>
        <li>harasses, bullies, threatens or intimidates anyone, or promotes violence or hate based on race, ethnicity, religion, disability, gender, age, sexual orientation or any other protected trait;</li>
        <li>is sexually explicit, or sexualizes minors in any way;</li>
        <li>is defamatory, deceptive, or shares someone else&apos;s private information without permission;</li>
        <li>infringes someone else&apos;s copyright, trademark or other rights;</li>
        <li>is spam, a scam, malware, or promotes illegal goods or activity.</li>
      </ul>
      <p>You also agree not to:</p>
      <ul>
        <li>try to access other people&apos;s accounts, events or draw results;</li>
        <li>scrape, reverse engineer, overload or interfere with the Service;</li>
        <li>use the Service for commercial advertising or to send unsolicited invitations.</li>
      </ul>

      <h2>6. Reporting, blocking and enforcement</h2>
      <p>
        You can report content or a user with the reporting tools in the app or by emailing {mail}.
        You can block a user to stop seeing their content and messages. We review reports within
        24 hours and may remove content, restrict features or suspend or terminate accounts that
        break these Terms, with or without notice. We may also report illegal content to the
        authorities.
      </p>

      <h2>7. Stores, affiliate links and other third parties</h2>
      <p>
        Wishlists and gift suggestions can link to products in third-party stores such as
        Amazon, Walmart, eBay and others. <strong>Some of these are affiliate links: if you buy
        through them, GiftSwap may earn a commission at no extra cost to you.</strong> Prices,
        availability, shipping, returns and the products themselves are the responsibility of each
        store, under its own terms and privacy policy. We are not responsible for third-party
        websites or for purchases you make there.
      </p>

      <h2>8. AI features</h2>
      <p>
        Features such as &ldquo;Write a card with AI&rdquo; and gift suggestions are generated
        automatically and may be inaccurate or unsuitable. Review anything generated before you
        use or send it. You are responsible for the messages you send.
      </p>

      <h2>9. Our content and license to use the app</h2>
      <p>
        The Service, including its design, logos, software and text (other than your content), is
        owned by GiftSwap and protected by law. We grant you a personal, non-transferable,
        non-exclusive, revocable license to use the app on devices you own or control, only as
        allowed by these Terms and, for the iOS app, the Apple Media Services Terms.
      </p>

      <h2>10. Ending your account</h2>
      <p>
        You can stop using GiftSwap at any time and delete your account from the app&apos;s
        settings or by emailing {mail}. When you delete your account we delete or anonymize your
        personal information as described in the <Link href="/privacy/">Privacy Policy</Link>. We
        may suspend or end your access if you break these Terms or if we stop offering the
        Service. Sections 4 (for content already shared), 7, 11, 12 and 14 survive termination.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        GiftSwap is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest
        extent the law allows, we disclaim all warranties, express or implied, including
        merchantability, fitness for a particular purpose and non-infringement. We don&apos;t
        promise the Service will be uninterrupted, error-free or that content will never be lost.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, GiftSwap will not be liable for any indirect,
        incidental, special, consequential or punitive damages, or for lost gifts, purchases,
        data or goodwill, arising from your use of the Service. Our total liability for any claim
        relating to the Service is limited to the greater of the amount you paid us in the 12
        months before the claim (GiftSwap is currently free) or US$50. Some places don&apos;t allow
        these limits, so they may not apply to you.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms as GiftSwap grows. If a change is significant we will tell you
        in the app or by email before it takes effect. Continuing to use GiftSwap after the
        change means you accept the new Terms.
      </p>

      <h2>14. Governing law</h2>
      <p>
        {GOVERNING_LAW
          ? `These Terms are governed by the laws of ${GOVERNING_LAW}, without regard to its conflict-of-law rules. `
          : ""}
        Nothing in these Terms takes away rights you have under the consumer-protection laws of
        the country where you live.
      </p>

      <h2>15. Apple App Store</h2>
      <p>If you downloaded GiftSwap from Apple&apos;s App Store, you also acknowledge that:</p>
      <ul>
        <li>these Terms are between you and GiftSwap only, not Apple, and GiftSwap, not Apple, is responsible for the app and its content;</li>
        <li>Apple has no obligation to provide maintenance or support for the app;</li>
        <li>if the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any); Apple has no other warranty obligation regarding the app;</li>
        <li>Apple is not responsible for addressing any claims relating to the app, including product liability, legal or regulatory compliance, or consumer-protection claims, nor for investigating or defending any third-party claim that the app infringes intellectual property rights;</li>
        <li>you are not located in a country subject to a U.S. Government embargo or listed on any U.S. Government list of prohibited or restricted parties;</li>
        <li>you must comply with any applicable third-party terms (such as your wireless carrier&apos;s) when using the app;</li>
        <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</li>
      </ul>

      <h2>16. Contact</h2>
      <p>Questions about these Terms? Email {mail}.</p>
    </LegalPage>
  );
}
