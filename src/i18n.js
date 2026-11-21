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
    a11y: {
      skip: "Lewati ke konten",
    },
    home: {
      documentTitle: "Yogi Ardiansyah Nugraha | Portofolio",
      description:
        "Portofolio Yogi Ardiansyah Nugraha: pengalaman, pendidikan, teknologi, dan kontribusi project dalam bahasa Indonesia.",
      role: "Software Developer",
      intro:
        "Developer web dengan latar belakang RPL dan Teknik Informatika. Saya mengerjakan API, interfaces, dan integrations untuk sistem operasional, transaksi, dan layanan kesehatan. Stack berbeda tiap project, termasuk Laravel, PHP, React, dan TypeScript.",
      viewWork: "Lihat Proyek",
      contactCta: "Hubungi Saya",
      contactLabel: "Informasi kontak",
      experienceHeading: "Pengalaman Profesional",
      educationHeading: "Pendidikan",
      current: "Saat ini",
      freelanceStatus: "Available for freelance",
      stackHeading: "Teknologi Project",
      stackCopy:
        "Teknologi dikelompokkan berdasarkan seberapa sering muncul pada projects di bawah ini, bukan tingkat keahlian.",
      primaryStack: "Stack Utama",
      additionalStack: "Teknologi Tambahan",
      toolsStack: "Tools & Workflow",
    },
    project: {
      documentTitle: "Kontribusi Project | Yogi Ardiansyah Nugraha",
      description:
        "Kontribusi, alur kerja, dan detail teknis project pada portofolio Yogi Ardiansyah Nugraha.",
      heading: "Kontribusi Project",
      noteHighlight: "Judul project di sini sengaja digeneralisasi",
      noteRest:
        "karena beberapa sistem bersifat internal atau terkait klien. Saya memfokuskan penjelasan pada fungsi sistem, alur yang saya kerjakan, dan teknologi yang dipakai, tanpa menampilkan nama produk atau identitas klien.",
      workflowNote:
        "AI-assisted tools dipakai untuk scaffolding, pengujian, dan iterasi tata letak. Logika akses, pemodelan data, perubahan kueri, dan alur bisnis saya tinjau langsung.",
      featuredHeading: "Proyek Unggulan",
      otherHeading: "Proyek Lainnya",
      featuredLabel: "Unggulan",
      contributionLabel: "Kontribusi:",
      detailsLabel: "Detail teknis",
      close: "Tutup",
      overviewLabel: "Ringkasan",
      problemLabel: "Masalah",
      contributionSectionLabel: "Kontribusi Saya",
      highlightsLabel: "Sorotan Teknis",
      techStackLabel: "Teknologi",
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
    a11y: {
      skip: "Skip to content",
    },
    home: {
      documentTitle: "Yogi Ardiansyah Nugraha | Portfolio",
      description:
        "Yogi Ardiansyah Nugraha's portfolio: experience, education, tech stack, and project contributions in English.",
      role: "Software Developer",
      intro:
        "Software developer with a background in software engineering and informatics engineering. I work on APIs, interfaces, and integrations for operational, transaction, and healthcare systems. The stack changes per project, including Laravel, PHP, React, and TypeScript.",
      viewWork: "View My Work",
      contactCta: "Contact Me",
      contactLabel: "Contact information",
      experienceHeading: "Professional Experience",
      educationHeading: "Education",
      current: "Current",
      freelanceStatus: "Available for freelance",
      stackHeading: "Tech Stack",
      stackCopy:
        "Technologies are grouped by how often they appear in the projects below, not by proficiency level.",
      primaryStack: "Primary Stack",
      additionalStack: "Additional Technologies",
      toolsStack: "Tools & Workflow",
    },
    project: {
      documentTitle: "Project Contributions | Yogi Ardiansyah Nugraha",
      description:
        "Project contributions, workflows, and technical details from Yogi Ardiansyah Nugraha's portfolio.",
      heading: "Project Contributions",
      noteHighlight: "Project titles here are intentionally generalized",
      noteRest:
        "because some systems are internal or client-specific. I focus on describing the system function, the workflows I worked on, and the technologies used, without exposing product names or client identities.",
      workflowNote:
        "AI-assisted tools were used for scaffolding, tests, and layout iterations. I reviewed access logic, data modeling, query changes, and business flows directly.",
      featuredHeading: "Featured Projects",
      otherHeading: "Other Projects",
      featuredLabel: "Featured",
      contributionLabel: "Contribution:",
      detailsLabel: "Technical details",
      close: "Close",
      overviewLabel: "Overview",
      problemLabel: "Problem",
      contributionSectionLabel: "My Contributions",
      highlightsLabel: "Technical Highlights",
      techStackLabel: "Tech Stack",
    },
  },
};

export function localized(value, language) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] ?? value.en ?? "";
  }
  return value ?? "";
}
