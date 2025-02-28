import type { Metadata } from "next";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";
import "./globals.css";

import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "FoodTuck",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      ><CartProvider>
      
        <Header2></Header2>
        {children}
<Footer></Footer>
</CartProvider>
      </body>
    </html>
  );
}
