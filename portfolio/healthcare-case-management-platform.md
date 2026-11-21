---
title: "Healthcare Case Management Platform (PMKK)"
title_id: "Platform Manajemen Kasus Kesehatan (PMKK)"
role: "Fullstack Web Dev"
scope: "Medical record, signature, and frontend-API synchronization flows"
scope_id: "Alur rekam medis, tanda tangan, dan sinkronisasi frontend-API"
experience: "PT. Mobilus Interactive"
tech_stack: ["Ruby", "Rails", "React", "TypeScript", "TanStack Query", "Git"]
---

## Business Context
Helps clinicians manage treatment cases, medical records, and patient communication in a single workflow. Focused on record status changes, notifications, and data synchronization between the web frontend and the API.

## Role & System Flow
* Implemented the medical record flow from analysis results to draft, then a transition to final via a signature endpoint with optimistic cache updates in the frontend.
* Designed the care conversation flow with presence indicators, message receipts, and close and reopen controls.
* Maintained frontend and API synchronization when record status and conversation flows changed.
* I used AI-assisted coding for the tests and serializers, then checked the signature endpoint manually.

## Technical Notes
Frontend and API states stay aligned when record status or conversation flow changes through optimistic cache updates. I reviewed status and signature validation while maintaining tests and serializers.

## Konteks Bisnis
Membantu tenaga klinis mengelola kasus perawatan, rekam medis, dan komunikasi pasien dalam satu alur kerja. Berfokus pada perubahan status rekam, notifikasi, dan sinkronisasi data antara frontend web dan API.

## Peran & Alur Sistem
* Menerapkan alur rekam medis dari hasil analisis menjadi draft, lalu transisi menjadi final melalui signature endpoint dengan optimistic cache updates di frontend.
* Merancang alur percakapan perawatan dengan presence indicators, message receipts, serta kontrol close dan reopen.
* Menjaga sinkronisasi frontend dan API saat status rekam dan alur percakapan berubah.
* Saya menggunakan AI-assisted coding untuk tests dan serializers, lalu memeriksa signature endpoint secara manual.

## Highlight Teknis
Frontend dan API state tetap selaras saat status rekam atau alur percakapan berubah melalui optimistic cache updates. Saya meninjau status and signature validation sambil menjaga tests dan serializers.
