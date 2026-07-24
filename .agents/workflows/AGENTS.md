---
description: 
---

# AGENTS.md — Modul Pembelajaran Bahasa Inggris (PPTQ Jamal Yusuf Al-Haddad)

## Konteks Proyek
Ini adalah modul pembelajaran bahasa Inggris berbasis web statis untuk santri
di PPTQ Jamal Yusuf Al-Haddad (pondok pesantren tahfidz putri, jenjang
SMP/SMA). Modul akan diakses secara **offline/LAN** di lingkungan pondok,
tanpa koneksi internet dan tanpa server backend.

## Tujuan
Menyediakan halaman materi per unit (bab) yang berisi:
- Teks penjelasan materi
- Gambar pendukung (ilustrasi kosakata, grammar chart, dll)
- Kuis interaktif di akhir tiap unit sebagai latihan mandiri santri
- ## Langkah yang harus dikerjakan agent:

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


Tidak perlu login atau tracking progress lintas-sesi — skor kuis cukup
ditampilkan langsung di halaman (client-side), tanpa disimpan ke server.

## Stack
- **HTML5 + CSS3 murni**
- **Vanilla JavaScript** — dipakai untuk logika kuis (cek jawaban, hitung
  skor, tampilkan hasil) dan interaksi ringan lain (expand/collapse
  penjelasan, highlight kosakata). Jangan pakai framework (React, Vue, dll)
  — di luar kebutuhan proyek ini.
- Tidak ada backend, tidak ada database, tidak ada build tool/bundler.
  File harus bisa langsung dibuka di browser atau di-hosting sebagai static
  files di server LAN yang sudah ada.

## Struktur Folder
```
english-module/
├── index.html              # Halaman daftar isi / navigasi ke semua unit
├── assets/
│   ├── css/
│   │   └── style.css       # Style global, konsisten di semua unit
│   ├── js/
│   │   └── quiz.js         # Logika kuis generik, dipakai semua unit
│   ├── images/
│   │   └── unit-1/         # Gambar per unit, dikelompokkan per folder
│   └── audio/
│       └── unit-1/         # Audio per unit, dikelompokkan per folder
└── units/
    ├── unit-1/
    │   ├── index.html
    │   └── quiz-data.js     # Data soal kuis unit ini (array of questions)
    ├── unit-2/
    │   ├── index.html
    │   └── quiz-data.js
    └── ...
```

## Aturan Konten & Gaya
- Bahasa pengantar materi: **Bahasa Indonesia**, dengan istilah/contoh dalam
  **Bahasa Inggris** sesuai materi yang diajarkan.
- Desain sederhana, ringan, dan mudah dibaca di device dengan resolusi
  bervariasi (laptop lab komputer maupun tablet).
- Tone materi sopan dan sesuai untuk lingkungan pesantren putri (hindari
  ilustrasi/foto orang tanpa keperluan jelas; utamakan ilustrasi/ikon/teks).
- Setiap unit punya struktur konsisten: judul unit → tujuan pembelajaran →
  materi (teks + gambar) → audio pelafalan/listening → kuis interaktif →
  (opsional) rangkuman.
- Navigasi antar-unit harus jelas: tombol "Unit Sebelumnya" / "Unit
  Berikutnya" dan link kembali ke `index.html` (daftar isi).

### Kuis Interaktif
- Format soal: pilihan ganda (multiple choice), 4 opsi jawaban, 5–10 soal
  per unit sesuai materi unit tersebut.
- Data soal disimpan terpisah dari HTML, di file `quiz-data.js` per unit,
  format array of object, contoh:
  ```js
  const quizData = [
    {
      question: "Choose the correct sentence:",
      options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."],
      answer: 1 // index jawaban benar
    },
  ];
  ```
- Logika kuis generik (render soal, cek jawaban, hitung skor, tampilkan
  hasil akhir) ditulis sekali di `assets/js/quiz.js` dan dipakai ulang oleh
  semua unit — jangan duplikasi logika di tiap halaman unit.
- Setelah santri submit kuis: tampilkan skor akhir (misal "8/10 benar") dan
  tandai tiap soal yang salah/benar secara visual, tanpa reload halaman.
- Beri tombol "Ulangi Kuis" untuk reset dan coba lagi.
- Tidak perlu menyimpan hasil kuis kemana pun (localStorage/server) —
  cukup ditampilkan sekali per sesi pengerjaan.

## Instruksi untuk Agent
1. Bangun dulu `index.html` (daftar isi), `assets/css/style.css`, dan
   `assets/js/quiz.js` (logika kuis generik) sebagai fondasi/template.
2. Buat satu unit contoh lengkap (`units/unit-1/index.html` +
   `units/unit-1/quiz-data.js`) dengan struktur di atas, termasuk
   placeholder untuk gambar, audio, dan soal kuis.
3. Setelah template unit (termasuk kuisnya) disetujui, duplikasi pola yang
   sama untuk unit-unit berikutnya sesuai daftar materi yang diberikan —
   cukup ganti isi `quiz-data.js` dan konten materi, jangan tulis ulang
   logika `quiz.js`.
4. Jangan menambahkan dependency eksternal (CDN, library JS) kecuali diminta
   secara eksplisit.
5. Pastikan semua path (gambar, audio, link antar-halaman, script) relatif,
   bukan absolut, supaya folder bisa dipindah-pindah tanpa rusak linknya.

## Catatan
- File ini berfungsi sebagai konteks/instruksi persisten untuk agent tool
  (Antigravity, Claude Code, dsb). Update bagian "Daftar Materi/Unit" di
  bawah setiap kali ada penambahan topik baru.

## Daftar Materi / Unit (isi sesuai kebutuhan)

### Kelas VII (Fase D)
- Unit 1: Chapter 1 — About Me (Self-Introduction, Pronouns, To Be, Hobbies & Tools, Adverbs of Frequency, Physical & Personality Traits, Descriptive Text)
- Unit 2: Chapter 2 — Culinary and Me (Food & Drink Vocabulary, Tastes & Textures, Preferences, Countable/Uncountable Nouns, Quantifiers, Procedural Text & Imperative Verbs, Sequence Connectors)
- Unit 3: Chapter 3 — Home Sweet Home (Rooms & Dorm Spaces, Furniture, There is/are, Prepositions of Place, House Chores, Simple Present Tense for Routines, Imperative Sentences, DIY Recycling Project)
- Unit 4: Chapter 4 — My School Activities (Class Subjects, Days & Time, Telling Time, Prepositions of Time, Online Class Rules, Simple Present for Habits, Study Planner Project)
- Unit 5: Chapter 5 — This Is My School (School Buildings & Facilities, Asking & Giving Directions, Directional Prepositions, Extracurricular Activities, School Description Text)

### Kelas VIII (Fase D)
- Unit 1: Chapter 1 — Celebrating School Events (Past Events Vocabulary, Simple Past Tense Regular & Irregular Verbs, Time Connectors, Recount Text Structure, Personal Story Writing)
- Unit 2: Chapter 2 — Kindness and Friendship (Fables & Character Traits, Past Continuous Tense, When vs While, Adverbs of Manner, Narrative Text Structure, Moral Values)
- Unit 3: Chapter 3 — Love Our Environment (Environmental Issues, Should/Shouldn't, Notices & Warnings, Imperatives, Eco-Friendly Reading, Slogans & Poster Project)
- Unit 4: Chapter 4 — No Littering (Floods & Plastic Pollution Incidents, Cause & Effect Connectors: because, so, as a result, due to, Factual Recount Reports, Campaign Posters)
- Unit 5: Chapter 5 — Embrace Yourself (Emotions & Feelings, Past Feelings: was/were/felt, Praise & Encouragement Expressions, Sympathy, Personal Reflection Writing)

### Kelas IX (Fase D)
- Unit 1: Chapter 1 — Exploring Fauna of Indonesia (Indonesian Wildlife, Report Text Structure, Passive Voice: is/are + V3, Species Conservation)
- Unit 2: Chapter 2 — Taking Trips (Travel Recounts, Transportation, Itinerary Planning, Simple Past Tense, Travelogue Writing)
- Unit 3: Chapter 3 — Journeys to the Fantasy Worlds (Folklore & Legends, Direct & Indirect/Reported Speech, Narrative Structure, Moral Values)
- Unit 4: Chapter 4 — Upcycling Used Materials (Upcycling vs Recycling, Passive Voice in Procedure Text, Craft Project Guide, Environmental Action)
- Unit 5: Chapter 5 — Digital Life (Digital Literacy, Online Safety, Expressing Opinions, Agreement & Disagreement, Analytical Discussion Text)
