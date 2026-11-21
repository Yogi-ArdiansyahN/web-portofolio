---
title: "PPOB & Automatic Game Top-Up Platform (PPTG)"
title_id: "Platform PPOB & Top-Up Game Otomatis (PPTG)"
role: "Fullstack Web Dev"
scope: "Transaction flow, webhooks, and automated processing"
scope_id: "Alur transaksi, webhook, dan pemrosesan otomatis"
experience: "Freelance (ghstore)"
platform: ["Web App"]
featured: true
displayOrder: 1
tech_stack: ["PHP", "CodeIgniter 4", "Laravel", "Svelte", "Inertia.js", "TypeScript", "MySQL", "REST API", "GitHub Actions", "Git"]
---

## Overview
E-commerce platform for game top-ups and PPOB payments. Customers validate a game ID, pay with balance, voucher, or a gateway, and the order is processed automatically by the digital provider. Admins manage the catalog, orders, users, and finances.

## Problem
Order processing depends on payment callbacks and balance updates, so repeated callbacks and concurrent balance changes can leave orders and wallets out of sync.

## My Contributions
* Built the flow from account verification and product catalog to ID validation, vouchers, payment, webhooks, automated processing, and notifications.
* Implemented a balance wallet, transaction log, static QRIS, balance deduction at checkout, and automatic refunds for failed orders.
* Handled quality and security through automated testing, OWASP remediation, bot protection, internationalization, and a lint, test, and deploy pipeline.

## Technical Highlights
Rebuilt the system from CodeIgniter 4 to Laravel with a Svelte frontend and Inertia SSR. Work focused on payment callback idempotency, balance race conditions, and the order audit trail.

## Ringkasan
Platform e-commerce untuk top-up game dan pembayaran PPOB. Pelanggan memvalidasi ID game, membayar dengan saldo, voucher, atau gateway, lalu pesanan diproses otomatis oleh penyedia digital. Admin mengelola katalog, pesanan, pengguna, dan keuangan.

## Masalah
Pemrosesan pesanan bergantung pada callback pembayaran dan pembaruan saldo, sehingga callback berulang dan perubahan saldo bersamaan dapat membuat pesanan dan dompet tidak sinkron.

## Kontribusi Saya
* Membangun alur dari verifikasi akun dan katalog produk hingga validasi ID, voucher, pembayaran, webhook, pemrosesan otomatis, dan notifikasi.
* Menerapkan dompet saldo, log transaksi, QRIS statis, pemotongan saldo saat checkout, dan pengembalian dana otomatis saat pesanan gagal.
* Menangani kualitas dan keamanan melalui pengujian otomatis, remediasi OWASP, perlindungan bot, internasionalisasi, serta pipeline lint, test, dan deploy.

## Sorotan Teknis
Membangun ulang sistem dari CodeIgniter 4 ke Laravel dengan frontend Svelte dan Inertia SSR. Fokus pada idempotensi callback pembayaran, kondisi balapan saldo, dan jejak audit pesanan.
