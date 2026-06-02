import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@components/common/Header';
import { Footer } from '@components/common/Footer';
import { SEO } from '@lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: SEO.DEFAULT_TITLE,
  description: SEO.DEFAULT_DESCRIPTION,
  metadataBase: new URL(SEO.SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO.SITE_URL,
    siteName: 'Modern Blog Platform',
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: SEO.OG_IMAGE_WIDTH,
        height: SEO.OG_IMAGE_HEIGHT,
        alt: 'Modern Blog Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    creator: SEO.TWITTER_HANDLE,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SEO.SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
