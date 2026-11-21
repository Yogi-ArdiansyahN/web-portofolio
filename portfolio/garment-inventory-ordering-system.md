---
title: "Garment Inventory & Ordering System (SIPG)"
title_id: "Sistem Inventaris & Pemesanan Garmen (SIPG)"
role: "Fullstack Web Dev"
scope: "Master tables and payments in server-side DataTables"
scope_id: "Tabel master dan pembayaran pada DataTables server-side"
experience: "PT. Mobilus Interactive"
platform: ["Web App"]
featured: true
displayOrder: 4
tech_stack: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Git"]
---

## Overview
Unifies raw material stock, finished goods, ordering, shipping, returns, and payments in one internal system for garment operations. The system also provides an API for sales and partner integrations.

## Problem
Client-side tables and repeated queries made large master and payment lists slow and hard to keep in sync with partner APIs.

## My Contributions
* Converted the master and payment tables from client-side processing to server-side DataTables with newest-first sorting and server-side search.
* Removed N+1 queries in the partner API by fetching transactions once and grouping them by type and reference.
* Handled reverts and reapplication of API fixes during adjustment.

## Technical Highlights
Server-side DataTables replaced client-side processing for the master and payment tables. The N+1 fix fetches transactions in one pass, then groups them by type and reference.

## Ringkasan
Menyatukan stok bahan baku, barang jadi, pemesanan, pengiriman, pengembalian, dan pembayaran dalam satu sistem internal untuk operasi garmen. Sistem ini juga menyediakan API untuk penjualan dan integrasi mitra.

## Masalah
Tabel sisi klien dan kueri berulang membuat daftar master dan pembayaran besar menjadi lambat dan sulit disinkronkan dengan API mitra.

## Kontribusi Saya
* Mengonversi tabel master dan pembayaran dari pemrosesan sisi klien ke DataTables server-side dengan urutan terbaru lebih dulu dan pencarian di server.
* Menghilangkan kueri N+1 pada API mitra dengan mengambil transaksi sekali lalu mengelompokkannya berdasarkan jenis dan referensi.
* Menangani pembatalan dan penerapan ulang perbaikan API saat penyesuaian.

## Sorotan Teknis
DataTables server-side menggantikan pemrosesan sisi klien pada tabel master dan pembayaran. Perbaikan N+1 mengambil transaksi dalam satu proses, lalu mengelompokkannya berdasarkan jenis dan referensi.
