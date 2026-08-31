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
  title: "Luke Mauzy | Portfolio",
  description: "Electrical engineer building at the intersection of hardware, analog circuits, and embedded systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} noise grid-bg min-h-screen antialiased`}
      >
        <header className="fixed top-0 z-50 w-full border-b border-border-subtle bg-bg/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-card transition-colors group-hover:border-accent/30">
                <Image
                  src="/logo.png"
                  alt="LM"
                  width={28}
                  height={28}
                  priority
                  className="rounded"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-text">
                Luke Mauzy
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="link-underline rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="link-underline rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        <div className="pt-[73px]">{children}</div>

        <footer className="border-t border-border-subtle">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-10">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Luke Mauzy
            </p>
            <div className="flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/luke-mauzy-80b922326/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
              >
                LinkedIn
              </a>
              <a
                href="mailto:lmauzy44@gmail.com"
                className="rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
