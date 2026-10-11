import type { Metadata, Viewport } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Same display face the app and the App Store artwork use.
const montserratAlt = Montserrat_Alternates({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giftswap.store"),
  title: "GiftSwap: Secret Santa, wishlists and group gifting",
  description:
    "Draw names in one tap, share wishlists people actually shop from, and claim gifts secretly so nobody buys the same thing twice.",
  keywords: ["secret santa", "gift exchange", "wishlist", "gift registry", "birthday gifts", "giftswap"],
  authors: [{ name: "GiftSwap" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "GiftSwap: gifting, minus the chaos",
    description: "Secret Santa draws, shareable wishlists and secret gift claiming in one app.",
    type: "website",
    url: "https://giftswap.store",
    images: ["/screens/secret-santa.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#095F8A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${montserratAlt.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
