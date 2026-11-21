import { localized } from "../i18n.js";

const timeline = [
  {
    role: "Software Developer",
    place: "PT. Mobilus Interactive",
    period: { id: "Feb 2026 - Sekarang", en: "Feb 2026 - Present" },
    description: {
      id: "Mengerjakan API, interfaces, dan integrations untuk sistem operasional, transaksi, serta layanan kesehatan dalam tim.",
      en: "Work on APIs, interfaces, and integrations for operational, transaction, and healthcare systems in a team.",
    },
    current: true,
  },
  {
    role: "Freelance Software Developer",
    place: { id: "Berbagai klien", en: "Various clients" },
    period: { id: "2025 - Sekarang", en: "2025 - Present" },
    description: {
      id: "Mengerjakan website dan aplikasi web untuk berbagai klien, mulai dari frontend hingga API integrations dan transaction flows.",
      en: "Build websites and web applications for various clients, from frontend work to API integrations and transaction flows.",
    },
    available: true,
  },
  {
    role: "Universitas Suryakancana Cianjur",
    place: { id: "Teknik Informatika", en: "Informatics Engineering" },
    period: "2019 - 2025",
    description: {
      id: "Menempuh pendidikan Teknik Informatika dengan fokus pada software development.",
      en: "Studied informatics engineering with a focus on software development.",
    },
  },
  {
    role: "Fullstack Software Developer",
    place: "PT. Atlantic Aksa Group",
    period: "Nov 2023 - Apr 2025",
    description: {
      id: "Mengembangkan POS systems dan transaction portal untuk operasional multi-cabang.",
      en: "Developed POS systems and transaction portals for multi-branch operations.",
    },
  },
  {
    role: "SMK N 1 Cianjur",
    place: {
      id: "Rekayasa Perangkat Lunak (RPL)",
      en: "Software Engineering",
    },
    period: "2016 - 2019",
    description: {
      id: "Mempelajari dasar software engineering sebelum melanjutkan ke pendidikan tinggi.",
      en: "Built foundational software engineering skills before continuing to higher education.",
    },
  },
];

export default function Home({ entries = [], language, t }) {
  const techStack = [...new Set(entries.flatMap((entry) => entry.techStack))].sort((a, b) =>
    a.localeCompare(b, language)
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-8">
          <h1 className="text-fluid-display font-extrabold text-balance">
            Yogi Ardiansyah Nugraha
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.home.intro}
          </p>
        </div>
        <aside
          aria-label={t.home.contactLabel}
          className="min-w-0 border-t border-ink pt-5 lg:col-span-4 lg:pt-16"
        >
          <ul className="space-y-2 text-sm text-muted">
            <li className="break-all">
              <a
                className="underline-offset-4 hover:underline"
                href="mailto:yogiardiansyahn@gmail.com"
              >
                yogiardiansyahn@gmail.com
              </a>
            </li>
            <li className="break-all">
              <a
                lang="en"
                className="underline-offset-4 hover:underline"
                href="https://github.com/Yogi-ArdiansyahN"
              >
                github.com/Yogi-ArdiansyahN
              </a>
            </li>
            <li className="break-all">
              <a
                className="underline-offset-4 hover:underline"
                href="https://instagram.com/yogiardnsyhn"
              >
                @yogiardnsyhn
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <section aria-labelledby="experience-heading">
        <div className="border-b border-ink/20 pb-4">
          <h2 id="experience-heading" className="text-fluid-section font-extrabold">
            {t.home.experienceHeading}
          </h2>
        </div>
        <div className="journey-wrap">
          <svg
            aria-hidden="true"
            className="journey-road"
            preserveAspectRatio="none"
            viewBox="0 0 1000 140"
          >
            <path d="M100 19 L300 119 L500 39 L700 119 L900 39" />
          </svg>
          <ol className="journey-roadmap">
            {timeline.map((item) => (
              <li key={item.role} className="journey-stop">
                <span className="journey-stop-marker" aria-hidden="true">
                  <span />
                </span>
                <div className="journey-stop-content">
                  <p className="journey-date">
                    {item.current && (
                      <span className="journey-current">{t.home.current}</span>
                    )}
                    {localized(item.period, language)}
                    {item.available && (
                      <span className="journey-available" lang="en">
                        {t.home.freelanceStatus}
                      </span>
                    )}
                  </p>
                  <h3 className="journey-title">{item.role}</h3>
                  <p className="journey-place">
                    {item.href ? (
                      <a className="underline-offset-4 hover:underline" href={item.href}>
                        {localized(item.place, language)}
                      </a>
                    ) : (
                      localized(item.place, language)
                    )}
                  </p>
                  <p className="journey-description">
                    {localized(item.description, language)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="stack-heading">
        <div className="border-b border-ink/20 pb-4">
          <h2 id="stack-heading" className="text-fluid-section font-extrabold">
            {t.home.stackHeading}
          </h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {t.home.stackCopy}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              lang="en"
              className="border border-ink/20 px-3 py-2 text-sm text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
