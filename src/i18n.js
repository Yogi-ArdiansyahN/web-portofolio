export const copy = {
  id: {
    ogLocale: "id_ID",
    nav: {
      mainLabel: "Navigasi utama",
      home: "Beranda",
      project: "Proyek",
    },
    language: {
      switchTo: "Ganti ke bahasa Inggris",
    },
    theme: {
      switchToDark: "Ganti ke dark mode",
      switchToLight: "Ganti ke light mode",
    },
    home: {
      documentTitle: "Yogi Ardiansyah Nugraha | Portofolio",
      description:
        "Portofolio Yogi Ardiansyah Nugraha: pengalaman, pendidikan, teknologi, dan kontribusi project dalam bahasa Indonesia.",
      intro:
        "Developer web dengan latar belakang RPL dan Teknik Informatika. Saya mengerjakan API, interfaces, dan integrations untuk sistem operasional, transaksi, dan layanan kesehatan. Stack berbeda tiap project, termasuk Laravel, PHP, React, dan TypeScript.",
      contactLabel: "Informasi kontak",
      experienceHeading: "Perjalanan",
      current: "Saat ini",
      freelanceStatus: "Available for freelance",
      stackHeading: "Teknologi Project",
      stackCopy: "Teknologi yang dipakai pada projects di bawah ini.",
    },
    project: {
      documentTitle: "Kontribusi Project | Yogi Ardiansyah Nugraha",
      description:
        "Kontribusi, alur kerja, dan detail teknis project pada portofolio Yogi Ardiansyah Nugraha.",
      heading: "Kontribusi Project",
      noteHighlight: "Judul project di sini sengaja digeneralisasi",
      noteRest:
        "karena beberapa sistem bersifat internal atau terkait klien. Saya memfokuskan penjelasan pada fungsi sistem, alur yang saya kerjakan, dan teknologi yang dipakai, tanpa menampilkan nama produk atau identitas klien.",
      contributionLabel: "Kontribusi:",
      detailsLabel: "Detail teknis",
      close: "Tutup",
    },
  },
  en: {
    ogLocale: "en_US",
    nav: {
      mainLabel: "Main navigation",
      home: "Home",
      project: "Project",
    },
    language: {
      switchTo: "Switch to Indonesian",
    },
    theme: {
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
    },
    home: {
      documentTitle: "Yogi Ardiansyah Nugraha | Portfolio",
      description:
        "Yogi Ardiansyah Nugraha's portfolio: experience, education, tech stack, and project contributions in English.",
      intro:
        "Software developer with a background in software engineering and informatics engineering. I work on APIs, interfaces, and integrations for operational, transaction, and healthcare systems. The stack changes per project, including Laravel, PHP, React, and TypeScript.",
      contactLabel: "Contact information",
      experienceHeading: "Journey",
      current: "Current",
      freelanceStatus: "Available for freelance",
      stackHeading: "Tech Stack",
      stackCopy: "Technologies used in the projects below.",
    },
    project: {
      documentTitle: "Project Contributions | Yogi Ardiansyah Nugraha",
      description:
        "Project contributions, workflows, and technical details from Yogi Ardiansyah Nugraha's portfolio.",
      heading: "Project Contributions",
      noteHighlight: "Project titles here are intentionally generalized",
      noteRest:
        "because some systems are internal or client-specific. I focus on describing the system function, the workflows I worked on, and the technologies used, without exposing product names or client identities.",
      contributionLabel: "Contribution:",
      detailsLabel: "Technical details",
      close: "Close",
    },
  },
};

export function localized(value, language) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] ?? value.en ?? "";
  }
  return value ?? "";
}
