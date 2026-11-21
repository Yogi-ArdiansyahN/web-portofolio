---
title: "Manufacturing ERP System (SEM)"
title_id: "Sistem ERP Manufaktur (SEM)"
role: "Fullstack Web Dev"
scope: "Angular ERP modules, master data, search, and HTTP response handling"
scope_id: "Modul ERP Angular, data master, search, dan HTTP response handling"
experience: "PT. Mobilus Interactive"
platform: ["Web App"]
tech_stack: ["TypeScript", "Angular", "RxJS", "Playwright", "Git"]
---

## Overview
Supports manufacturing operations through procurement, inventory, bill of materials, production, and vendor portal modules. The system includes automated tests to keep critical flows stable when the frontend changes.

## Problem
Frontend changes could break critical flows, so the E2E suite had to follow the module structure.

## My Contributions
* Built ERP modules in the Angular frontend for currency and exchange rate master data, data search, and HTTP response handling.
* Designed Playwright E2E flows with fixtures and mock data for authentication, the supplier portal, Bill of Materials, and quality control reports.
* Kept E2E tests in sync with frontend structure changes so critical flows could still be re-run.

## Technical Highlights
Fixtures are separated from specs so each module owns its Playwright E2E flows. Business flows were mapped manually before writing the tests.

## Ringkasan
Mendukung operasi manufaktur melalui modul pengadaan, inventaris, bill of materials, produksi, dan portal vendor. Sistem mencakup pengujian otomatis untuk menjaga alur penting tetap stabil saat frontend berubah.

## Masalah
Perubahan frontend dapat merusak alur penting, sehingga rangkaian E2E harus mengikuti struktur modul.

## Kontribusi Saya
* Membangun modul ERP di frontend Angular untuk data master mata uang dan kurs, pencarian data, serta penanganan respons HTTP.
* Merancang alur E2E Playwright dengan fixture dan data tiruan untuk autentikasi, portal pemasok, Bill of Materials, dan laporan kendali mutu.
* Menjaga E2E tetap sinkron dengan perubahan struktur frontend agar alur penting dapat dijalankan ulang.

## Sorotan Teknis
Fixture dipisahkan dari spesifikasi sehingga setiap modul memiliki alur E2E Playwright sendiri. Alur bisnis dipetakan secara manual sebelum pengujian ditulis.
