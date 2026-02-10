import type { Metadata } from 'next';
import Link from 'next/link';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import PageIntro from './components/PageIntro';
import ProductGrid from './components/ProductGrid';
import WhatsAppButton from './components/WhatsAppButton';
import WhyChoose from './components/WhyChoose';
import styles from '../brands.module.css';

export const metadata: Metadata = {
  title: 'AR Perfumes',
  description:
    'AR Perfumes is the flagship fragrance brand under FiroseEnterprises, featuring premium attars and gift-ready products.',
};

export default function ARPerfumesPage() {
  return (
    <main className={styles.brandPage}>
      <PageIntro
        title="AR Perfumes"
        description="Signature fragrance label under FiroseEnterprises with premium attars and curated gifting options."
      />

      <p className={styles.metaTag}>Flagship fragrance brand</p>
      <p className={styles.brandLead}>AR Perfumes content has been preserved inside the nested `/brands/ar-perfumes` route.</p>

      <Link href="/brands" className={styles.backLink}>
        Back to all brands
      </Link>

      <Hero />
      <ProductGrid />
      <About variant="short" />
      <WhyChoose />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
