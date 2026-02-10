import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about FiroseEnterprises and the portfolio strategy behind its brands.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>About FiroseEnterprises</h1>
      <p className={styles.lead}>
        FiroseEnterprises operates a focused consumer brand portfolio with AR Perfumes, Neat &amp; Fresh, and Femison.
      </p>

      <section className={styles.sectionCard}>
        <p>Our objective is to scale category-specific brands while preserving individual brand identity.</p>
        <p>Each brand runs with dedicated positioning, product roadmaps, and customer channels.</p>
      </section>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.inlineAction}>
          Explore brands
        </Link>
        <Link href="/contact" className={styles.inlineAction}>
          Contact corporate team
        </Link>
      </div>
    </main>
  );
}
