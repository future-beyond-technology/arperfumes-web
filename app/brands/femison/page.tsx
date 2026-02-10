import type { Metadata } from 'next';
import Link from 'next/link';
import BrandPlaceholder from './components/BrandPlaceholder';
import styles from '../brands.module.css';

export const metadata: Metadata = {
  title: 'Femison',
  description: 'Femison is the gripe water product brand under FiroseEnterprises.',
};

export default function Femison() {
  return (
    <main className={styles.brandPage}>
      <h1 className={styles.brandTitle}>Femison</h1>
      <p className={styles.brandLead}>Gripe water product brand.</p>
      <Link href="/brands" className={styles.backLink}>
        Back to all brands
      </Link>
      <BrandPlaceholder />
    </main>
  );
}
