import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './corporate.module.css';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Corporate home for FiroseEnterprises and its brand portfolio.',
};

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>FiroseEnterprises</h1>
      <p className={styles.lead}>Parent group for AR Perfumes, Neat & Fresh, and Femison.</p>

      <nav className={styles.brandNav} aria-label="Brand links">
        <Link href="/brands/ar-perfumes" className={styles.brandLink}>
          AR Perfumes
        </Link>
        <Link href="/brands/neat-fresh" className={styles.brandLink}>
          Neat &amp; Fresh
        </Link>
        <Link href="/brands/femison" className={styles.brandLink}>
          Femison
        </Link>
      </nav>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.inlineAction}>
          View all brands
        </Link>
        <Link href="/about" className={styles.inlineAction}>
          About FiroseEnterprises
        </Link>
      </div>
    </main>
  );
}
