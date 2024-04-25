import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Espens Portfolio',
  description: 'This is where I showcase my work and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-5xl mx-auto px-5 py-8 ${inter.className}`}>
        <header className="mt-5">
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Home
          </Link>
        </header>
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
