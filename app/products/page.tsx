import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import ProductGrid from '@/components/ProductGrid';
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from '@/styles/components.module.css';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse the complete AR Perfume collection and order your preferred fragrance directly on WhatsApp.',
};

export default function ProductsPage() {
  return (
    <main className={styles.pageMain}>
      <PageIntro
        title="Our Perfume Collection"
        description="Explore all AR Perfume signatures and choose the one that defines your presence."
      />
      <ProductGrid
        title="All Perfumes"
        subtitle="Six signature fragrances crafted for premium daily wear and gifting."
        sectionId="all-products"
      />
      <WhatsAppButton />
    </main>
  );
}
