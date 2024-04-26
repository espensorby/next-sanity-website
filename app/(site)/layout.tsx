import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getPages } from '@/sanity/sanity-utils';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Espens Portfolio',
  description: 'This is where I showcase my work and projects.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  console.log('Pages: ', pages);

  return (
    <html lang="en">
      <body className={`max-w-5xl mx-auto px-5 py-8 ${inter.className}`}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Home
          </Link>
          <div className="flex items-center gap-5 text-small text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
