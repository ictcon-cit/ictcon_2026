import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { FooterItems } from "@/utils/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICTCon2025",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="bg-tertiary sm:mt-24 mt-16">{children}</div>
        <Footer footerItems={FooterItems} />
      </body>
    </html>
  );
}
