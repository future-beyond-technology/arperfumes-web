import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Brand Overview',
  description: 'Overview of AR Perfumes, Neat & Fresh, and Femison under FiroseEnterprises.',
};

export default function BrandsOverview() {
  return (
    <main className={styles.brandPage}>
      <h1 className={styles.brandTitle}>Our Brands</h1>
      <p className={styles.brandLead}>FiroseEnterprises currently operates three focused consumer brands.</p>

      <ul className={styles.brandList}>
        <li>
          <Link href="/brands/ar-perfumes" className={styles.brandItemLink}>
            AR Perfumes
          </Link>
        </li>
        <li>
          <Link href="/brands/neat-fresh" className={styles.brandItemLink}>
            Neat &amp; Fresh
          </Link>
        </li>
        <li>
          <Link href="/brands/femison" className={styles.brandItemLink}>
            Femison
          </Link>
        </li>
      </ul>

      <Link href="/" className={styles.backLink}>
        Back to corporate home
      </Link>
    </main>
  );
}
