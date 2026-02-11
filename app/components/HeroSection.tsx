import Link from 'next/link';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export default function HeroSection({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Readonly<HeroSectionProps>) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100vh-74px)] items-center justify-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_80%_at_50%_0%,rgba(28,115,170,0.2)_0%,rgba(28,115,170,0.06)_44%,rgba(15,77,119,0.03)_68%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1c73aa1f] blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="inline-flex items-center rounded-full border border-[#113b5f3b] bg-white/78 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#0f4d77] sm:text-sm">
          Firose Enterprises
        </p>

        <h1
          id="hero-title"
          className="mt-5 max-w-[18ch] text-balance text-4xl font-semibold leading-tight text-[#0f4d77] sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[#4a6279] sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <Link href={primaryCtaHref} className="fe-btn-primary w-full sm:w-auto">
            {primaryCtaLabel}
          </Link>
          <Link href={secondaryCtaHref} className="fe-link-chip w-full sm:w-auto">
            {secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
