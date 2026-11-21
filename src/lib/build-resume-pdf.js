import { Buffer } from "node:buffer";
import PDFDocument from "pdfkit";
import { profile, stackGroups, timeline } from "../data/resume.js";
import { copy, localized } from "../i18n.js";
import { entries } from "./portfolio.js";

const LANGUAGES = new Set(["en", "id"]);

function ensureSpace(doc, height = 110) {
  if (doc.y + height > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
}

function sectionTitle(doc, text) {
  ensureSpace(doc, 45);
  doc.moveDown(0.5);
  doc.font("Helvetica-Bold").fontSize(12).fillColor("#111111").text(text);
  doc.moveDown(0.2);
}

function resumeItem(doc, heading, subheading, description) {
  ensureSpace(doc, 105);
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#111111").text(heading);
  doc.font("Helvetica").fontSize(9.5).fillColor("#333333").text(subheading);
  if (description) {
    doc.moveDown(0.15);
    doc.font("Helvetica").fontSize(10).fillColor("#111111").text(`- ${description}`);
  }
  doc.moveDown(0.35);
}

export function generateResumePdf(language = "en") {
  const lang = LANGUAGES.has(language) ? language : "en";
  const t = copy[lang];

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: 48,
      info: {
        Title: `${profile.name} - ${t.resume.title}`,
        Author: profile.name,
        Subject: profile.role,
        Creator: "Portfolio build",
      },
    });
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.font("Helvetica-Bold").fontSize(18).fillColor("#111111").text(profile.name);
    doc.moveDown(0.1);
    doc.font("Helvetica").fontSize(10).fillColor("#333333").text(profile.role);
    doc.moveDown(0.2);
    doc.fontSize(9.5);
    [profile.email, profile.githubLabel, profile.portfolioLabel].forEach((line) => {
      doc.text(line);
    });
    doc.moveDown(0.6);

    doc.font("Helvetica").fontSize(10).fillColor("#111111").text(t.home.intro);

    sectionTitle(doc, t.resume.experience);
    timeline
      .filter((item) => item.kind === "work")
      .forEach((item) => {
        const flags = [
          item.current ? t.home.current : null,
          item.available ? t.home.freelanceStatus : null,
        ].filter(Boolean);
        const subheading = [
          localized(item.place, lang),
          localized(item.period, lang),
          flags.join(", "),
        ]
          .filter(Boolean)
          .join(" | ");
        resumeItem(doc, item.role, subheading, localized(item.description, lang));
      });

    sectionTitle(doc, t.resume.education);
    timeline
      .filter((item) => item.kind === "education")
      .forEach((item) => {
        const subheading = [localized(item.place, lang), localized(item.period, lang)]
          .filter(Boolean)
          .join(" | ");
        resumeItem(doc, item.role, subheading, localized(item.description, lang));
      });

    sectionTitle(doc, t.resume.skills);
    stackGroups.forEach((group) => {
      ensureSpace(doc, 45);
      doc.font("Helvetica-Bold").fontSize(10).fillColor("#111111").text(t.home[group.key]);
      doc.font("Helvetica").fontSize(10).fillColor("#333333").text(group.items.join(", "));
      doc.moveDown(0.2);
    });

    sectionTitle(doc, t.resume.projects);
    entries
      .filter((entry) => entry.featured)
      .forEach((entry) => {
        ensureSpace(doc, 60);
        doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#111111").text(localized(entry.title, lang));
        doc.font("Helvetica").fontSize(9.5).fillColor("#333333").text(localized(entry.scope, lang));
        doc.fontSize(9.5).fillColor("#333333").text(entry.techStack.slice(0, 8).join(", "));
        doc.moveDown(0.3);
      });

    doc.end();
  });
}
