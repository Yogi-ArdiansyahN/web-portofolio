export const profile = {
  name: "Yogi Ardiansyah Nugraha",
  role: "Software Developer",
  email: "yogiardiansyahn@gmail.com",
  github: "https://github.com/Yogi-ArdiansyahN",
  githubLabel: "github.com/Yogi-ArdiansyahN",
  portfolio: "https://yogian.my.id",
  portfolioLabel: "yogian.my.id",
  instagram: "https://instagram.com/yogiardnsyhn",
  instagramLabel: "@yogiardnsyhn",
};

export const timeline = [
  {
    kind: "work",
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
    kind: "work",
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
    kind: "education",
    role: "Universitas Suryakancana Cianjur",
    place: { id: "Teknik Informatika", en: "Informatics Engineering" },
    period: "2019 - 2025",
    description: {
      id: "Menempuh pendidikan Teknik Informatika dengan fokus pada software development.",
      en: "Studied informatics engineering with a focus on software development.",
    },
  },
  {
    kind: "work",
    role: "Fullstack Software Developer",
    place: "PT. Atlantic Aksa Group",
    period: "Nov 2023 - Apr 2025",
    description: {
      id: "Mengembangkan POS systems dan transaction portal untuk operasional multi-cabang.",
      en: "Developed POS systems and transaction portals for multi-branch operations.",
    },
  },
  {
    kind: "education",
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

export const stackGroups = [
  {
    key: "primaryStack",
    items: [
      "PHP",
      "Laravel",
      "CodeIgniter 4",
      "React",
      "Svelte",
      "TypeScript",
      "JavaScript",
      "MySQL",
    ],
  },
  {
    key: "additionalStack",
    items: [
      "Ruby on Rails",
      "Ruby",
      "Angular",
      "React Native",
      "Inertia.js",
      "TanStack Query",
      "RxJS",
      "Expo",
      "Web Push",
      "REST API",
      "Python",
      "Tailwind CSS",
      "Alpine.js",
      "jQuery",
      "CodeIgniter",
      "Bootstrap",
    ],
  },
  {
    key: "toolsStack",
    items: ["Git", "GitHub Actions", "Docker", "Playwright"],
  },
];
