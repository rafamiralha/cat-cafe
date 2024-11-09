import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



export const metadata: Metadata = {
  title: "Cat-Cafe",
  description: "This is a cat cafe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
