import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Explore the brand family under FiroseEnterprises.',
};

export default function BrandsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <section className={styles.brandsShell}>
      <header className={styles.brandsHeader}>
        <p className={styles.brandsEyebrow}>FiroseEnterprises</p>
        <p className={styles.brandsTitle}>Brand Portfolio</p>

        <nav className={styles.brandsNav} aria-label="Brands navigation">
          <Link href="/brands">Overview</Link>
          <Link href="/brands/ar-perfumes">AR Perfumes</Link>
          <Link href="/brands/neat-fresh">Neat &amp; Fresh</Link>
          <Link href="/brands/femison">Femison</Link>
        </nav>
      </header>

      <div className={styles.brandsBody}>{children}</div>
    </section>
  );
}
