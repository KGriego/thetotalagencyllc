import "./globals.css";
import Header from '../lib/components/header'
import Hero from '../lib/components/hero'
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Footer from '../lib/components/footer'

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <Hero />
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
