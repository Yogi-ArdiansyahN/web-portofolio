import { useEffect, useRef, useState } from "react";
import { localized } from "../i18n.js";

function TechStackList({ items = [], compact = false, className = "" }) {
  if (!items.length) return null;

  const size = compact
    ? "px-2 py-0.5 text-[10px]"
    : "px-2 py-1 text-xs";

  return (
    <ul className={`flex flex-wrap gap-1 ${className}`}>
      {items.map((tech) => (
        <li
          key={tech}
          lang="en"
          className={`border border-ink/20 text-muted ${size}`}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function DetailContent({ entry, language, t }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-wide text-ink">
        {t.project.overviewLabel}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        {localized(entry.overview, language)}
      </p>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink">
        {t.project.problemLabel}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        {localized(entry.problem, language)}
      </p>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink">
        {t.project.contributionSectionLabel}
      </p>
      <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted">
        {entry.bullets[language].map((bullet, bulletIndex) => (
          <li key={bulletIndex}>{bullet}</li>
        ))}
      </ul>

      <p className="mt-4 border-t border-ink/20 pt-3 text-xs font-bold uppercase tracking-wide text-ink">
        {t.project.highlightsLabel}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        {localized(entry.highlight, language)}
      </p>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink">
        {t.project.techStackLabel}
      </p>
      <TechStackList items={entry.techStack} className="mt-1" />
    </>
  );
}

const platformIcons = {
  "Web App": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </>
  ),
  "Mobile App": (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
};

function PlatformList({ items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <ul className={`flex flex-wrap gap-1 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          data-tooltip={item}
          className="icon-tooltip grid h-6 w-6 place-items-center text-ink [&::after]:left-0 [&::after]:right-auto"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            {platformIcons[item] ?? <circle cx="12" cy="12" r="8" />}
          </svg>
          <span className="sr-only">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Project({ entries = [], language, t }) {
  const [activeSlug, setActiveSlug] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const activeEntry = entries.find((entry) => entry.slug === activeSlug);
  const featuredEntries = entries.filter((entry) => entry.featured);
  const otherEntries = entries.filter((entry) => !entry.featured);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeEntry && !dialog.open) {
      dialog.showModal();
      dialog.querySelector("button")?.focus();
    }
    if (!activeEntry && dialog.open) dialog.close();
  }, [activeEntry]);

  const open = (slug, target) => {
    triggerRef.current = target;
    setActiveSlug(slug);
  };

  const close = () => {
    dialogRef.current?.close();
  };

  const onDialogClose = () => {
    setActiveSlug(null);
    triggerRef.current?.focus();
  };

  const renderCard = (entry) => {
    const number = String(entries.indexOf(entry) + 1).padStart(2, "0");

    return (
      <article
        key={entry.slug}
        className={`flex min-w-0 flex-col border bg-surface p-5 transition-colors ${
          entry.featured ? "border-ink" : "border-ink/20 hover:border-ink"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-ink">{number}</span>
          {entry.featured && (
            <span className="text-[10px] font-bold uppercase tracking-wide text-ink">
              {t.project.featuredLabel}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-bold text-balance">
          {localized(entry.title, language)}
        </h3>
        <p className="mt-1 text-xs text-muted">
          {t.project.contributionLabel} {localized(entry.scope, language)}
        </p>
        <TechStackList items={entry.techStack} compact className="mt-4" />
        <div className="mt-auto flex items-end justify-between gap-3 pt-5 print:hidden">
          <button
            type="button"
            onClick={(e) => open(entry.slug, e.currentTarget)}
            className="min-h-11 border border-ink/50 px-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-surface"
          >
            {t.project.detailsLabel}
          </button>
          <PlatformList items={entry.platform} />
        </div>
        <div className="hidden print:mt-4 print:block">
          <DetailContent entry={entry} language={language} t={t} />
        </div>
      </article>
    );
  };

  return (
    <section aria-labelledby="project-heading" className="pt-10">
      <h1 id="project-heading" className="text-fluid-section font-extrabold">
        {t.project.heading}
      </h1>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
        <strong className="font-bold text-ink">{t.project.noteHighlight}</strong>{" "}
        {t.project.noteRest}
      </p>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        {t.project.workflowNote}
      </p>

      {featuredEntries.length > 0 && (
        <section aria-labelledby="featured-heading" className="mt-10">
          <h2 id="featured-heading" className="border-b border-ink/20 pb-3 text-lg font-bold">
            {t.project.featuredHeading}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {featuredEntries.map(renderCard)}
          </div>
        </section>
      )}

      {otherEntries.length > 0 && (
        <section aria-labelledby="other-projects-heading" className="mt-10">
          <h2 id="other-projects-heading" className="border-b border-ink/20 pb-3 text-lg font-bold">
            {t.project.otherHeading}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {otherEntries.map(renderCard)}
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={onDialogClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="project-dialog m-auto w-[min(42rem,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-auto border border-ink/20 bg-canvas p-0 text-ink"
      >
        {activeEntry && (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-muted">
                  {t.project.contributionLabel} {localized(activeEntry.scope, language)}
                </p>
                <PlatformList items={activeEntry.platform} className="mt-2" />
                <h2 id="project-dialog-title" className="mt-2 text-lg font-bold text-balance">
                  {localized(activeEntry.title, language)}
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label={t.project.close}
                className="grid min-h-11 min-w-11 shrink-0 place-items-center border border-ink/50 text-ink transition-colors hover:border-ink hover:bg-surface"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <DetailContent entry={activeEntry} language={language} t={t} />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
