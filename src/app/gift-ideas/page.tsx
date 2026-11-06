import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Gift ideas | GiftSwap",
  description: "Secret Santa and gift exchange ideas by budget and by person, picked by the GiftSwap team.",
};

const AMAZON_TAG = "giftswap0b-20";

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}

const sections: { title: string; blurb: string; ideas: { name: string; why: string; query: string }[] }[] = [
  {
    title: "Secret Santa under $25",
    blurb: "Small, useful and easy to get right when you only know the person a little.",
    ideas: [
      { name: "Cozy fuzzy socks", why: "Nobody has too many, and they fit everyone.", query: "cozy fuzzy socks gift set" },
      { name: "Insulated tumbler", why: "Keeps coffee hot on the commute and water cold at the gym.", query: "insulated tumbler 20 oz with lid" },
      { name: "Scented candle", why: "A safe bet for the office exchange.", query: "scented candle gift" },
      { name: "Party card game", why: "Something the whole group can play right after the exchange.", query: "party card game for adults" },
    ],
  },
  {
    title: "Gifts under $50",
    blurb: "A step up for close friends and family exchanges.",
    ideas: [
      { name: "Portable Bluetooth speaker", why: "Small enough for the beach, loud enough for a party.", query: "portable bluetooth speaker waterproof" },
      { name: "Weighted blanket throw", why: "The gift people keep using all winter.", query: "weighted blanket throw" },
      { name: "Instant camera film bundle", why: "Great for the friend who takes all the group photos.", query: "instant camera film bundle" },
      { name: "Coffee lover sampler", why: "A box of beans to try new roasts every morning.", query: "coffee sampler gift box" },
    ],
  },
  {
    title: "For kids",
    blurb: "Ideas that grow with them, for birthdays and holiday exchanges.",
    ideas: [
      { name: "Building blocks set", why: "Hours of play and endless rebuilds.", query: "building blocks set kids" },
      { name: "Art and craft kit", why: "Keeps little hands busy on rainy days.", query: "kids art craft kit" },
      { name: "Picture books bundle", why: "Bedtime stories they will ask for again.", query: "picture books for kids set" },
    ],
  },
  {
    title: "For the baby shower",
    blurb: "Practical things new parents actually use.",
    ideas: [
      { name: "Swaddle blankets", why: "You can never have too many.", query: "muslin swaddle blankets" },
      { name: "Baby bath set", why: "Gentle wash, towel and a toy for bath time.", query: "baby bath gift set" },
      { name: "Soft board books", why: "A first library for the newest reader.", query: "baby board books set" },
    ],
  },
];

export default function GiftIdeas() {
  return (
    <LegalPage
      title="Gift ideas"
      intro={
        <>
          Not sure what to put on your wishlist, or what to get the person you drew? Start here, then add
          your favorites to a wishlist in the GiftSwap app.
        </>
      }
    >
      <p className="text-sm text-gray-dark">
        As an Amazon Associate I earn from qualifying purchases. Links below go to Amazon and include our
        affiliate tag, at no extra cost to you.
      </p>

      {sections.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          <p>{s.blurb}</p>
          <ul>
            {s.ideas.map((i) => (
              <li key={i.name}>
                <a href={amazonSearch(i.query)} target="_blank" rel="sponsored noopener noreferrer">
                  <strong>{i.name}</strong>
                </a>{" "}
                on Amazon. {i.why}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2>Make it a wishlist</h2>
      <p>
        In GiftSwap, open a wishlist, tap Add and paste any product link. Share the list with your group, or
        turn on its web link so people without the app can see it and claim a gift.
      </p>
    </LegalPage>
  );
}
