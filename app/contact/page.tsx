import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import PageIntro from '@/components/PageIntro';
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from '@/styles/components.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach AR Perfume for fragrance enquiries and place your order through WhatsApp in minutes.',
};

export default function ContactPage() {
  return (
    <main className={styles.pageMain}>
      <PageIntro
        title="Contact AR Perfume"
        description="Order enquiries, product support, and gifting requests are handled directly by our team."
      />
      <Contact
        sectionId="contact-page"
        introTitle="Order & Enquiries"
        introText="Connect with us and we will guide you to the right fragrance and gifting option."
        showBusinessDetails
      />
      <WhatsAppButton />
    </main>
  );
}
