import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GiftSwap - Social Gift Exchange App | Coming Soon",
  description: "The ultimate app for managing gift exchanges, wishlists, and social events. Create wishlists, organize events, and share the joy of giving with friends and family.",
  keywords: ["gift exchange", "wishlist", "social app", "gift registry", "events", "birthday gifts", "giftswap"],
  authors: [{ name: "GiftSwap Team" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "GiftSwap - Social Gift Exchange App",
    description: "Create wishlists, organize gift exchanges, and share the joy of giving.",
    type: "website",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
