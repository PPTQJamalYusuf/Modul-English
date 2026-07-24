---
description: Mencari dan menyusun materi bahasa Inggris untuk satu unit secara lengkap, mulai dari pengertian, jenis-jenis, kegunaan, aturan, perbedaan dengan materi mirip, contoh kalimat, kesalahan umum, sampai contoh soal kuis di bagian paling akhir, lalu mengisikannya ke halaman unit sesuai format di AGENTS.md.
---

# Workflow: Susun Materi Unit (Pengertian → Contoh)

Gunakan workflow ini setiap kali membuat materi untuk satu unit baru.
Topik akan diberikan oleh user saat memanggil workflow ini
(contoh: "Simple Present Tense", "Daily Vocabulary", "Asking Permission").

## Langkah yang harus dikerjakan agent:

1. **Pengertian**
   Jelaskan definisi/konsep dasar topik secara singkat dan mudah dipahami
   santri SMP/SMA. Gunakan Bahasa Indonesia untuk penjelasan, istilah teknis
   dalam Bahasa Inggris tetap dipertahankan (misal: "Simple Present Tense
   adalah bentuk kalimat yang digunakan untuk...").

2. **Jenis-Jenis (jika topik punya beberapa jenis/bentuk)**
   Sebutkan dan jelaskan tiap jenis/varian dari topik ini secara singkat.
   Contoh: kalau topiknya "Degrees of Comparison" → jenisnya Positive,
   Comparative, Superlative. Kalau topik tidak punya sub-jenis (misal
   vocabulary tema tunggal), lewati bagian ini.

3. **Digunakan Untuk Apa (Fungsi/Kegunaan)**
   Jelaskan dalam situasi apa saja topik ini dipakai dalam percakapan atau
   tulisan sehari-hari. Kaitkan dengan konteks santri (aktivitas pondok,
   sekolah, ibadah) supaya relevan dan mudah dibayangkan.

4. **Aturan/Struktur**
   Jelaskan rumus/pola kalimat (positive, negative, interrogative) kalau
   topiknya grammar. Kalau topiknya vocabulary/percakapan: kelompokkan kata
   atau frasa berdasarkan tema/situasi.

5. **Perbedaan dengan Materi/Bentuk yang Mirip**
   Jelaskan perbandingan dengan topik lain yang sering tertukar (misal:
   Simple Present vs Present Continuous, atau few vs a few). Buat dalam
   bentuk poin atau tabel singkat supaya perbedaannya jelas terlihat. Kalau
   topik ini tidak punya pasangan yang sering tertukar, lewati bagian ini.

6. **Contoh Kalimat**
   Berikan minimal 5 contoh kalimat/penggunaan nyata yang relevan dengan
   konteks santri (kegiatan pondok, sekolah, ibadah, sehari-hari) — bukan
   contoh generik yang tidak relevan. Sertakan terjemahan Bahasa Indonesia
   di sebelah tiap contoh.

7. **Kesalahan Umum**
   Sebutkan 2-3 kesalahan yang paling sering dibuat pemula terkait topik
   ini — termasuk kesalahan yang muncul akibat perbedaan di poin 5 (kalau
   ada) — supaya santri lebih waspada dan tahu letak jebakannya.

8. **Contoh Soal (Kuis)**
   Bagian PALING TERAKHIR. Buat 5-10 soal kuis (`quiz-data.js`) pilihan
   ganda yang langsung menguji pemahaman dari pengertian, jenis, fungsi,
   aturan, perbedaan, dan kesalahan umum yang baru disusun di atas — bukan
   soal acak di luar materi yang diajarkan. Sebisa mungkin sertakan minimal
   1 soal yang menguji poin "perbedaan" (poin 5) kalau bagian itu ada.

## Format Output
Isi materi ini dimasukkan ke `units/<nama-unit>/index.html` mengikuti
struktur yang sudah ditetapkan di `AGENTS.md`, dengan urutan materi:
judul unit → tujuan pembelajaran → pengertian → jenis-jenis → digunakan
untuk apa → aturan/struktur → perbedaan dengan materi mirip → contoh
kalimat → kesalahan umum → audio (placeholder jika belum ada file audio) →
kuis interaktif (contoh soal).

## Aturan Tambahan
- Jangan mengarang istilah gramatikal yang tidak akurat — pastikan
  penjelasan sesuai kaidah bahasa Inggris yang benar.
- Jika topik yang diminta ambigu atau terlalu luas (misal hanya "Tenses"
  tanpa spesifik), pecah dulu jadi sub-topik dan tanyakan ke user sebelum
  lanjut membuat satu unit penuh.
- Gaya bahasa tetap sopan dan sesuai lingkungan pesantren putri.
