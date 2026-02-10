import Link from 'next/link';
import styles from '../../brands.module.css';

export default function BrandPlaceholder() {
  return (
    <section className={styles.placeholderPanel}>
      <h2>Femison</h2>
      <p>Gripe water product brand.</p>
      <p className={styles.statusBadge}>Placeholder content</p>
      <Link href="/contact" className={styles.inlineBrandAction}>
        Contact corporate team
      </Link>
    </section>
  );
}
