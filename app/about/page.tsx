import type { Metadata } from 'next';
import About from '@/components/About';
import PageIntro from '@/components/PageIntro';
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from '@/styles/components.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn the story behind AR Perfume, our inspiration, and our commitment to quality and authenticity.',
};

export default function AboutPage() {
  return (
    <main className={styles.pageMain}>
      <PageIntro
        title="About AR Perfume"
        description="A premium fragrance house built on identity, intention, and authentic quality."
      />
      <About variant="full" sectionId="about-story" />
      <WhatsAppButton />
    </main>
  );
}
