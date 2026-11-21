const files = import.meta.glob("../../portfolio/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseEntry(path, raw) {
  const text = raw.replace(/\r\n/g, "\n");
  const start = text.indexOf("---\n");
  if (start !== 0) throw new Error(`Missing frontmatter: ${path}`);
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) throw new Error(`Invalid frontmatter: ${path}`);

  const frontmatter = text.slice(4, end);
  const body = text.slice(end + 5);
  const meta = {};

  for (const line of frontmatter.split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }

  const section = (name) => {
    const heading = `## ${name}`;
    const start = body.indexOf(heading);
    if (start === -1) return "";
    const from = start + heading.length;
    const next = body.indexOf("\n## ", from);
    return body.slice(from, next === -1 ? body.length : next).trim();
  };

  const bullets = (name) =>
    section(name)
      .split("\n")
      .filter((line) => line.startsWith("* "))
      .map((line) => line.slice(2).trim());

  let techStack = [];
  try {
    const parsed = JSON.parse(meta.tech_stack ?? "[]");
    techStack = Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    techStack = [];
  }

  let platform = [];
  try {
    const parsed = JSON.parse(meta.platform ?? "[]");
    platform = Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    platform = [];
  }

  const order = Number.parseInt(meta.displayOrder ?? "", 10);

  return {
    slug: path.split("/").pop().replace(/\.md$/, ""),
    title: { en: meta.title ?? "", id: meta.title_id ?? "" },
    scope: { en: meta.scope ?? "", id: meta.scope_id ?? "" },
    experience: meta.experience ?? "",
    techStack,
    platform,
    featured: meta.featured === "true",
    displayOrder: Number.isFinite(order) ? order : Number.MAX_SAFE_INTEGER,
    overview: {
      en: section("Overview"),
      id: section("Ringkasan"),
    },
    problem: {
      en: section("Problem"),
      id: section("Masalah"),
    },
    bullets: {
      en: bullets("My Contributions"),
      id: bullets("Kontribusi Saya"),
    },
    highlight: {
      en: section("Technical Highlights"),
      id: section("Sorotan Teknis"),
    },
  };
}

export const entries = Object.entries(files)
  .map(([path, raw]) => parseEntry(path, raw))
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.featured && a.displayOrder !== b.displayOrder) {
      return a.displayOrder - b.displayOrder;
    }
    return a.title.en.localeCompare(b.title.en, "en");
  });
