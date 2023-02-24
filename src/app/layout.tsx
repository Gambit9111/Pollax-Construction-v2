import "./globals.css";
import Header from "@/components/navigation/header/Header";
import Footer from "@/components/navigation/footer/Footer";

import { Kanit } from "@next/font/google";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-kanit",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kanit.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-my-white font-kanit text-my-black">
        <Header />
        <main className="mx-auto max-w-lg xl:mx-0 xl:max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
