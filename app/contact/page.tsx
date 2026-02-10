import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact FiroseEnterprises for partnership, distribution, and portfolio enquiries.',
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Contact FiroseEnterprises</h1>
      <p className={styles.lead}>Reach the corporate team for brand partnerships, distribution, and investor discussions.</p>

      <section className={styles.sectionCard}>
        <ul className={styles.contactList}>
          <li>Email: corporate@firoseenterprises.com</li>
          <li>Phone: +91 7904674841</li>
          <li>Location: India</li>
        </ul>
      </section>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.inlineAction}>
          Open brand directory
        </Link>
        <Link href="/brands/ar-perfumes" className={styles.inlineAction}>
          Visit AR Perfumes
        </Link>
      </div>
    </main>
  );
}
