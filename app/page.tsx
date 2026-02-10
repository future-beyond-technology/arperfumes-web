import type { Metadata } from 'next';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhyChoose from '@/components/WhyChoose';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'AR Perfume is a premium fragrance brand. Explore our collection and place your order directly through WhatsApp.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <About variant="short" />
      <WhyChoose />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
