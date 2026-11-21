import { profile, stackGroups, timeline } from "../data/resume.js";
import { localized } from "../i18n.js";

export default function Home({ language, t }) {
  const work = timeline.filter((item) => item.kind === "work");
  const education = timeline.filter((item) => item.kind === "education");

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-8">
          <h1 className="text-fluid-display font-extrabold text-balance">
            {profile.name}
          </h1>
          <p className="mt-3 text-base font-semibold text-ink sm:text-lg">
            {t.home.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.home.intro}
          </p>
          <div className="mt-7 flex flex-wrap items-start gap-3 print:hidden">
            <a
              href="/project"
              className="inline-flex min-h-11 items-center border border-ink bg-ink px-4 text-sm font-semibold text-canvas transition-colors hover:bg-transparent hover:text-ink"
            >
              {t.home.viewWork}
            </a>
            {/*
            <details className="resume-picker relative">
              <summary className="inline-flex min-h-11 items-center gap-2 border border-ink/50 px-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-surface">
                {t.home.downloadResume}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 8"
                  className="resume-picker-chevron h-2 w-3"
                >
                  <path
                    d="M1 1l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </summary>
              <div className="absolute left-0 top-[calc(100%+8px)] z-20 flex w-max max-w-[calc(100vw-32px)] flex-col border border-ink bg-canvas p-2 shadow-sm">
                <a
                  href="/resume-en.pdf"
                  download
                  className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
                >
                  {t.home.resumeEnglish}
                </a>
                <a
                  href="/resume-id.pdf"
                  download
                  className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
                >
                  {t.home.resumeIndonesian}
                </a>
              </div>
            </details>
            */}
          </div>
        </div>
        <aside
          aria-label={t.home.contactLabel}
          className="min-w-0 border-t border-ink pt-5 lg:col-span-4 lg:pt-16"
        >
          <ul className="space-y-2 text-sm text-muted">
            <li className="break-all">
              <a
                className="underline-offset-4 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            <li className="break-all">
              <a
                lang="en"
                className="underline-offset-4 hover:underline"
                href={profile.github}
              >
                {profile.githubLabel}
              </a>
            </li>
            <li className="break-all">
              <a
                className="underline-offset-4 hover:underline"
                href={profile.instagram}
              >
                {profile.instagramLabel}
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
        <div className="journey-wrap journey-wrap--three">
          <svg
            aria-hidden="true"
            className="journey-road"
            preserveAspectRatio="none"
            viewBox="0 0 1000 140"
          >
            <path d="M167 19 L500 119 L833 39" />
          </svg>
          <ol className="journey-roadmap">
            {work.map((item) => (
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
                    {localized(item.place, language)}
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

      <section aria-labelledby="education-heading">
        <div className="border-b border-ink/20 pb-4">
          <h2 id="education-heading" className="text-fluid-section font-extrabold">
            {t.home.educationHeading}
          </h2>
        </div>
        <ul className="mt-6 space-y-0">
          {education.map((item) => (
            <li key={item.role} className="border-b border-ink/20 py-5 last:border-b-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{item.role}</h3>
                <p className="text-sm text-muted">{localized(item.period, language)}</p>
              </div>
              <p className="mt-1 text-sm font-semibold text-ink">
                {localized(item.place, language)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {localized(item.description, language)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="stack-heading">
        <div className="border-b border-ink/20 pb-4">
          <h2 id="stack-heading" className="text-fluid-section font-extrabold">
            {t.home.stackHeading}
          </h2>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {t.home.stackCopy}
        </p>
        {stackGroups.map((group, groupIndex) => (
          <div key={group.key} className={groupIndex === 0 ? "mt-6" : "mt-5"}>
            <h3 className="text-sm font-bold text-ink">{t.home[group.key]}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <li
                  key={tech}
                  lang="en"
                  className={`border border-ink/20 text-muted ${
                    groupIndex === 0
                      ? "px-3 py-2 text-sm"
                      : "px-2 py-1 text-xs"
                  }`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
