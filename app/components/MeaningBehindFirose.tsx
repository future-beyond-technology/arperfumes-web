const firosePillars = [
  {
    letter: 'F',
    name: 'Foundation',
    description: 'We build on strong principles, disciplined execution, and enduring structure.',
  },
  {
    letter: 'I',
    name: 'Innovation',
    description: 'We continuously evolve, embracing technology and forward-thinking solutions.',
  },
  {
    letter: 'R',
    name: 'Responsibility',
    description: 'We operate with integrity, accountability, and commitment to excellence.',
  },
  {
    letter: 'O',
    name: 'Opportunity',
    description: 'We create platforms for growth - for our brands, partners, and communities.',
  },
  {
    letter: 'S',
    name: 'Sustainability',
    description: 'We focus on long-term impact, ensuring resilience and responsible expansion.',
  },
] as const;

export default function MeaningBehindFirose() {
  return (
    <section
      aria-labelledby="meaning-behind-firose-title"
      className="relative overflow-hidden rounded-3xl border border-[#113b5f24] bg-[linear-gradient(145deg,#ffffff_0%,#edf4fc_56%,#f8fbff_100%)] p-4 sm:p-6 lg:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_110%_at_0%_0%,rgba(28,115,170,0.14)_0%,rgba(28,115,170,0)_68%)]"
      />

      <header className="relative mx-auto max-w-3xl text-center">
        <h2 id="meaning-behind-firose-title" className="text-2xl font-semibold text-[#0f4d77] sm:text-3xl">
          The Meaning Behind FIROSE
        </h2>
        <p className="mt-3 text-sm text-[#4a6279] sm:text-base">
          FIROSE represents the symbolic legacy of five pillars that define our enterprise - values that guide our
          decisions, structure our operations, and shape our long-term vision.
        </p>
      </header>

      <ul className="relative mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5" role="list">
        {firosePillars.map((pillar) => (
          <li key={pillar.letter}>
            <article
              className="group h-full rounded-2xl border border-[#113b5f2a] bg-white/90 p-4 text-center shadow-[0_10px_22px_rgba(10,58,90,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#1c73aa66] hover:shadow-[0_0_0_1px_rgba(28,115,170,0.24),0_14px_28px_rgba(10,58,90,0.18)]"
              aria-labelledby={`pillar-${pillar.letter}`}
            >
              <p
                aria-hidden="true"
                className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#1c73aa44] bg-[#1c73aa18] text-3xl font-semibold text-[#0f4d77]"
              >
                {pillar.letter}
              </p>
              <h3 id={`pillar-${pillar.letter}`} className="mt-3 text-lg font-semibold text-[#0f4d77]">
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm text-[#4a6279]">{pillar.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
