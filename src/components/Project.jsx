import { useEffect, useRef, useState } from "react";
import { localized } from "../i18n.js";

function DetailContent({ entry, language }) {
  return (
    <>
      <p className="text-sm leading-relaxed text-muted">
        {localized(entry.description, language)}
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted">
        {entry.bullets[language].map((bullet, bulletIndex) => (
          <li key={bulletIndex}>{bullet}</li>
        ))}
      </ul>
      <p className="mt-3 border-t border-ink/20 pt-3 text-sm leading-relaxed text-ink">
        {localized(entry.highlight, language)}
      </p>
    </>
  );
}

export default function Project({ entries = [], language, t }) {
  const [activeSlug, setActiveSlug] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const activeEntry = entries.find((entry) => entry.slug === activeSlug);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeEntry && !dialog.open) dialog.showModal();
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

  return (
    <section aria-labelledby="project-heading" className="border-t border-ink/20 pt-10">
      <h2 id="project-heading" className="text-fluid-section font-extrabold">
        {t.project.heading}
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
        <strong className="font-bold text-ink">{t.project.noteHighlight}</strong>{" "}
        {t.project.noteRest}
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:gap-5">
        {entries.map((entry, index) => (
          <article
            key={entry.slug}
            className="flex min-w-0 flex-col border border-ink/20 bg-surface p-5 transition-colors hover:border-ink"
          >
            <span className="text-xs font-bold text-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-bold text-balance">
              {localized(entry.title, language)}
            </h3>
            <p className="mt-1 text-xs text-muted">
              {t.project.contributionLabel} {localized(entry.scope, language)}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1">
              {entry.techStack.map((tech) => (
                <li
                  key={tech}
                  lang="en"
                  className="border border-ink/20 px-2 py-0.5 text-[10px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={(e) => open(entry.slug, e.currentTarget)}
              className="mt-auto min-h-11 self-start border-t border-ink/20 pt-3 text-sm font-semibold text-ink transition-colors hover:text-muted print:hidden"
            >
              {t.project.detailsLabel}
            </button>
            <div className="hidden border-t border-ink/20 pt-3 print:mt-4 print:block">
              <DetailContent entry={entry} language={language} />
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={onDialogClose}
        onCancel={onDialogClose}
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
                <h3 id="project-dialog-title" className="mt-2 text-lg font-bold text-balance">
                  {localized(activeEntry.title, language)}
                </h3>
              </div>
              <button
                type="button"
                onClick={close}
                className="min-h-11 shrink-0 border border-ink/20 px-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-surface"
              >
                {t.close}
              </button>
            </div>
            <div className="mt-4">
              <DetailContent entry={activeEntry} language={language} />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
