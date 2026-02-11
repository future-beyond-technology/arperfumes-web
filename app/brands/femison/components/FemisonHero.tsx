import Link from 'next/link';
import styles from './femison.module.css';

type FemisonHeroProps = {
  whatsappUrl: string;
  contactPerson: string;
};

export default function FemisonHero({ whatsappUrl, contactPerson }: Readonly<FemisonHeroProps>) {
  return (
    <section className={styles.hero}>
      <p className={styles.heroBadge}>Baby Care &amp; Nutrition Brand</p>
      <h2 className={styles.heroTitle}>Femison</h2>
      <p className={styles.heroLead}>
        Femison offers baby gripe water, Arwat formulations, and glucose products built for infant comfort, family
        wellness, and trusted channel delivery.
      </p>

      <div className={styles.heroChipRow}>
        <p className={styles.heroChip}>Baby Gripe Water</p>
        <p className={styles.heroChip}>Arwat Formulations</p>
        <p className={styles.heroChip}>Glucose for All Ages</p>
      </div>

      <p className={styles.heroContactHint}>Primary contact person: {contactPerson}</p>

      <div className={styles.heroActionRow}>
        <Link href="/business-with-us" className={styles.heroPrimary}>
          Healthcare / Retail Inquiry
        </Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>
          WhatsApp Brand Contact
        </a>
      </div>
    </section>
  );
}
