import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  buildBrandMailToUrl,
  buildBrandWhatsAppUrl,
  getBrandBySlug,
} from '@/app/lib/brands';
import { brandVisuals } from '@/app/lib/brandVisuals';
import FemisonContactCard from './components/FemisonContactCard';
import FemisonCtaBlocks from './components/FemisonCtaBlocks';
import FemisonHero from './components/FemisonHero';
import FemisonProductSections from './components/FemisonProductSections';
import brandStyles from './components/femison.module.css';
import styles from '../brands.module.css';

const femisonBrand = getBrandBySlug('femison');
const femisonContact = femisonBrand.contact;

const femisonWhatsAppUrl = buildBrandWhatsAppUrl(
  femisonContact,
  'Hello, I would like to discuss Femison baby gripe water, Arwat, and glucose distribution opportunities.'
);
const femisonMailToUrl = buildBrandMailToUrl(
  femisonContact,
  'Femison Enquiry',
  'Hello, I would like to discuss Femison baby gripe water, Arwat, and glucose product information and channel opportunities.'
);
const femisonVisual = brandVisuals.femison;

export const metadata: Metadata = {
  title: 'Femison',
  description:
    'Femison is the baby gripe water, Arwat, and glucose brand under Firose Enterprises, built for infant care and everyday family wellness.',
};

export default function Femison() {
  return (
    <main className={`${styles.brandPage} ${brandStyles.brandPageTheme}`}>
      <p className={`${styles.metaTag} ${brandStyles.brandMeta}`}>Baby Care &amp; Nutrition Brand</p>

      <section className={styles.brandSpotlight}>
        <div className={styles.brandSpotlightMedia}>
          <Image
            src={femisonVisual.heroImage}
            alt={femisonVisual.alt}
            fill
            className={styles.brandSpotlightImage}
            sizes="(max-width: 899px) 100vw, 50vw"
            priority
          />
        </div>

        <div className={styles.brandSpotlightContent}>
          <p className={`${styles.brandSpotlightBadge} ${brandStyles.brandMeta}`}>{femisonVisual.focus}</p>
          <h2 className={`${styles.brandSpotlightTitle} ${brandStyles.heroTitle}`}>Femison</h2>
          <p className={styles.brandSpotlightText}>
            Femison supports infant care and family wellness with trusted gripe water, Arwat, and glucose products
            backed by safety-oriented quality controls.
          </p>
          <div className={styles.brandSpotlightChips}>
            <p className={`${styles.brandSpotlightChip} ${brandStyles.brandMeta}`}>Baby Gripe Water</p>
            <p className={`${styles.brandSpotlightChip} ${brandStyles.brandMeta}`}>Arwat Formulations</p>
            <p className={`${styles.brandSpotlightChip} ${brandStyles.brandMeta}`}>Glucose for All Ages</p>
          </div>
        </div>
      </section>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.backLink}>
          Back to All Brands
        </Link>
        <Link href="/business-with-us" className={`${styles.inlineBrandAction} ${brandStyles.brandAction}`}>
          Inquiry
        </Link>
      </div>

      <FemisonHero whatsappUrl={femisonWhatsAppUrl} contactPerson={femisonContact.personName} />
      <FemisonProductSections />
      <FemisonContactCard contact={femisonContact} whatsappUrl={femisonWhatsAppUrl} mailtoUrl={femisonMailToUrl} />
      <FemisonCtaBlocks whatsappUrl={femisonWhatsAppUrl} mailtoUrl={femisonMailToUrl} />
    </main>
  );
}
