import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Project from "./Project.jsx";
import { copy } from "../i18n.js";

const STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

const pages = [
  { id: "home", labelKey: "home", href: "/" },
  { id: "project", labelKey: "project", href: "/project" },
];

export default function App({ entries, page, pathname }) {
  const [language, setLanguage] = useState("en");
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [themeReady, setThemeReady] = useState(false);
  const t = copy[language];
  const pageCopy = page === "project" ? t.project : t.home;
  const currentPath = pathname.replace(/\/$/, "") || "/";
  const nextLanguage = language === "id" ? "en" : "id";
  const nextTheme = theme === "dark" ? "light" : "dark";
  const themeLabel = theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark;

  useEffect(() => {
    let saved = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (saved === "id" || saved === "en") setLanguage(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const setContent = (selector, value) => {
      document.head.querySelector(selector)?.setAttribute("content", value);
    };

    document.documentElement.lang = language;
    document.title = pageCopy.documentTitle;
    setContent('meta[name="description"]', pageCopy.description);
    setContent('meta[property="og:locale"]', t.ogLocale);
    setContent('meta[property="og:locale:alternate"]', nextLanguage === "id" ? "id_ID" : "en_US");
    setContent('meta[property="og:title"]', pageCopy.documentTitle);
    setContent('meta[property="og:description"]', pageCopy.description);
    setContent('meta[property="og:image:alt"]', t.ogImageAlt);
    setContent('meta[name="twitter:title"]', pageCopy.documentTitle);
    setContent('meta[name="twitter:description"]', pageCopy.description);
    setContent('meta[name="twitter:image:alt"]', t.ogImageAlt);
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {}
  }, [language, nextLanguage, ready, pageCopy, t.ogLocale, t.ogImageAlt]);

  useEffect(() => {
    const initial = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(initial);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0B0B0B" : "#FFFFFF");
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {}
  }, [theme, themeReady]);

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        {t.a11y.skip}
      </a>
      <header className="sticky top-0 z-30 border-b border-ink/20 bg-canvas">
        <div className="mx-auto flex w-full max-w-screen-lg flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex min-h-11 items-center text-left text-lg font-extrabold tracking-tight text-ink"
          >
            YOGIAN
          </a>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <nav aria-label={t.nav.mainLabel} className="grid min-w-0 flex-1 grid-cols-2 gap-1 sm:flex sm:flex-none">
              {pages.map((item) => {
                const active = currentPath === item.href;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center px-3 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-ink text-canvas"
                        : "text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    {t.nav[item.labelKey]}
                  </a>
                );
              })}
            </nav>
            <button
              type="button"
              aria-label={t.language.switchTo}
              data-tooltip={t.language.switchTo}
              onClick={() => setLanguage(nextLanguage)}
              className="icon-tooltip grid min-h-11 min-w-11 place-items-center border border-ink/50 text-ink transition-colors hover:border-ink hover:bg-surface"
            >
              {language === "id" ? (
                <svg aria-hidden="true" viewBox="0 0 24 16" className="h-4 w-6">
                  <rect width="24" height="16" fill="#fff" />
                  {Array.from({ length: 7 }, (_, index) => (
                    <rect
                      key={index}
                      y={index * (32 / 13)}
                      width="24"
                      height={16 / 13}
                      fill="#B31942"
                    />
                  ))}
                  <rect width="9.6" height={112 / 13} fill="#0A3161" />
                  {Array.from({ length: 12 }, (_, index) => (
                    <circle
                      key={index}
                      cx={1.6 + (index % 4) * 2.5}
                      cy={1.6 + Math.floor(index / 4) * 2.5}
                      r="0.45"
                      fill="#fff"
                    />
                  ))}
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 16" className="h-4 w-6">
                  <rect width="24" height="8" fill="#CE1126" />
                  <rect y="8" width="24" height="8" fill="#fff" />
                </svg>
              )}
            </button>
            <button
              type="button"
              aria-label={themeLabel}
              data-tooltip={themeLabel}
              onClick={() => setTheme(nextTheme)}
              className="icon-tooltip grid min-h-11 min-w-11 place-items-center border border-ink/50 text-ink transition-colors hover:border-ink hover:bg-surface"
            >
              {theme === "dark" ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-screen-lg flex-1 px-4 pb-4 pt-10 sm:px-6 sm:pt-12 lg:px-8"
      >
        <div className="view-panel">
          {page === "project" ? (
            <Project entries={entries} language={language} t={t} />
          ) : (
            <Home language={language} t={t} />
          )}
        </div>
      </main>
    </div>
  );
}
