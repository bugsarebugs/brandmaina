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
  description: "Premium Fashion WEbsite",
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
