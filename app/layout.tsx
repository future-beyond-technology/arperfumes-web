import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import styles from './corporate.module.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://firoseenterprises.com'),
  title: {
    default: 'FiroseEnterprises',
    template: '%s | FiroseEnterprises',
  },
  description: 'Parent group for AR Perfumes, Neat & Fresh, and Femison.',
  openGraph: {
    title: 'FiroseEnterprises',
    description: 'Parent group for AR Perfumes, Neat & Fresh, and Femison.',
    url: 'https://firoseenterprises.com',
    siteName: 'FiroseEnterprises',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.shell}>
          <header className={styles.topBar}>
            <div className={styles.topInner}>
              <Link href="/" className={styles.brandMark}>
                FiroseEnterprises
              </Link>

              <nav className={styles.topNav} aria-label="Primary navigation">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/brands">Brands</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <p>FiroseEnterprises</p>
              <p>Parent group for AR Perfumes, Neat & Fresh, and Femison.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
