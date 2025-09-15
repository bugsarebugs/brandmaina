import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Outfit, Playfair_Display } from 'next/font/google'
import { CartProvider } from "@/contexts/CartContext";
import { MessageProvider } from "@/contexts/MessageContext";
import MessageToast from "@/components/MessageToast";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BRAND MAINA - Clothing Brand",
  description: "Premium Fashion Website offering stylish and premium clothing.",
  keywords: "fashion, clothing, brandmaina, premium fashion, style, Africa fashion",
  authors: [{ name: "BrandMaina Team", url: "https://brandmaina.com/about" }],
  creator: "BrandMaina",
  publisher: "BrandMaina",
  openGraph: {
    title: "BRAND MAINA - Premium Fashion Brand",
    description: "Discover the latest trends in premium clothing at BrandMaina.",
    url: "https://brandmaina.com",
    siteName: "BrandMaina",
    images: [
      {
        url: "https://brandmaina.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrandMaina Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAND MAINA - Premium Fashion Brand",
    description: "Discover the latest trends in premium clothing at BrandMaina.",
    creator: "@brandmaina",
    images: ["https://brandmaina.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}  antialiased overflow-x-hidden`}
      >
        <CartProvider>
          <MessageProvider>
            <Navigation/>
            {children}
            <MessageToast />
          </MessageProvider>
        </CartProvider>
      </body>
    </html>
  );
}
