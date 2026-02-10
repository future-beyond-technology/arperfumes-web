import Link from 'next/link';
import styles from '@/styles/components.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={styles.heroContent}>
        <p className={styles.heroLogo}>AR PERFUME</p>
        <h1 className={styles.heroHeadline}>Define Your Presence</h1>
        <p className={styles.heroSubheadline}>A signature fragrance for every soul</p>
        <div className={styles.heroCta}>
          <Link href="#products" className={`${styles.btn} ${styles.btnPrimary}`}>
            Explore Collection
          </Link>
          <Link href="#why-choose" className={`${styles.btn} ${styles.btnSecondary}`}>
            Why Choose AR
          </Link>
        </div>
      </div>
    </section>
  );
}
