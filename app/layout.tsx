import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke | Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[#0b1622] text-[#f8f5f0]`}
      >
        <header className="sticky top-0 z-50 border-b border-[#22364d] bg-[#0b1622]/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/" className="transition hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Luke logo"
                width={40}
                height={40}
                priority
              />
            </Link>

            <div className="flex gap-8 text-sm font-medium text-[#b8c2cf]">
              <Link href="/" className="transition hover:text-[#e57200]">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-[#e57200]">
                About
              </Link>
            </div>
          </nav>
        </header>

        <div className="min-h-[calc(100vh-140px)]">{children}</div>

        <footer className="mt-20 border-t border-[#22364d]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-[#b8c2cf]">
            <p>© {new Date().getFullYear()} Luke Mauzy</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/luke-mauzy-80b922326/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#e57200]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}