import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mood Jay",
  description: "Jay is here for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-8 w-screen h-screen flex flex-col bg-[#98C1D9] gap-8">
          {children}
        </main>
      </body>
    </html>
  );
}
