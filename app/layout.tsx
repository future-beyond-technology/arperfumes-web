import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://arperfumes.vercel.app'),
  title: {
    default: 'AR Perfume | Define Your Presence',
    template: '%s | AR Perfume',
  },
  description:
    'AR Perfume offers signature luxury attars and gift-ready fragrances. Explore the collection and place your order directly on WhatsApp.',
  openGraph: {
    title: 'AR Perfume | Define Your Presence',
    description: 'Discover signature fragrances from AR Perfume and order directly on WhatsApp.',
    url: 'https://arperfumes.vercel.app',
    siteName: 'AR Perfume',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/about.png',
        width: 1200,
        height: 630,
        alt: 'AR Perfume brand story',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
