import type { Metadata } from 'next';
import Link from 'next/link';
import BrandPlaceholder from './components/BrandPlaceholder';
import styles from '../brands.module.css';

export const metadata: Metadata = {
  title: 'Neat & Fresh',
  description: 'Neat & Fresh is the housekeeping products brand under FiroseEnterprises.',
};

export default function NeatFresh() {
  return (
    <main className={styles.brandPage}>
      <h1 className={styles.brandTitle}>Neat &amp; Fresh</h1>
      <p className={styles.brandLead}>Housekeeping product brand.</p>
      <Link href="/brands" className={styles.backLink}>
        Back to all brands
      </Link>
      <BrandPlaceholder />
    </main>
  );
}
