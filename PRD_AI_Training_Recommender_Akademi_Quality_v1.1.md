# Product Requirements Document (PRD)
# Fitur Rekomendasi Training Akademi Quality

**Versi:** 1.1  
**Status:** MVP — Ready for Design & Development  
**Pemilik Produk:** Akademi Quality  
**Platform:** Website Akademi Quality  
**Provider AI:** DeepInfra  
**Model Utama:** `Qwen/Qwen3.5-9B`  
**Halaman Utama Fitur:** `/rekomendasi-training`  
**Tanggal Dokumen:** 30 Juli 2026  

---

## 1. Ringkasan Produk

Fitur Rekomendasi Training adalah halaman khusus di website Akademi Quality yang membantu calon peserta, perusahaan, rumah sakit, dan fasilitas pelayanan kesehatan menemukan program training yang paling sesuai dengan kebutuhan mereka.

Pengguna menjawab form singkat mengenai:

- Bidang kebutuhan.
- Area pekerjaan atau unit.
- Masalah yang sedang dihadapi.
- Kemampuan yang ingin ditingkatkan.
- Tingkat pengalaman peserta.
- Profil peserta.
- Urgensi kebutuhan.

Sistem kemudian menampilkan:

1. Rekomendasi training utama.
2. Training pendukung.
3. Training lanjutan atau learning path.
4. Alasan setiap training direkomendasikan.
5. Tombol menuju halaman detail training.
6. Tombol konsultasi melalui WhatsApp.

Mesin rekomendasi utama menggunakan:

```text
Form bercabang
→ hard filter kategori
→ weighted scoring
→ ranking training
→ template penjelasan
→ optional AI rewriting
→ hasil rekomendasi
→ lead conversion
```

AI tidak menjadi sumber utama keputusan. AI hanya membantu membuat ringkasan dan penjelasan hasil lebih natural.

---

## 2. Latar Belakang

Akademi Quality memiliki dua kelompok layanan training utama:

- QHSE.
- Rumah sakit dan pelayanan kesehatan.

Berdasarkan data katalog internal saat dokumen ini dibuat:

| Kategori | Jumlah Training Aktif |
|---|---:|
| QHSE | 65 |
| Rumah sakit | 50 |
| **Total** | **115** |

Katalog tersebut mencakup area seperti:

- ISO dan sistem manajemen.
- K3 dan keselamatan kerja.
- Lingkungan dan pengelolaan limbah.
- Laboratorium dan kalibrasi.
- Food safety.
- Warehouse dan supply chain.
- Manajemen rumah sakit.
- Mutu dan keselamatan pasien.
- Akreditasi.
- Pencegahan dan pengendalian infeksi.
- Keperawatan.
- Keuangan dan klaim.
- Audit dan pengawasan internal.

Jumlah program yang luas dapat membuat calon pelanggan kesulitan menentukan training yang paling sesuai.

Masalah yang sering muncul:

- Pengguna hanya memilih berdasarkan judul training.
- Pengguna tidak mengetahui perbedaan training fundamental, implementasi, dan auditor.
- Pengguna harus membuka banyak halaman sebelum menemukan program yang relevan.
- Tim sales menerima pertanyaan yang terlalu umum.
- Kebutuhan calon pelanggan belum terstruktur saat konsultasi dimulai.
- Training pendukung dan learning path tidak terlihat jelas.
- Pengguna berpotensi keluar dari website karena terlalu banyak pilihan.

---

## 3. Problem Statement

Pengguna membutuhkan cara sederhana untuk menjawab:

> “Training apa yang paling sesuai dengan masalah, pekerjaan, dan target kompetensi saya?”

Saat ini pengguna harus membaca banyak halaman training atau berkonsultasi secara manual sebelum menemukan program yang tepat.

Akademi Quality juga membutuhkan cara untuk:

- Mengidentifikasi kebutuhan pengguna lebih awal.
- Menghasilkan lead yang lebih terstruktur.
- Mengarahkan pengguna ke training yang relevan.
- Meningkatkan peluang konsultasi dan pembelian.
- Mengumpulkan insight mengenai kebutuhan pasar.

---

## 4. Tujuan Produk

### 4.1 Tujuan Pengguna

Pengguna dapat:

- Menemukan training yang relevan dalam waktu kurang dari tiga menit.
- Memahami alasan suatu training direkomendasikan.
- Mengetahui training utama dan training pendukung.
- Menemukan learning path yang sesuai.
- Membuka detail training tanpa harus mencari manual.
- Melanjutkan ke konsultasi jika kebutuhannya lebih kompleks.
- Mendapatkan hasil tanpa membuat akun.

### 4.2 Tujuan Bisnis

Fitur diharapkan membantu AQ:

- Meningkatkan kunjungan ke halaman detail training.
- Meningkatkan jumlah qualified lead.
- Mempermudah kualifikasi kebutuhan oleh sales.
- Meningkatkan conversion dari website ke WhatsApp.
- Meningkatkan peluang cross-sell.
- Mengurangi konsultasi awal yang terlalu umum.
- Mengidentifikasi topik training yang paling banyak dicari.
- Mengetahui masalah utama calon pelanggan.
- Mendukung penyusunan produk dan kampanye berdasarkan demand aktual.

---

## 5. Non-Goals MVP

Versi MVP tidak bertujuan untuk:

- Menggantikan Training Need Analysis profesional.
- Memberikan diagnosis organisasi.
- Menentukan kewajiban regulasi secara otomatis.
- Menentukan sertifikasi kompetensi atau kelayakan profesi.
- Menentukan harga training.
- Menentukan jadwal training.
- Menentukan trainer.
- Membuat proposal otomatis.
- Membuat silabus baru menggunakan AI.
- Merekomendasikan training di luar katalog AQ.
- Menggunakan chatbot percakapan penuh.
- Meminta dokumen internal pengguna.
- Meminta data pasien atau informasi kesehatan pribadi.
- Menjamin bahwa rekomendasi adalah satu-satunya pilihan yang benar.

---

## 6. Prinsip Produk

### 6.1 Fokus pada Kebutuhan

Sistem tidak meminta pengguna memilih judul training sejak awal. Sistem menggali masalah dan target kompetensi terlebih dahulu.

### 6.2 Cepat

Form wajib maksimal 7–8 pertanyaan utama.

### 6.3 Mobile-First

Form harus nyaman digunakan melalui smartphone.

### 6.4 Tanpa Login

Pengguna dapat melihat rekomendasi tanpa membuat akun.

### 6.5 Value Before Lead Capture

Hasil rekomendasi ditampilkan terlebih dahulu. Data kontak diminta ketika pengguna ingin:

- Berkonsultasi.
- Meminta silabus.
- Meminta proposal.
- Mengirim hasil ke WhatsApp atau email.

### 6.6 Hanya Menggunakan Katalog AQ

Sistem tidak boleh membuat atau merekomendasikan judul training yang tidak ada di katalog aktif.

### 6.7 Explainable Recommendation

Setiap hasil harus memiliki alasan yang dapat ditelusuri ke jawaban pengguna.

### 6.8 Graceful Degradation

Jika layanan AI gagal, recommendation engine dan halaman hasil tetap bekerja menggunakan template deterministik.

### 6.9 Tidak Memaksa Hasil

Jika tidak ada training dengan kecocokan memadai, sistem harus menawarkan konsultasi manual.

---

## 7. Target Pengguna

### 7.1 Profesional Individu

Contoh:

- Quality staff.
- HSE officer.
- Safety officer.
- Auditor internal.
- Analis laboratorium.
- Teknisi.
- Perawat.
- Dokter.
- Tenaga kesehatan.
- Mahasiswa.
- Fresh graduate.

Kebutuhan:

- Meningkatkan kompetensi.
- Menambah pemahaman dasar.
- Persiapan tanggung jawab baru.
- Persiapan audit atau pekerjaan.
- Pengembangan karier.

### 7.2 HR, Learning & Development, atau PIC Training

Kebutuhan:

- Menentukan training untuk tim.
- Menyusun rencana pengembangan kompetensi.
- Menyamakan kemampuan peserta.
- Meminta proposal in-house.
- Menentukan prioritas training tahunan.

### 7.3 Tim QHSE atau Manajemen Perusahaan

Kebutuhan:

- Implementasi sistem.
- Persiapan audit.
- Penyelesaian temuan.
- Pengelolaan risiko.
- Peningkatan proses operasional.
- Penguatan kompetensi tim.

### 7.4 Tim Rumah Sakit atau Fasilitas Kesehatan

Kebutuhan:

- Persiapan akreditasi.
- Peningkatan mutu.
- Keselamatan pasien.
- Pencegahan dan pengendalian infeksi.
- Penguatan kompetensi unit.
- Perbaikan pengelolaan risiko.
- Peningkatan efektivitas manajemen.
- Pengelolaan biaya dan klaim.

---

## 8. Informasi Arsitektur dan Entry Point

Fitur memiliki halaman khusus:

```text
/rekomendasi-training
```

Homepage tidak menampilkan seluruh assessment. Homepage hanya menampilkan hook dan CTA menuju halaman tersebut.

### 8.1 Menu Navigasi Utama

Tambahkan menu baru pada header desktop dan mobile:

> Cari Training

Alternatif label:

- Rekomendasi Training.
- Training Finder.
- Cari Training yang Tepat.

Label MVP yang direkomendasikan:

> Cari Training

Alasan:

- Pendek.
- Mudah dipahami.
- Berorientasi pada tujuan pengguna.
- Tidak bergantung pada istilah AI.
- Cocok untuk desktop dan mobile navigation.

### 8.2 Entry Point dari Homepage

Homepage menampilkan section khusus yang mengangkat pain point pengguna.

**Headline:**

> Bingung Memilih Training yang Sesuai?

**Description:**

> Temukan program training berdasarkan bidang pekerjaan, masalah yang sedang dihadapi, dan kemampuan yang ingin ditingkatkan.

**Benefit singkat:**

- Gratis digunakan.
- Tanpa login.
- Sekitar dua menit.
- Untuk QHSE dan rumah sakit.

**CTA utama:**

> Cari Training yang Sesuai

CTA mengarah ke:

```text
/rekomendasi-training
```

**CTA sekunder opsional:**

> Lihat Semua Training

### 8.3 Penempatan Hook pada Homepage

Urutan homepage yang direkomendasikan:

1. Hero utama AQ.
2. Ringkasan layanan.
3. Section “Bingung Memilih Training?”.
4. Kategori QHSE dan rumah sakit.
5. Program training pilihan.
6. Metode pelaksanaan.
7. CTA konsultasi.
8. Footer.

Hook ditempatkan sebelum pengguna menghadapi terlalu banyak pilihan training.

### 8.4 Entry Point dari Halaman Kategori

Hook juga ditampilkan pada:

- Halaman QHSE.
- Halaman rumah sakit.
- Halaman daftar training.
- Artikel blog.
- Halaman training terkait.

Contoh URL kategori:

```text
/rekomendasi-training?category=qhse
/rekomendasi-training?category=rumah-sakit
```

Jika parameter kategori tersedia:

- Sistem mengisi kategori secara otomatis.
- Pengguna tetap dapat mengganti kategori.
- Event sumber entry point tetap dicatat.

### 8.5 Entry Point dari Artikel Blog

Contoh CTA:

> Belum yakin training mana yang sesuai dengan kebutuhan Anda? Gunakan fitur Cari Training untuk mendapatkan rekomendasi berdasarkan masalah dan target kompetensi.

Parameter tambahan dapat digunakan:

```text
/rekomendasi-training?source=blog&category=qhse
```

---

## 9. User Journey

### 9.1 Alur Utama dari Homepage

```text
Homepage
→ pengguna melihat hook “Bingung Memilih Training?”
→ klik “Cari Training yang Sesuai”
→ masuk ke /rekomendasi-training
→ membaca manfaat singkat
→ klik “Mulai Cari Training”
→ memilih QHSE atau rumah sakit
→ menjawab pertanyaan bercabang
→ sistem menghitung rekomendasi
→ pengguna melihat hasil
→ membuka detail training atau konsultasi
→ lead dan konteks kebutuhan tersimpan
```

### 9.2 Alur dari Menu Header

```text
Menu “Cari Training”
→ halaman /rekomendasi-training
→ klik “Mulai Cari Training”
→ assessment
→ hasil rekomendasi
→ detail training atau konsultasi
```

### 9.3 Alur dari Halaman Kategori

```text
Halaman QHSE atau rumah sakit
→ pengguna melihat CTA rekomendasi
→ masuk ke halaman recommender dengan kategori terpilih
→ assessment
→ hasil rekomendasi
→ detail training atau konsultasi
```

### 9.4 Halaman Recommender

Halaman `/rekomendasi-training` memiliki bagian berikut:

#### A. Hero

**Headline:**

> Temukan Training yang Tepat untuk Kebutuhan Anda

**Description:**

> Jawab beberapa pertanyaan singkat untuk mendapatkan rekomendasi training QHSE atau rumah sakit dari Akademi Quality.

**CTA:**

> Mulai Cari Training

#### B. Benefit

- Berdasarkan kebutuhan Anda.
- Gratis dan tanpa login.
- Selesai sekitar dua menit.
- Bisa langsung dikonsultasikan.

#### C. Cara Kerja

1. Pilih bidang kebutuhan.
2. Jawab pertanyaan singkat.
3. Dapatkan rekomendasi training.

#### D. Disclaimer Awal

> Hasil rekomendasi merupakan panduan awal berdasarkan jawaban Anda. Untuk kebutuhan organisasi yang lebih kompleks, tim Akademi Quality dapat membantu melakukan konsultasi lebih lanjut.

### 9.5 Memulai Assessment

Ketika tombol “Mulai Cari Training” diklik:

- Halaman scroll ke area form atau berpindah ke mode assessment.
- Sistem membuat `session_id`.
- Event `recommender_started` dicatat.
- Pertanyaan pertama ditampilkan.
- Progress indicator mulai muncul.
- Jawaban disimpan selama sesi.

### 9.6 Pengisian Form

Form menggunakan pola satu pertanyaan per layar.

Setiap layar menampilkan:

- Progress.
- Pertanyaan.
- Deskripsi singkat jika diperlukan.
- Pilihan jawaban.
- Tombol lanjut.
- Tombol kembali.

Ketentuan:

- Tombol lanjut hanya aktif setelah pertanyaan wajib dijawab.
- Pengguna dapat mengubah jawaban sebelumnya.
- Multi-select menampilkan batas maksimal.
- Jawaban disimpan selama sesi.
- Pertanyaan menyesuaikan kategori.
- Jawaban opsional dapat dilewati.

### 9.7 Proses Rekomendasi

Setelah pertanyaan terakhir, pengguna menekan:

> Lihat Rekomendasi Saya

Sistem:

1. Memvalidasi jawaban.
2. Memfilter katalog berdasarkan kategori.
3. Menghitung skor setiap training.
4. Menerapkan penalty.
5. Mengurutkan training.
6. Menentukan training utama.
7. Menentukan training pendukung.
8. Menentukan training lanjutan.
9. Membuat ringkasan kebutuhan.
10. Menampilkan hasil.

Proses scoring harus selesai maksimal satu detik, tidak termasuk AI explanation.

### 9.8 Halaman Hasil

URL dapat menggunakan:

```text
/rekomendasi-training/hasil
```

atau tetap berada di halaman utama dengan state berbasis session.

Halaman hasil menampilkan:

1. Ringkasan kebutuhan pengguna.
2. Rekomendasi utama.
3. Training pendukung.
4. Langkah lanjutan.
5. Alasan rekomendasi.
6. Tingkat kecocokan.
7. CTA detail.
8. CTA konsultasi.
9. CTA ulangi assessment.

### 9.9 Alur ke Detail Training

Ketika pengguna klik “Lihat Detail Training”:

- Pengguna diarahkan ke URL training.
- `session_id` tetap disimpan.
- Rank dan skor training dicatat.
- Event klik dicatat.
- Hasil assessment tetap dapat dibuka saat pengguna kembali.

### 9.10 Alur Konsultasi

Ketika pengguna klik “Konsultasikan Training Ini” atau “Konsultasikan Semua Hasil”:

- Sistem menampilkan modal atau section lead form.
- Pengguna mengisi data minimum.
- Lead dan konteks assessment disimpan.
- Lead score dihitung.
- Pengguna dapat diarahkan ke WhatsApp.
- Pesan WhatsApp dibuat otomatis.

### 9.11 Alur Pengguna Belum Yakin

Jika pengguna banyak memilih “Belum yakin”:

- Assessment tetap diselesaikan.
- Confidence label diturunkan.
- Sistem dapat menampilkan satu atau dua training fundamental.
- CTA konsultasi dibuat lebih dominan.
- Sistem tidak memakai label “Sangat sesuai”.

### 9.12 Alur Tanpa Hasil

Jika tidak ada training yang memenuhi threshold:

> Kebutuhan Anda cukup spesifik dan belum dapat dipetakan secara otomatis ke program yang tersedia.

CTA utama:

> Konsultasikan Kebutuhan Saya

CTA sekunder:

> Ulangi Pencarian

### 9.13 Alur Pengguna Kembali

Jika session sebelumnya masih tersedia:

> Anda memiliki hasil rekomendasi sebelumnya.

Pilihan:

- Lihat Hasil Terakhir.
- Mulai Pencarian Baru.

---

## 10. Struktur Pertanyaan

### 10.1 Prinsip Pertanyaan

Pertanyaan harus:

- Memiliki nilai tinggi terhadap keputusan rekomendasi.
- Mudah dipahami non-teknis.
- Tidak meminta pengguna mengetahui nama training.
- Tidak terlalu panjang.
- Menggunakan pilihan terstruktur.
- Memiliki opsi “Belum yakin” jika relevan.
- Menghindari pertanyaan budget pada tahap rekomendasi.

### 10.2 Jumlah Pertanyaan

Target:

- QHSE: 7–8 pertanyaan.
- Rumah sakit: 7–8 pertanyaan.
- Maksimal satu pertanyaan free text opsional.

---

## 11. Pertanyaan Utama

### Q1 — Kategori Training

**Pertanyaan:**

> Anda ingin mencari training untuk bidang apa?

**Tipe:** Single select  
**Wajib:** Ya  
**Fungsi:** Hard filter

**Pilihan:**

- QHSE, ISO, K3, atau industri.
- Rumah sakit dan pelayanan kesehatan.
- Belum yakin.

Jika memilih “Belum yakin”, tampilkan pertanyaan pembeda:

> Kebutuhan Anda lebih berkaitan dengan lingkungan kerja yang mana?

Pilihan:

- Perusahaan atau industri.
- Rumah sakit atau fasilitas kesehatan.
- Masih belum yakin.

Jika masih belum yakin:

- Sistem dapat menampilkan hasil dengan confidence rendah.
- CTA konsultasi lebih dominan.
- Sistem tidak mencampur terlalu banyak training lintas kategori.

---

## 12. Cabang QHSE

### Q2-QHSE — Area Pekerjaan

**Pertanyaan:**

> Area mana yang paling sesuai dengan pekerjaan Anda?

**Tipe:** Single select  
**Wajib:** Ya  
**Bobot:** 20%

**Pilihan:**

- Quality Management dan ISO.
- K3 dan keselamatan kerja.
- Lingkungan dan pengelolaan limbah.
- Laboratorium dan kalibrasi.
- Food safety dan industri pangan.
- Warehouse, inventory, dan supply chain.
- Produksi dan operational excellence.
- Manajemen aset dan maintenance.
- Belum yakin.

### Q3-QHSE — Tantangan Utama

**Pertanyaan:**

> Tantangan utama apa yang ingin diselesaikan?

**Tipe:** Multi-select  
**Maksimal:** 2  
**Wajib:** Ya  
**Bobot:** 30%

**Pilihan:**

- Tim belum memahami standar atau prosedur.
- Sedang mempersiapkan implementasi sistem.
- Akan menghadapi audit atau sertifikasi.
- Banyak temuan audit belum terselesaikan.
- Dokumentasi dan SOP belum tertata.
- Risiko keselamatan kerja masih tinggi.
- Terjadi insiden atau masalah operasional.
- Pengelolaan lingkungan atau limbah belum optimal.
- Hasil pengujian atau pengukuran belum konsisten.
- Proses kerja belum efisien.
- Persediaan atau warehouse sulit dikendalikan.
- Pengelolaan aset atau maintenance belum optimal.
- Membutuhkan peningkatan kompetensi umum.
- Belum tahu dan membutuhkan konsultasi.

### Q4-QHSE — Target Kemampuan

**Pertanyaan:**

> Setelah training, peserta diharapkan mampu melakukan apa?

**Tipe:** Single select  
**Wajib:** Ya  
**Bobot:** 25%

**Pilihan:**

- Memahami konsep dan persyaratan dasar.
- Menyusun dokumen atau prosedur.
- Menerapkan sistem dalam pekerjaan.
- Mengidentifikasi dan menganalisis risiko.
- Menjadi bagian dari tim implementasi.
- Melakukan audit internal.
- Menangani temuan dan tindakan perbaikan.
- Melakukan pengujian, kalibrasi, atau analisis teknis.
- Meningkatkan efisiensi proses operasional.
- Mengelola aset atau program maintenance.
- Belum yakin.

---

## 13. Cabang Rumah Sakit

### Q2-RS — Jenis Pengguna atau Organisasi

**Pertanyaan:**

> Training ini dibutuhkan untuk siapa?

**Tipe:** Single select  
**Wajib:** Ya  
**Fungsi:** Filter tambahan

**Pilihan:**

- Rumah sakit.
- Klinik.
- Puskesmas.
- Laboratorium kesehatan.
- Institusi pendidikan kesehatan.
- Organisasi profesi.
- Individu atau tenaga kesehatan.
- Lainnya.

### Q3-RS — Area Kebutuhan

**Pertanyaan:**

> Area mana yang paling membutuhkan peningkatan?

**Tipe:** Single select  
**Wajib:** Ya  
**Bobot:** 20%

**Pilihan:**

- Mutu dan keselamatan pasien.
- Akreditasi.
- Pencegahan dan pengendalian infeksi.
- K3 dan keselamatan fasilitas.
- Keperawatan.
- Pelayanan klinis.
- Rekam medis.
- Manajemen rumah sakit.
- Keuangan, unit cost, casemix, dan klaim.
- Audit dan pengawasan internal.
- Unit khusus seperti CSSD, triage, geriatri, atau TB.
- Manajemen SDM dan komunikasi pelayanan.
- Belum yakin.

### Q4-RS — Masalah Utama

**Pertanyaan:**

> Masalah utama apa yang ingin dibantu melalui training?

**Tipe:** Multi-select  
**Maksimal:** 2  
**Wajib:** Ya  
**Bobot:** 30%

**Pilihan:**

- Persiapan akreditasi.
- Dokumen dan bukti implementasi belum lengkap.
- Indikator mutu belum dikelola dengan baik.
- Insiden keselamatan pasien masih terjadi.
- Pelaporan dan investigasi insiden belum optimal.
- Kepatuhan terhadap PPI masih rendah.
- Risiko pelayanan belum dikelola secara sistematis.
- Koordinasi antarunit belum efektif.
- Kompetensi staf belum merata.
- Pelayanan pasien belum konsisten.
- Klaim BPJS atau casemix bermasalah.
- Biaya pelayanan belum dapat dihitung dengan baik.
- Audit internal belum berjalan efektif.
- Pengelolaan unit belum optimal.
- Belum tahu dan membutuhkan konsultasi.

### Q5-RS — Target Kemampuan

**Pertanyaan:**

> Kemampuan apa yang paling ingin ditingkatkan?

**Tipe:** Single select  
**Wajib:** Ya  
**Bobot:** 25%

**Pilihan:**

- Memahami standar dan regulasi.
- Menyiapkan dokumen akreditasi.
- Mengelola indikator mutu.
- Mengidentifikasi dan mengendalikan risiko.
- Melakukan investigasi insiden.
- Meningkatkan keselamatan pasien.
- Mengelola unit atau pelayanan.
- Melakukan audit internal.
- Meningkatkan kemampuan klinis atau keperawatan.
- Mengelola biaya dan klaim pelayanan.
- Meningkatkan komunikasi dan koordinasi tim.
- Belum yakin.

---

## 14. Pertanyaan Bersama

### Q6 — Tingkat Pengalaman

**Pertanyaan:**

> Seberapa jauh pengalaman peserta pada topik tersebut?

**Tipe:** Single select  
**Wajib:** Ya  
**Bobot:** 15%

**Pilihan:**

- Pemula dan belum pernah mempelajari.
- Sudah memahami dasar.
- Sudah pernah mengikuti training.
- Sudah terlibat dalam implementasi.
- Berpengalaman dan membutuhkan pendalaman.
- Tidak tahu tingkat peserta.

### Q7 — Profil Peserta

**Pertanyaan:**

> Siapa yang akan mengikuti training?

**Tipe:** Multi-select  
**Maksimal:** 2  
**Wajib:** Ya  
**Bobot:** 10%

**Pilihan:**

- Staf operasional.
- Supervisor atau kepala unit.
- Quality, HSE, atau tim mutu.
- Auditor internal.
- Tenaga kesehatan.
- Manager atau manajemen.
- Direksi.
- Mahasiswa atau fresh graduate.
- Tim lintas departemen.
- Individu.
- Belum ditentukan.

### Q8 — Urgensi

**Pertanyaan:**

> Kapan kemampuan ini dibutuhkan?

**Tipe:** Single select  
**Wajib:** Ya  
**Fungsi:** Lead qualification

**Pilihan:**

- Secepatnya, kurang dari satu bulan.
- Dalam 1–3 bulan.
- Dalam 3–6 bulan.
- Untuk program pengembangan tahunan.
- Masih tahap eksplorasi.

Urgensi tidak mengubah relevansi training. Urgensi hanya digunakan untuk lead scoring.

### Q9 — Kondisi Khusus

**Pertanyaan:**

> Ada kondisi khusus yang perlu kami ketahui?

**Tipe:** Free text  
**Wajib:** Tidak  
**Maksimal:** 300 karakter

**Placeholder:**

> Contoh: sedang persiapan audit eksternal, peserta berasal dari beberapa unit, atau membutuhkan praktik penyusunan dokumen.

Jawaban free text:

- Tidak menjadi penentu utama pada MVP.
- Dapat diklasifikasikan ke tag yang tersedia.
- Dapat membantu memperjelas alasan rekomendasi.
- Tidak boleh membuat judul training baru.

---

## 15. Taxonomy Rekomendasi

### 15.1 Category Tags

```text
qhse
rumah-sakit
```

### 15.2 Area Tags QHSE

Contoh:

```text
quality-management
iso
occupational-safety
environment
waste-management
laboratory
calibration
food-safety
warehouse
inventory
supply-chain
operational-excellence
asset-management
maintenance
```

### 15.3 Area Tags Rumah Sakit

Contoh:

```text
quality-patient-safety
accreditation
infection-control
hospital-safety
nursing
clinical-service
medical-record
hospital-management
finance
unit-cost
casemix
claims
internal-audit
cssd
triage
geriatric
tb-program
human-resources
service-communication
```

### 15.4 Problem Tags

Contoh:

```text
standard-awareness
system-implementation
audit-preparation
audit-finding
documentation
sop-development
safety-risk
incident
environmental-control
waste-management
measurement-consistency
operational-efficiency
inventory-control
asset-performance
accreditation-preparation
quality-indicator
patient-safety-incident
infection-control-compliance
service-risk
coordination
staff-competency
claim-problem
cost-calculation
unit-management
```

### 15.5 Outcome Tags

Contoh:

```text
understand-standard
prepare-documentation
implement-system
identify-risk
internal-audit
corrective-action
technical-testing
calibration
operational-improvement
asset-management
prepare-accreditation
manage-quality-indicator
investigate-incident
patient-safety
manage-unit
clinical-skill
manage-cost
manage-claims
improve-communication
```

### 15.6 Experience Tags

```text
beginner
basic
trained
implementation-experience
advanced
unknown
```

### 15.7 Participant Tags

```text
operational-staff
supervisor
quality-team
hse-team
audit-team
healthcare-worker
manager
director
student
cross-functional-team
individual
unknown
```

---

## 16. Metadata Wajib Setiap Training

Setiap training yang masuk recommendation pool harus memiliki metadata berikut.

### 16.1 Identitas

- `training_id`
- `title`
- `slug`
- `url`
- `category`
- `subcategories`
- `status`
- `thumbnail_url`

### 16.2 Metadata Rekomendasi

- `area_tags`
- `problem_tags`
- `outcome_tags`
- `experience_levels`
- `participant_tags`
- `organization_types`
- `priority_score`
- `related_training_ids`
- `prerequisite_training_ids`
- `next_level_training_ids`
- `exclusion_tags`
- `confidence_notes`

### 16.3 Metadata Konten

- `short_description`
- `learning_outcomes`
- `target_participants`
- `recommendation_summary`
- `disclaimer`
- `last_reviewed_at`
- `reviewed_by`

### 16.4 Status Kelayakan Rekomendasi

Setiap training memiliki field:

```text
recommendation_ready: true | false
```

Training hanya dapat muncul jika:

- `status = publish`
- `recommendation_ready = true`
- URL valid.
- Metadata minimum lengkap.

---

## 17. Contoh Data Training

```json
{
  "training_id": "qhse-iso-9001",
  "title": "Training ISO 9001:2015 – Sistem Manajemen Mutu",
  "slug": "training-iso-9001-2015",
  "url": "/training-iso-9001-2015",
  "category": "qhse",
  "subcategories": ["ISO"],
  "area_tags": [
    "quality-management",
    "iso"
  ],
  "problem_tags": [
    "standard-awareness",
    "system-implementation",
    "audit-preparation",
    "documentation"
  ],
  "outcome_tags": [
    "understand-standard",
    "implement-system",
    "prepare-documentation"
  ],
  "experience_levels": [
    "beginner",
    "basic",
    "trained"
  ],
  "participant_tags": [
    "quality-team",
    "supervisor",
    "manager",
    "cross-functional-team"
  ],
  "organization_types": [
    "company",
    "industry",
    "institution"
  ],
  "priority_score": 5,
  "recommendation_ready": true,
  "status": "publish"
}
```

---

## 18. Recommendation Engine

### 18.1 Hard Filter

Sistem terlebih dahulu menyaring training berdasarkan:

1. `status = publish`.
2. `recommendation_ready = true`.
3. Kategori sesuai pilihan pengguna.
4. URL training valid.
5. Training tidak masuk exclusion rule.
6. Jenis organisasi kompatibel jika metadata tersedia.

### 18.2 Formula Scoring

```text
Total Score =
Area Match × 20
+ Problem Match × 30
+ Outcome Match × 25
+ Experience Match × 15
+ Participant Match × 10
```

Total maksimal:

```text
100
```

### 18.3 Area Match

- Exact match: 1.0.
- Related match: 0.5.
- Tidak cocok: 0.

### 18.4 Problem Match

Jika pengguna memilih dua masalah:

```text
Problem Score =
jumlah problem tag yang cocok
÷ jumlah masalah yang dipilih
× 30
```

Contoh:

- Cocok dua dari dua: 30.
- Cocok satu dari dua: 15.
- Tidak ada yang cocok: 0.

### 18.5 Outcome Match

- Exact outcome: 25.
- Outcome pendukung: 12.5.
- Tidak cocok: 0.

### 18.6 Experience Match

Contoh kompatibilitas:

| User Level | Training Level | Score |
|---|---|---:|
| Beginner | Fundamental | 15 |
| Beginner | Intermediate | 7.5 |
| Beginner | Advanced | 0 |
| Basic | Fundamental | 10 |
| Basic | Intermediate | 15 |
| Basic | Advanced | 7.5 |
| Experienced | Fundamental | 5 |
| Experienced | Intermediate | 10 |
| Experienced | Advanced | 15 |

### 18.7 Participant Match

Jika training target participant cocok:

- Exact match: 10.
- Related match: 5.
- Tidak cocok: 0.

### 18.8 Penalty

Sistem mengurangi skor jika:

- Training terlalu lanjut untuk pemula: `-15`.
- Target peserta tidak relevan: `-10`.
- Jenis organisasi tidak kompatibel: `-20`.
- Training terlalu umum sedangkan ada training spesifik: `-5`.
- Training memiliki exclusion tag yang cocok: tidak ditampilkan.
- Metadata confidence rendah: `-5`.

### 18.9 Tie-Breaker

Jika dua training memiliki skor sama:

1. Problem match tertinggi.
2. Outcome match tertinggi.
3. Area match tertinggi.
4. Experience match tertinggi.
5. `priority_score` admin.
6. Metadata paling lengkap.
7. Terakhir diurutkan berdasarkan judul.

Popularitas tidak menjadi tie-breaker utama agar hasil tetap berorientasi kebutuhan.

### 18.10 Threshold

Rekomendasi utama hanya ditampilkan jika skor minimal:

```text
60
```

Klasifikasi:

| Score | Label |
|---:|---|
| 80–100 | Sangat sesuai |
| 65–79 | Sesuai |
| 50–64 | Dapat dipertimbangkan |
| <50 | Tidak ditampilkan sebagai rekomendasi utama |

Threshold awal harus dapat diubah melalui konfigurasi.

### 18.11 Confidence Score

Confidence bukan hanya score training.

Confidence assessment dapat dihitung dari:

- Jumlah jawaban “Belum yakin”.
- Kelengkapan jawaban.
- Selisih skor peringkat pertama dan kedua.
- Jumlah training yang melewati threshold.
- Kualitas metadata.

Contoh:

```text
high
medium
low
```

### 18.12 Komposisi Hasil

Sistem menampilkan maksimal tiga hasil:

1. Training utama.
2. Training pendukung.
3. Training lanjutan.

Tidak wajib selalu tiga.

Jika hanya satu training memenuhi syarat, tampilkan satu hasil.

### 18.13 Learning Path

Learning path menggunakan metadata:

- `prerequisite_training_ids`
- `related_training_ids`
- `next_level_training_ids`

Contoh:

```text
ISO 9001 Fundamental
→ Document Control
→ Internal Audit ISO 9001
```

Learning path tidak boleh hanya ditentukan dari ranking global.

---

## 19. Peran AI

### 19.1 AI Diperbolehkan

AI dapat digunakan untuk:

- Merangkum kebutuhan pengguna.
- Mengubah alasan scoring menjadi bahasa natural.
- Mengklasifikasikan free text ke tag yang tersedia.
- Menjelaskan perbedaan antara training utama dan pendukung.
- Menyederhanakan bahasa teknis.
- Menyesuaikan pronoun individu atau organisasi.

### 19.2 AI Tidak Diperbolehkan

AI tidak boleh:

- Membuat judul training baru.
- Mengubah skor.
- Merekomendasikan training nonaktif.
- Merekomendasikan training tanpa URL.
- Mengklaim suatu training wajib secara regulasi tanpa validasi.
- Mengklaim training sebagai sertifikasi kompetensi.
- Menentukan trainer.
- Menentukan jadwal.
- Menentukan harga.
- Menjamin hasil.
- Mengolah data pasien.
- Mengirim data pribadi yang tidak diperlukan ke model.

### 19.3 Structured Input AI

AI hanya menerima data terstruktur:

```json
{
  "user_summary": {
    "category": "qhse",
    "area": "laboratory",
    "problems": ["audit-preparation"],
    "outcome": "internal-audit",
    "experience": "basic",
    "participants": ["quality-team"]
  },
  "recommendations": [
    {
      "training_id": "training-123",
      "title": "Training Audit Internal ISO 17025:2017",
      "score": 90,
      "matched_tags": [
        "laboratory",
        "audit-preparation",
        "internal-audit"
      ]
    }
  ]
}
```

AI hanya menghasilkan explanation. AI tidak boleh memilih ulang training.

### 19.4 Fallback Tanpa AI

Template:

> Training ini direkomendasikan karena sesuai dengan area {area}, membantu menangani {problem}, dan mendukung peserta untuk {outcome}.

Jika AI error:

- Rekomendasi tetap tampil.
- Error tidak ditampilkan kepada pengguna.
- Event `ai_explanation_failed` dicatat.

---


## 20. Integrasi DeepInfra dan Pemilihan Model

### 20.1 Keputusan Teknologi

Provider AI untuk MVP:

```text
DeepInfra
```

Model utama:

```text
Qwen/Qwen3.5-9B
```

Mode penggunaan:

```text
Non-thinking / instruct mode
```

Format output:

```text
Strict JSON Schema
```

Fallback utama:

```text
Template deterministik tanpa AI
```

Model alternatif untuk benchmark atau fallback provider-level:

```text
mistralai/Mistral-Small-3.2-24B-Instruct-2506
```

AI tidak menentukan training yang direkomendasikan. AI hanya menerima hasil yang sudah dipilih oleh rule engine.

### 20.2 Alasan Memilih Qwen3.5-9B

`Qwen/Qwen3.5-9B` direkomendasikan untuk MVP karena:

- Mendukung 201 bahasa dan dialek, sehingga lebih cocok untuk interaksi Bahasa Indonesia.
- Mendukung JSON output dan function calling di DeepInfra.
- Memiliki context window 262.144 token, walaupun aplikasi ini tidak membutuhkan context sebesar itu.
- Memiliki kemampuan instruction-following yang memadai untuk klasifikasi dan penjelasan singkat.
- Biaya inferensi relatif rendah.
- Tersedia melalui OpenAI-compatible API.
- Menggunakan lisensi Apache 2.0 berdasarkan halaman model.
- Ukuran model tidak berlebihan untuk tugas yang sebagian besar sudah diselesaikan oleh rule engine.

Harga publik DeepInfra pada 30 Juli 2026:

| Model | Input / 1M Token | Output / 1M Token | Penggunaan |
|---|---:|---:|---|
| `Qwen/Qwen3.5-9B` | USD 0,10 | USD 0,15 | **Model utama MVP** |
| `mistralai/Mistral-Small-3.2-24B-Instruct-2506` | USD 0,075 | USD 0,20 | Benchmark atau fallback |
| `meta-llama/Llama-3.3-70B-Instruct-Turbo` | USD 0,10 | USD 0,32 | Benchmark kualitas, bukan default |
| `Qwen/Qwen3.5-27B` | USD 0,26 | USD 2,60 | Tidak direkomendasikan untuk MVP |

Harga dapat berubah. Aplikasi tidak boleh menyimpan harga provider sebagai konstanta bisnis permanen tanpa proses review.

### 20.3 Kenapa Tidak Memakai Model Besar sebagai Default

Tugas AI pada fitur ini hanya:

1. Merangkum kebutuhan pengguna.
2. Membuat alasan rekomendasi.
3. Mengubah catatan opsional menjadi bahasa yang lebih terstruktur.
4. Menjaga output sesuai schema.

Tugas tersebut tidak membutuhkan model reasoning besar.

Model yang lebih besar:

- Menambah biaya.
- Berpotensi menambah latency.
- Tidak memperbaiki kualitas scoring karena scoring tetap dilakukan rule engine.
- Menambah risiko output terlalu panjang.
- Tidak memberi ROI yang jelas pada MVP.

Model besar hanya layak dipakai jika hasil benchmark membuktikan peningkatan conversion atau kualitas yang signifikan.

### 20.4 Batas Tanggung Jawab AI

#### Dikerjakan Rule Engine

- Hard filter kategori.
- Pencocokan metadata.
- Perhitungan score.
- Penalty.
- Tie-breaker.
- Pemilihan training utama.
- Pemilihan training pendukung.
- Learning path.
- Confidence score.

#### Dikerjakan AI

- `user_summary`
- `recommendation_explanations`
- `normalized_note_tags`
- `consultation_context`
- `safety_flags`

#### Tidak Boleh Dikerjakan AI

- Memilih ulang training.
- Mengubah ranking.
- Mengubah score.
- Membuat judul training baru.
- Mengklaim sertifikasi atau akreditasi.
- Menentukan kewajiban regulasi.
- Menentukan harga, jadwal, atau trainer.
- Menghasilkan informasi yang tidak ada di payload.

### 20.5 Jumlah Panggilan AI

Untuk MVP, gunakan maksimal satu panggilan AI per assessment selesai.

Alur:

```text
User menyelesaikan form
→ rule engine menghitung hasil
→ hasil deterministik langsung tersedia
→ backend mengirim jawaban + maksimal tiga hasil ke DeepInfra
→ DeepInfra menghasilkan summary dan explanation
→ backend memvalidasi JSON
→ UI menampilkan explanation
```

Catatan bebas pengguna tidak memengaruhi score pada MVP. Hal ini menghindari kebutuhan dua panggilan AI.

Jika AI belum selesai, halaman hasil dapat menampilkan template deterministik terlebih dahulu.

### 20.6 DeepInfra API

Gunakan OpenAI-compatible endpoint:

```text
https://api.deepinfra.com/v1/openai
```

Chat completion endpoint:

```text
POST https://api.deepinfra.com/v1/openai/chat/completions
```

Authentication:

```http
Authorization: Bearer ${DEEPINFRA_API_KEY}
```

API key hanya disimpan di backend.

Dilarang:

- Menaruh API key di frontend.
- Menaruh API key di repository.
- Mengirim API key melalui query parameter.
- Menampilkan error provider mentah kepada pengguna.

### 20.7 Konfigurasi Model Awal

```json
{
  "model": "Qwen/Qwen3.5-9B",
  "temperature": 0.2,
  "top_p": 0.8,
  "max_tokens": 700,
  "stream": false,
  "chat_template_kwargs": {
    "enable_thinking": false
  }
}
```

Keputusan konfigurasi:

- `enable_thinking: false` karena tugas tidak membutuhkan reasoning panjang.
- `temperature: 0.2` untuk menjaga output stabil.
- `max_tokens: 700` untuk mencegah jawaban terlalu panjang.
- `stream: false` karena output harus divalidasi sebagai satu JSON object.
- Gunakan timeout aplikasi antara 6–10 detik.
- Maksimal satu retry untuk error sementara atau invalid JSON.

Parameter harus diuji menggunakan benchmark internal sebelum produksi.

### 20.8 Structured Output

Gunakan `response_format` dengan `json_schema`, bukan meminta JSON hanya melalui prompt.

Contoh schema:

```json
{
  "type": "json_schema",
  "json_schema": {
    "name": "training_recommendation_explanation",
    "strict": true,
    "schema": {
      "type": "object",
      "properties": {
        "user_summary": {
          "type": "string",
          "maxLength": 400
        },
        "normalized_note_tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "maxItems": 5
        },
        "recommendations": {
          "type": "array",
          "maxItems": 3,
          "items": {
            "type": "object",
            "properties": {
              "training_id": {
                "type": "string"
              },
              "explanation": {
                "type": "string",
                "maxLength": 450
              },
              "reasons": {
                "type": "array",
                "minItems": 2,
                "maxItems": 3,
                "items": {
                  "type": "string",
                  "maxLength": 160
                }
              }
            },
            "required": [
              "training_id",
              "explanation",
              "reasons"
            ],
            "additionalProperties": false
          }
        },
        "consultation_context": {
          "type": "string",
          "maxLength": 500
        },
        "safety_flags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "user_summary",
        "normalized_note_tags",
        "recommendations",
        "consultation_context",
        "safety_flags"
      ],
      "additionalProperties": false
    }
  }
}
```

### 20.9 Contoh Request TypeScript

```typescript
type RecommendationInput = {
  sessionId: string;
  answers: {
    category: "qhse" | "rumah-sakit";
    area: string;
    problems: string[];
    outcome: string;
    experience: string;
    participants: string[];
    urgency: string;
    notes?: string;
  };
  recommendations: Array<{
    trainingId: string;
    title: string;
    score: number;
    matchedTags: string[];
  }>;
};

async function generateAIExplanation(
  input: RecommendationInput
): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch(
      "https://api.deepinfra.com/v1/openai/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.DEEPINFRA_API_KEY}`,
          "Content-Type": "application/json"
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: "Qwen/Qwen3.5-9B",
          temperature: 0.2,
          top_p: 0.8,
          max_tokens: 700,
          stream: false,
          chat_template_kwargs: {
            enable_thinking: false
          },
          messages: [
            {
              role: "system",
              content: [
                "Anda adalah explanation layer Akademi Quality.",
                "Gunakan Bahasa Indonesia yang jelas dan profesional.",
                "Training sudah dipilih oleh rule engine.",
                "Dilarang mengubah urutan, score, ID, atau judul training.",
                "Dilarang membuat training baru.",
                "Gunakan hanya data yang diberikan."
              ].join(" ")
            },
            {
              role: "user",
              content: JSON.stringify(input)
            }
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "training_recommendation_explanation",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  user_summary: { type: "string" },
                  normalized_note_tags: {
                    type: "array",
                    items: { type: "string" }
                  },
                  recommendations: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        training_id: { type: "string" },
                        explanation: { type: "string" },
                        reasons: {
                          type: "array",
                          items: { type: "string" }
                        }
                      },
                      required: [
                        "training_id",
                        "explanation",
                        "reasons"
                      ],
                      additionalProperties: false
                    }
                  },
                  consultation_context: { type: "string" },
                  safety_flags: {
                    type: "array",
                    items: { type: "string" }
                  }
                },
                required: [
                  "user_summary",
                  "normalized_note_tags",
                  "recommendations",
                  "consultation_context",
                  "safety_flags"
                ],
                additionalProperties: false
              }
            }
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`DeepInfra error: ${response.status}`);
    }

    const result = await response.json();
    const content = result?.choices?.[0]?.message?.content;

    if (typeof content !== "string") {
      throw new Error("DeepInfra returned empty content");
    }

    return JSON.parse(content);
  } finally {
    clearTimeout(timeout);
  }
}
```

Production implementation wajib menambahkan:

- Runtime schema validation.
- Retry terbatas.
- Logging tanpa data pribadi.
- Circuit breaker.
- Fallback deterministik.

### 20.10 Validasi Output

Setelah menerima response AI, backend harus memastikan:

1. JSON valid.
2. Semua `training_id` terdapat pada hasil rule engine.
3. Jumlah rekomendasi tidak lebih dari tiga.
4. Urutan training tidak berubah.
5. Tidak ada judul training baru.
6. Panjang teks berada dalam batas.
7. Tidak ada klaim sertifikasi atau regulasi yang tidak didukung.
8. Tidak ada data pribadi diulang secara tidak perlu.
9. Bahasa output sesuai Bahasa Indonesia.
10. Tidak ada tag di luar whitelist jika tag akan disimpan.

Jika satu validasi gagal:

```text
discard AI response
→ gunakan template deterministik
→ catat ai_validation_failed
```

### 20.11 Fallback Strategy

Urutan fallback:

```text
Qwen3.5-9B
→ satu retry jika error sementara
→ template deterministik
```

Jangan otomatis memanggil model lain untuk setiap error karena dapat:

- Menambah latency.
- Menggandakan biaya.
- Menyulitkan observability.
- Menghasilkan style penjelasan yang tidak konsisten.

Fallback ke Mistral hanya digunakan jika:

- Qwen mengalami gangguan berkepanjangan.
- Model dinonaktifkan.
- Hasil benchmark menunjukkan kualitas Qwen tidak memadai.
- Routing model diaktifkan secara eksplisit melalui konfigurasi.

### 20.12 Estimasi Biaya

Asumsi satu assessment:

- Input: 800–1.200 token.
- Output: 180–250 token.
- Model: `Qwen/Qwen3.5-9B`.
- Satu AI call per assessment.

Perkiraan:

| Volume | Estimasi Biaya |
|---:|---:|
| 1 assessment | USD 0,000107–0,000158 |
| 1.000 assessment | USD 0,11–0,16 |
| 10.000 assessment | USD 1,07–1,58 |
| 100.000 assessment | USD 10,70–15,80 |

Angka tersebut adalah estimasi berdasarkan asumsi token dan harga publik pada tanggal dokumen. Biaya aktual bergantung pada token, tier, retry, dan perubahan harga provider.

### 20.13 Kontrol Biaya

Implementasikan:

- Maksimal satu call per completed assessment.
- Jangan memanggil AI pada setiap pertanyaan.
- Batasi panjang free text.
- Kirim hanya metadata top tiga training.
- Batasi `max_tokens`.
- Cache explanation berdasarkan hash payload jika payload identik.
- Catat token usage per request.
- Tetapkan daily budget alert.
- Tetapkan monthly hard limit.
- Jangan mengirim seluruh katalog training ke model.
- Jangan mengirim seluruh PRD atau halaman website ke model.

### 20.14 Observability DeepInfra

Log minimum:

- `provider`
- `model`
- `request_id`
- `session_id`
- `latency_ms`
- `input_tokens`
- `output_tokens`
- `estimated_cost`
- `retry_count`
- `response_valid`
- `fallback_used`
- `error_type`
- `created_at`

Jangan menyimpan:

- API key.
- Nomor WhatsApp.
- Email.
- Nama lengkap di AI log.
- Free text mentah jika tidak diperlukan.

### 20.15 Privacy

Payload ke DeepInfra harus menggunakan data minimum.

Gunakan:

- Jawaban berbentuk tag.
- Training ID.
- Judul training.
- Matched tags.
- Score.
- Catatan opsional yang telah disanitasi.

Jangan kirim:

- Nomor WhatsApp.
- Email.
- Nama.
- Nama pasien.
- Informasi kesehatan.
- Dokumen organisasi.
- Data sensitif lain.

Lead capture dilakukan setelah hasil. Data kontak tidak perlu masuk ke AI pipeline.

### 20.16 Model Evaluation Sebelum Launch

Lakukan benchmark menggunakan minimal 50 skenario:

- 25 QHSE.
- 25 rumah sakit.
- Bahasa Indonesia formal.
- Bahasa Indonesia informal.
- Catatan dengan typo.
- Catatan kosong.
- Catatan tidak relevan.
- Low-confidence result.
- No-result scenario.

Bandingkan:

1. `Qwen/Qwen3.5-9B`
2. `mistralai/Mistral-Small-3.2-24B-Instruct-2506`

Metrik:

- JSON validity.
- Training ID consistency.
- Hallucination rate.
- Kualitas Bahasa Indonesia.
- Relevansi summary.
- Relevansi reasons.
- Latency.
- Token usage.
- Cost.
- Persentase fallback.

Acceptance target internal:

- Tidak ada training fiktif.
- Tidak ada perubahan ranking.
- Seluruh output lolos schema setelah maksimal satu retry.
- Penjelasan dapat dipahami user non-teknis.
- P95 latency memenuhi target UX produk.
- Qwen dipilih jika kualitasnya cukup dan lebih efisien.

### 20.17 Trigger untuk Upgrade Model

Pertimbangkan model yang lebih besar jika:

- AI validation failure konsisten di atas 2%.
- Kualitas Bahasa Indonesia tidak diterima reviewer.
- Summary sering kehilangan konteks penting.
- Free-text classification perlu memengaruhi recommendation score.
- Produk berkembang menjadi conversational recommender.
- Ada bukti A/B test bahwa model lebih besar meningkatkan conversion.

Jangan upgrade hanya karena model baru lebih populer.

### 20.18 Model Configuration

Simpan model di environment/config:

```env
DEEPINFRA_API_KEY=...
DEEPINFRA_BASE_URL=https://api.deepinfra.com/v1/openai
DEEPINFRA_MODEL=Qwen/Qwen3.5-9B
DEEPINFRA_TIMEOUT_MS=8000
DEEPINFRA_MAX_RETRY=1
AI_EXPLANATION_ENABLED=true
AI_DAILY_BUDGET_USD=1
```

Model ID tidak boleh tersebar di banyak file source code.

### 20.19 Referensi Resmi DeepInfra

- Model Qwen3.5-9B: `https://deepinfra.com/Qwen/Qwen3.5-9B`
- Model Mistral Small 3.2: `https://deepinfra.com/mistralai/Mistral-Small-3.2-24B-Instruct-2506`
- Model Llama 3.3 70B Turbo: `https://deepinfra.com/meta-llama/Llama-3.3-70B-Instruct-Turbo`
- Structured Outputs: `https://docs.deepinfra.com/chat/structured-outputs`
- Models Documentation: `https://docs.deepinfra.com/models`

Model dan harga harus diverifikasi ulang sebelum production launch karena katalog dan harga inference dapat berubah.

---

## 21. Halaman Hasil

### 20.1 Ringkasan Kebutuhan

Contoh:

> Berdasarkan jawaban Anda, kebutuhan utama saat ini adalah meningkatkan kesiapan audit pada tim laboratorium yang telah memahami dasar sistem manajemen.

Ringkasan harus berasal dari jawaban terstruktur.

### 20.2 Kartu Rekomendasi

Setiap kartu menampilkan:

- Rank.
- Nama training.
- Kategori.
- Subkategori.
- Label kecocokan.
- Penjelasan singkat.
- Maksimal tiga alasan.
- Target peserta.
- CTA detail.
- CTA konsultasi.

### 20.3 Contoh Kartu

```text
Rekomendasi Utama

Training Audit Internal ISO 17025:2017
Sangat sesuai

Training ini sesuai karena:
- Area kebutuhan Anda adalah laboratorium.
- Organisasi sedang mempersiapkan audit.
- Target peserta adalah mampu melakukan audit internal.

[Lihat Detail Training]
[Konsultasikan Training Ini]
```

### 20.4 CTA Halaman Hasil

CTA utama:

> Konsultasikan Hasil Ini

CTA per training:

> Lihat Detail Training

CTA sekunder:

- Ulangi Pencarian.
- Lihat Semua Training.
- Bagikan Hasil.

### 20.5 Hasil Low Confidence

Pesan:

> Kebutuhan Anda belum cukup spesifik untuk menghasilkan rekomendasi dengan tingkat keyakinan tinggi. Berikut program awal yang dapat dipertimbangkan.

CTA konsultasi lebih dominan.

### 20.6 Empty State

Pesan:

> Kebutuhan Anda cukup spesifik dan belum dapat dipetakan secara otomatis ke program yang tersedia.

CTA:

> Konsultasikan Kebutuhan Saya

---

## 22. Lead Capture

### 21.1 Waktu Penampilan

Lead form ditampilkan setelah pengguna melihat hasil.

Jangan meminta kontak sebelum rekomendasi tampil.

### 21.2 Trigger

Lead form dapat dibuka melalui:

- Konsultasikan Hasil Ini.
- Konsultasikan Training Ini.
- Minta Silabus.
- Minta Proposal In-House.
- Kirim Hasil ke Email.

### 21.3 Field Minimum

- Nama.
- Nomor WhatsApp.
- Email opsional.
- Nama organisasi opsional.
- Jumlah peserta opsional.
- Format kebutuhan.
- Persetujuan untuk dihubungi.

### 21.4 Format Training

Pilihan:

- Public training.
- Online training.
- Offline training.
- In-house training.
- Belum yakin.

### 21.5 Data yang Disimpan

- Lead identity.
- Session ID.
- Semua jawaban assessment.
- Rekomendasi dan skor.
- Training yang diklik.
- Urgensi.
- Entry point.
- Landing page.
- UTM.
- Timestamp.
- Consent.
- Lead score.

### 21.6 Pesan WhatsApp

```text
Halo Akademi Quality,

Saya telah menggunakan fitur rekomendasi training di website.

Kategori kebutuhan: {category}
Area: {area}
Kebutuhan utama: {problem}
Rekomendasi utama: {training_title}

Saya ingin berkonsultasi lebih lanjut mengenai training tersebut.
```

Pengguna dapat mengedit pesan sebelum mengirim.

---

## 23. Lead Scoring

Lead scoring terpisah dari recommendation scoring.

### 22.1 Urgensi

| Urgensi | Score |
|---|---:|
| Kurang dari satu bulan | 30 |
| 1–3 bulan | 20 |
| 3–6 bulan | 10 |
| Program tahunan | 10 |
| Eksplorasi | 0 |

### 22.2 Jenis Kebutuhan

| Format | Score |
|---|---:|
| In-house | 25 |
| Offline untuk tim | 20 |
| Online untuk tim | 15 |
| Public individu | 5 |
| Belum yakin | 0 |

### 22.3 Jumlah Peserta

| Jumlah | Score |
|---|---:|
| >20 | 25 |
| 10–20 | 20 |
| 5–9 | 10 |
| 1–4 | 5 |
| Belum diketahui | 0 |

### 22.4 Kelengkapan Kontak

- WhatsApp valid: +10.
- Email organisasi: +5.
- Nama organisasi: +5.

### 22.5 Klasifikasi

| Score | Class |
|---:|---|
| 70–100 | Hot |
| 40–69 | Warm |
| 0–39 | Nurture |

Threshold ini adalah hipotesis awal dan harus dibandingkan dengan conversion aktual.

---

## 24. Admin dan CMS

Admin harus dapat:

- Mengaktifkan atau menonaktifkan training.
- Menentukan `recommendation_ready`.
- Mengubah tag training.
- Mengubah priority score.
- Mengatur prerequisite.
- Mengatur related training.
- Mengatur next-level training.
- Mengubah threshold.
- Mengubah opsi pertanyaan.
- Melihat training yang belum memiliki metadata.
- Melihat hasil test recommendation.
- Melihat version history.
- Melihat tanggal review terakhir.
- Menentukan reviewer.

### 23.1 Validation Admin

Sistem memberi warning jika:

- URL kosong.
- Category kosong.
- Area tags kosong.
- Problem tags kosong.
- Outcome tags kosong.
- Experience levels kosong.
- Participant tags kosong.
- Learning path memiliki circular dependency.
- Training nonaktif masih direferensikan training lain.

---

## 25. Functional Requirements

### FR-01 — Dedicated Page

Fitur tersedia di `/rekomendasi-training`.

### FR-02 — Header Navigation

Menu “Cari Training” tersedia di desktop dan mobile navigation.

### FR-03 — Homepage Hook

Homepage memiliki CTA menuju halaman recommender.

### FR-04 — Category Deep Link

Halaman menerima query parameter kategori.

### FR-05 — Branching Form

Pertanyaan berubah berdasarkan kategori.

### FR-06 — Progress Indicator

Sistem menampilkan progress assessment.

### FR-07 — Navigation

Pengguna dapat lanjut, kembali, dan mengubah jawaban.

### FR-08 — Session Persistence

Jawaban tersimpan selama sesi.

### FR-09 — Input Validation

Pertanyaan wajib harus dijawab sebelum lanjut.

### FR-10 — Recommendation Processing

Sistem hanya memproses training aktif dan recommendation-ready.

### FR-11 — Scoring Transparency

Sistem menyimpan breakdown score.

### FR-12 — Result Explanation

Setiap rekomendasi memiliki minimal dua alasan.

### FR-13 — Detail Page Integration

CTA detail mengarah ke URL yang valid.

### FR-14 — Lead Capture

Lead form tampil setelah hasil.

### FR-15 — WhatsApp Integration

Pesan WhatsApp dibuat otomatis.

### FR-16 — Lead Storage

Data disimpan sebelum redirect WhatsApp.

### FR-17 — Admin Configuration

Tag dan threshold dapat diubah tanpa mengubah core logic.

### FR-18 — Empty Result

No-result state tersedia.

### FR-19 — AI Fallback

Hasil tetap tampil jika AI gagal.

### FR-20 — Restart Assessment

Pengguna dapat mengulang pencarian.

### FR-21 — Analytics

Event utama tercatat.

### FR-22 — Result Persistence

Hasil dapat dibuka kembali selama session aktif.

### FR-23 — Training Status Sync

Training nonaktif tidak boleh muncul.

### FR-24 — Duplicate Prevention

Training yang sama tidak boleh muncul di lebih dari satu slot hasil.

### FR-25 — Low Confidence Handling

Sistem dapat menampilkan UI khusus untuk confidence rendah.

---

## 26. Non-Functional Requirements

### 25.1 Performance

- Initial page load dioptimalkan untuk mobile.
- Scoring maksimal satu detik.
- AI tidak memblokir hasil dasar.
- Lazy-load thumbnail.
- Hindari bundle JavaScript berlebihan.

### 25.2 Availability

- Rule engine tetap berfungsi tanpa AI.
- Kegagalan CRM tidak menghapus lead.
- Retry untuk integrasi eksternal.
- Error disimpan untuk monitoring.

### 25.3 Compatibility

Mendukung browser modern:

- Chrome.
- Safari.
- Firefox.
- Edge.
- Android browser.
- iOS browser.

### 25.4 Accessibility

- Dapat digunakan dengan keyboard.
- Label form terbaca screen reader.
- Kontras memadai.
- Tidak mengandalkan warna saja.
- Focus state terlihat.
- Ukuran tombol memadai.
- Pesan error dapat dipahami.

### 25.5 Maintainability

- Question schema tersentralisasi.
- Weight tersimpan dalam config.
- Metadata tersimpan di database atau CMS.
- Logic scoring memiliki automated test.
- Perubahan metadata memiliki timestamp.

### 25.6 Observability

- Error logging.
- AI failure logging.
- Recommendation distribution.
- No-result monitoring.
- API latency.
- Conversion tracking.

---

## 27. UI dan Branding

Gunakan identitas visual AQ:

| Peran | Nilai |
|---|---|
| Primary | `#000000` |
| Primary soft | `#050505` |
| Primary foreground | `#FFFFFF` |
| Secondary | `#F8F8F7` |
| Secondary soft | `#F7F4F5` |
| Text utama | `#000000` |
| Text body | `#453E41` |
| Text muted | `#535353` |
| Border | `#E8E3E5` |
| Accent | `#C84D7C` |
| Accent dark | `#AE4169` |
| Accent hover | `#E75686` |
| Accent soft | `#F1A6C1` |
| Accent background | `#FFF2F7` |
| WhatsApp | `#25D366` |

### 26.1 Prinsip UI

- Satu pertanyaan per layar.
- Whitespace cukup.
- Pilihan berbentuk selectable card.
- CTA utama memakai accent AQ.
- Hasil terlihat profesional.
- Hindari tampilan seperti kuis hiburan.
- Hindari istilah teknis AI yang tidak perlu.
- Gunakan bahasa sederhana.
- Prioritaskan mobile.

### 26.2 Progress Indicator

Contoh:

```text
Pertanyaan 3 dari 7
```

atau progress bar dengan label persentase.

### 26.3 Loading State

Copy:

> Sedang mencocokkan kebutuhan Anda dengan program AQ...

Loading maksimal satu detik untuk rule engine.

### 26.4 Error State

Copy:

> Terjadi kendala saat memproses hasil. Silakan coba kembali.

Jangan menampilkan stack trace atau error teknis.

---

## 28. Copy Utama

### 27.1 Menu

> Cari Training

### 27.2 Homepage Hook

**Headline:**

> Bingung Memilih Training yang Sesuai?

**Description:**

> Temukan program training berdasarkan bidang pekerjaan, masalah yang sedang dihadapi, dan kemampuan yang ingin ditingkatkan.

**CTA:**

> Cari Training yang Sesuai

### 27.3 Hero Halaman

**Headline:**

> Temukan Training yang Tepat untuk Kebutuhan Anda

**Description:**

> Jawab beberapa pertanyaan singkat untuk mendapatkan rekomendasi training QHSE atau rumah sakit dari Akademi Quality.

**CTA:**

> Mulai Cari Training

### 27.4 CTA Akhir Form

> Lihat Rekomendasi Saya

### 27.5 Disclaimer

> Rekomendasi ini merupakan panduan awal berdasarkan jawaban Anda dan bukan pengganti analisis kebutuhan pelatihan secara menyeluruh.

---

## 29. Analytics Events

Event minimum:

```text
recommender_hook_viewed
recommender_hook_clicked
recommender_page_viewed
recommender_started
question_viewed
question_answered
question_back_clicked
recommender_abandoned
recommender_completed
recommendation_generated
recommendation_detail_clicked
recommendation_whatsapp_clicked
lead_form_viewed
lead_form_submitted
assessment_restarted
no_result_generated
low_confidence_generated
ai_explanation_failed
```

### 28.1 Parameter Event

- `session_id`
- `entry_point`
- `source_page`
- `category`
- `question_id`
- `answer_id`
- `training_id`
- `recommendation_rank`
- `recommendation_score`
- `confidence`
- `device_type`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `timestamp`

Data pribadi tidak dikirim ke analytics publik.

---

## 30. Dashboard Minimum

Dashboard harus menjawab:

- Berapa orang melihat hook?
- Berapa orang klik hook?
- Berapa orang membuka halaman recommender?
- Berapa orang memulai assessment?
- Berapa orang menyelesaikan assessment?
- Di pertanyaan mana pengguna keluar?
- Kategori mana paling banyak dipilih?
- Masalah mana paling sering dipilih?
- Outcome mana paling sering dipilih?
- Training mana paling sering direkomendasikan?
- Training mana paling sering diklik?
- Berapa no-result rate?
- Berapa low-confidence rate?
- Berapa pengguna menghubungi WhatsApp?
- Berapa lead masuk?
- Berapa lead menjadi opportunity?
- Berapa lead menjadi customer?
- Berapa revenue yang dapat diatribusikan ke recommender?

---

## 31. KPI

### 30.1 KPI Utama

- Homepage hook click-through rate.
- Assessment start rate.
- Assessment completion rate.
- Recommendation-to-detail click rate.
- Recommendation-to-contact conversion rate.
- Qualified lead rate.
- Lead-to-customer conversion.
- Revenue dari recommender.

### 30.2 KPI Pendukung

- Median completion time.
- Drop-off per pertanyaan.
- No-result rate.
- Low-confidence rate.
- Restart rate.
- Recommendation click distribution.
- Category distribution.
- Problem distribution.

### 30.3 Target Validasi Awal

Target awal merupakan hipotesis:

| KPI | Target Awal |
|---|---:|
| Start-to-completion | ≥55% |
| Result-to-detail click | ≥15% |
| Result-to-contact | ≥8% |
| No-result rate | ≤10% |
| Median completion time | <3 menit |

Evaluasi setelah:

- Minimal empat minggu, atau
- Minimal 300 assessment selesai.

---

## 32. Privacy dan Security

- Hasil dapat dilihat tanpa data pribadi.
- Kontak hanya diminta untuk tindakan lanjutan.
- Harus ada consent.
- Jangan meminta data pasien.
- Jangan meminta informasi kesehatan pribadi.
- Jangan meminta dokumen internal pada MVP.
- Free text maksimal 300 karakter.
- Input harus disanitasi.
- API memiliki rate limiting.
- Data lead memiliki access control.
- Log tidak menampilkan data pribadi secara terbuka.
- Data ke AI diminimalkan.
- WhatsApp number divalidasi.
- Email divalidasi.
- CSRF dan abuse protection diterapkan.
- Retention policy harus ditentukan.
- Pengguna dapat meminta penghapusan data melalui kanal resmi AQ.

---

## 33. Edge Cases

### 32.1 Banyak Jawaban “Belum Yakin”

- Confidence turun.
- Hasil fundamental.
- CTA konsultasi dominan.

### 32.2 Tidak Ada Hasil

- Jangan memaksakan training.
- Tampilkan konsultasi.

### 32.3 Skor Sama

- Gunakan tie-breaker.

### 32.4 Metadata Tidak Lengkap

- Training tidak masuk pool.
- Admin mendapat warning.

### 32.5 Free Text Tidak Relevan

- Abaikan bagian yang tidak dapat dipetakan.
- Gunakan jawaban terstruktur.

### 32.6 Kebutuhan Mendesak

- Lead score naik.
- Recommendation score tidak berubah.

### 32.7 Individu Pemula

- Prioritaskan fundamental.
- Hindari advanced auditor tanpa kecocokan.

### 32.8 Training Dinonaktifkan Saat Session Aktif

- Training tidak ditampilkan saat result di-refresh.
- Sistem menghitung ulang hasil.

### 32.9 User Membuka Banyak Tab

- Session tetap konsisten.
- Last updated result menjadi state aktif.

### 32.10 AI Timeout

- Gunakan explanation template.
- Jangan menahan halaman hasil.

---

## 34. Acceptance Criteria

MVP diterima jika:

1. Menu “Cari Training” tersedia di header desktop dan mobile.
2. Homepage memiliki hook dan CTA.
3. CTA mengarah ke `/rekomendasi-training`.
4. Halaman memiliki hero, benefit, cara kerja, dan disclaimer.
5. Form dapat digunakan tanpa login.
6. Kategori QHSE dan rumah sakit tersedia.
7. Pertanyaan bercabang berdasarkan kategori.
8. Jawaban tersimpan selama sesi.
9. Pengguna dapat kembali dan mengubah jawaban.
10. Sistem hanya menggunakan training aktif dan recommendation-ready.
11. Maksimal tiga hasil ditampilkan.
12. Setiap hasil memiliki alasan.
13. Tidak ada training fiktif.
14. CTA detail menuju URL valid.
15. CTA konsultasi bekerja.
16. Lead dan context assessment tersimpan.
17. WhatsApp message terstruktur.
18. Admin dapat mengubah metadata.
19. AI failure tidak menghentikan recommendation.
20. No-result state tersedia.
21. Low-confidence state tersedia.
22. Assessment dapat diulang.
23. Analytics event tercatat.
24. Form bekerja di mobile dan desktop.
25. Data pribadi tidak wajib untuk melihat hasil.
26. Training yang sama tidak muncul dua kali.
27. Breakdown scoring dapat diaudit internal.
28. Kategori dari query parameter dapat terisi otomatis.

---

## 35. Testing Scenarios

### 34.1 QHSE — Audit Laboratorium

Input:

- QHSE.
- Laboratorium.
- Persiapan audit.
- Melakukan audit internal.
- Sudah memahami dasar.
- Tim quality atau laboratorium.

Expected:

- Audit Internal ISO 17025 berada di peringkat atas.
- Training warehouse tidak muncul.
- Training fundamental laboratorium dapat menjadi pendukung.

### 34.2 QHSE — Kalibrasi Pemula

Input:

- QHSE.
- Laboratorium.
- Hasil pengukuran tidak konsisten.
- Melakukan kalibrasi.
- Pemula.
- Teknisi atau staf operasional.

Expected:

- Training kalibrasi atau GLP muncul.
- Advanced auditor tidak menjadi rekomendasi utama.

### 34.3 QHSE — Food Safety Audit

Input:

- QHSE.
- Food safety.
- Persiapan audit.
- Melakukan audit internal.
- Sudah memahami dasar.
- Tim quality.

Expected:

- Audit Internal HACCP atau training audit food safety muncul.
- Training non-food tidak muncul.

### 34.4 QHSE — Asset Management

Input:

- QHSE.
- Asset management.
- Pengelolaan aset belum optimal.
- Mengelola aset atau maintenance.
- Basic.
- Supervisor atau manager.

Expected:

- ISO 55001 atau training asset management muncul.

### 34.5 Rumah Sakit — Mutu

Input:

- Rumah sakit.
- Mutu dan keselamatan pasien.
- Indikator mutu belum optimal.
- Mengelola indikator mutu.
- Basic.
- Tim mutu.

Expected:

- PMKP atau manajemen indikator mutu muncul.

### 34.6 Rumah Sakit — Akreditasi

Input:

- Rumah sakit.
- Akreditasi.
- Persiapan akreditasi.
- Menyiapkan dokumen.
- Tim implementasi.
- Supervisor atau tim mutu.

Expected:

- Training akreditasi menjadi rekomendasi utama.
- Training pendukung terkait dokumen atau mutu dapat muncul.

### 34.7 Rumah Sakit — Keuangan

Input:

- Rumah sakit.
- Keuangan.
- Biaya pelayanan belum dihitung.
- Mengelola biaya.
- Manager.
- Manajemen.

Expected:

- Unit cost atau kendali mutu kendali biaya muncul.
- Training klinis tidak muncul.

### 34.8 Rumah Sakit — CSSD

Input:

- Rumah sakit.
- Unit khusus.
- Pengelolaan unit belum optimal.
- Mengelola unit.
- Basic.
- Petugas unit.

Expected:

- CSSD muncul untuk konteks CSSD.
- Program tidak relevan tidak muncul.

### 34.9 Low Confidence

Input:

- Banyak jawaban “Belum yakin”.

Expected:

- Confidence low.
- Maksimal satu atau dua training dasar.
- CTA konsultasi dominan.

### 34.10 No Result

Input:

- Kombinasi kebutuhan yang tidak didukung katalog.

Expected:

- Tidak memaksakan hasil.
- Tampilkan konsultasi.

### 34.11 AI Failure

Expected:

- Result tetap tampil.
- Template explanation digunakan.
- Event error tercatat.

---

## 36. Tahapan Implementasi

### Fase 1 — Audit Katalog

- Audit 115 training aktif.
- Tentukan training recommendation-ready.
- Validasi URL.
- Bersihkan judul yang tidak konsisten.
- Validasi kategori dan subkategori.
- Tandai training yang belum siap ditawarkan.

### Fase 2 — Taxonomy dan Tagging

- Finalisasi taxonomy.
- Tag seluruh training.
- Tentukan level peserta.
- Tentukan problem dan outcome.
- Tentukan learning path.
- Review oleh subject matter reviewer.

### Fase 3 — Rule Engine

- Buat question schema.
- Mapping jawaban ke tag.
- Implement weighted scoring.
- Implement penalty.
- Implement tie-breaker.
- Implement confidence.
- Buat automated tests.

### Fase 4 — Frontend

- Tambahkan menu header.
- Tambahkan homepage hook.
- Buat halaman recommender.
- Buat multi-step form.
- Buat progress indicator.
- Buat result page.
- Buat lead form.
- Integrasi WhatsApp.
- Mobile optimization.

### Fase 5 — Backend dan Admin

- Session storage.
- Recommendation API.
- Lead storage.
- Admin metadata.
- Threshold configuration.
- Event logging.
- Error monitoring.

### Fase 6 — AI Explanation

- Summary generation.
- Explanation generation.
- Free-text tagging.
- AI timeout.
- Fallback template.

### Fase 7 — Analytics dan Optimization

- Dashboard.
- Funnel analysis.
- Drop-off analysis.
- Tuning weight.
- A/B test copy.
- Hubungkan ke data sales.
- Evaluasi revenue attribution.

---

## 37. API Kontrak Awal

### 36.1 Start Session

```http
POST /api/recommender/session
```

Response:

```json
{
  "session_id": "uuid",
  "created_at": "2026-07-30T15:00:00Z"
}
```

### 36.2 Submit Answers

```http
POST /api/recommender/recommend
```

Request:

```json
{
  "session_id": "uuid",
  "answers": {
    "category": "qhse",
    "area": "laboratory",
    "problems": ["audit-preparation"],
    "outcome": "internal-audit",
    "experience": "basic",
    "participants": ["quality-team"],
    "urgency": "one-to-three-months",
    "notes": ""
  }
}
```

Response:

```json
{
  "session_id": "uuid",
  "confidence": "high",
  "summary": "Kebutuhan utama adalah persiapan audit laboratorium.",
  "recommendations": [
    {
      "rank": 1,
      "type": "primary",
      "training_id": "uuid",
      "title": "Training Audit Internal ISO 17025:2017",
      "url": "/training-audit-internal-iso-17025-2017",
      "score": 90,
      "label": "Sangat sesuai",
      "reasons": [
        "Sesuai dengan area laboratorium.",
        "Mendukung persiapan audit.",
        "Sesuai dengan target audit internal."
      ]
    }
  ]
}
```

### 36.3 Submit Lead

```http
POST /api/recommender/lead
```

Request:

```json
{
  "session_id": "uuid",
  "name": "Nama Pengguna",
  "whatsapp": "628xxxxxxxxxx",
  "email": null,
  "organization": null,
  "participant_count": null,
  "training_format": "in-house",
  "consent": true
}
```

---

## 38. Suggested Data Tables

### `recommender_questions`

- `id`
- `category`
- `question_key`
- `question_text`
- `type`
- `is_required`
- `max_selection`
- `order`
- `is_active`

### `recommender_options`

- `id`
- `question_id`
- `label`
- `value`
- `mapped_tags`
- `order`
- `is_active`

### `training_recommendation_metadata`

- `training_id`
- `area_tags`
- `problem_tags`
- `outcome_tags`
- `experience_levels`
- `participant_tags`
- `organization_types`
- `priority_score`
- `recommendation_ready`
- `last_reviewed_at`
- `reviewed_by`

### `training_relationships`

- `source_training_id`
- `target_training_id`
- `relationship_type`
- `priority`

Relationship type:

```text
prerequisite
related
next-level
```

### `recommender_sessions`

- `id`
- `entry_point`
- `source_page`
- `category`
- `answers`
- `confidence`
- `created_at`
- `completed_at`

### `recommender_results`

- `session_id`
- `training_id`
- `rank`
- `result_type`
- `score`
- `score_breakdown`
- `explanation`
- `created_at`

### `recommender_leads`

- `id`
- `session_id`
- `name`
- `whatsapp`
- `email`
- `organization`
- `participant_count`
- `training_format`
- `lead_score`
- `lead_class`
- `consent`
- `created_at`

---

## 39. Definition of Done

MVP selesai ketika:

- Seluruh entry point tersedia.
- Halaman dedicated berfungsi.
- Training recommendation pool telah ditag.
- Minimal 20–30 skenario pengujian menghasilkan output logis.
- Tidak ada rekomendasi lintas kategori yang salah.
- Tidak ada training nonaktif yang muncul.
- Form bekerja di mobile dan desktop.
- Hasil dapat dibuka kembali selama sesi.
- CTA detail bekerja.
- CTA WhatsApp bekerja.
- Lead tersimpan.
- Analytics tervalidasi.
- Fallback tanpa AI bekerja.
- Admin dapat mengubah metadata.
- Disclaimer dan consent tersedia.
- Hasil direview oleh pemilik katalog atau subject matter reviewer.
- Tim sales menerima konteks assessment lengkap.
- Error monitoring aktif.

---

## 40. Prioritas Produk

### Do Now

- Audit katalog.
- Taxonomy dan tagging.
- Rule-based scoring.
- Dedicated page.
- Homepage hook.
- Menu header.
- Result page.
- WhatsApp CTA.
- Analytics dasar.

### Validate First

- Threshold score.
- Bobot setiap faktor.
- Jumlah pertanyaan.
- Copy homepage.
- Lead scoring.
- AI explanation.
- Learning path.

### Do Later

- Simpan hasil permanen.
- Kirim hasil ke email.
- Dashboard rekomendasi lanjutan.
- Integrasi CRM penuh.
- Personalized content.
- Rekomendasi berdasarkan industri spesifik.
- Account dan history.
- PDF result report.

### Not Recommended untuk MVP

- Chatbot penuh.
- AI menentukan training tanpa rule engine.
- Meminta kontak sebelum hasil.
- Menghasilkan training baru otomatis.
- Menentukan harga dan jadwal otomatis.
- Membuat assessment terlalu panjang.
- Memasukkan budget sebagai faktor relevansi training.

---

## 41. Risiko dan Mitigasi

### Risiko 1 — Metadata Training Tidak Konsisten

**Dampak:** Rekomendasi salah.

**Mitigasi:**

- Training tidak masuk pool sebelum metadata lengkap.
- Review manusia.
- Automated validation.

### Risiko 2 — Form Terlalu Panjang

**Dampak:** Completion rate rendah.

**Mitigasi:**

- Maksimal 7–8 pertanyaan.
- Satu pertanyaan per layar.
- Analisis drop-off.

### Risiko 3 — Terlalu Banyak Jawaban “Belum Yakin”

**Dampak:** Hasil generik.

**Mitigasi:**

- Copy pertanyaan lebih jelas.
- Opsi bantuan.
- Confidence rendah.
- CTA konsultasi.

### Risiko 4 — AI Menghasilkan Klaim Salah

**Dampak:** Risiko reputasi.

**Mitigasi:**

- AI hanya explanation.
- Structured input.
- Template fallback.
- Tidak mengizinkan AI memilih training.

### Risiko 5 — Training Populer Selalu Muncul

**Dampak:** Rekomendasi tidak relevan.

**Mitigasi:**

- Popularitas bukan faktor utama.
- Problem dan outcome memiliki bobot terbesar.

### Risiko 6 — Sales Tidak Menggunakan Context Lead

**Dampak:** Nilai fitur berkurang.

**Mitigasi:**

- Kirim summary otomatis.
- Tampilkan urgency dan recommendation.
- Integrasi ke workflow sales.

---

## 42. Open Questions

Keputusan berikut masih perlu difinalisasi sebelum development:

1. Apakah result page memakai URL tetap atau session-based URL?
2. Apakah data session disimpan di browser, backend, atau keduanya?
3. Apakah lead langsung redirect WhatsApp atau menampilkan confirmation page?
4. Siapa reviewer metadata tiap kategori?
5. Apakah admin menggunakan CMS existing atau panel baru?
6. Apakah hasil dapat dibagikan tanpa login?
7. Berapa lama session disimpan?
8. Apakah email hasil masuk MVP atau fase berikutnya?
9. Apakah AI explanation diaktifkan sejak MVP atau setelah rule engine stabil?
10. Apakah recommendation result perlu disimpan untuk analisis jangka panjang?

---

## 43. Sumber Internal

Dokumen ini disusun berdasarkan:

- Website utama AQ: `https://www.akademiquality.com/`
- Katalog QHSE: `https://www.akademiquality.com/qhse`
- Katalog rumah sakit: `https://www.akademiquality.com/rumah-sakit`
- Dataset internal `table_training.csv`
- Brand color palette AQ
- Dokumentasi resmi dan halaman model DeepInfra
- Diskusi kebutuhan produk dengan founder AQ

Snapshot katalog saat penyusunan:

- Total training aktif: 115.
- QHSE: 65.
- Rumah sakit: 50.
- Status dataset: seluruh baris berstatus publish.

---

## 44. Keputusan Produk Utama

Implementasi MVP yang direkomendasikan:

```text
Homepage hook dan menu header
→ dedicated recommendation page
→ form bercabang
→ hard filter kategori
→ weighted scoring
→ relationship-based learning path
→ deterministic explanation
→ DeepInfra `Qwen/Qwen3.5-9B` dalam non-thinking mode
→ strict JSON schema
→ optional AI rewriting
→ result page
→ lead capture
→ WhatsApp conversion
→ analytics dan optimization
```

AI digunakan sebagai lapisan komunikasi, bukan sumber kebenaran katalog.

Prioritas paling penting sebelum coding adalah:

> Menyusun taxonomy, tagging, dan relationship untuk seluruh training yang akan masuk recommendation pool.

Tanpa metadata yang konsisten, UI yang bagus dan model AI yang mahal tetap menghasilkan rekomendasi yang tidak stabil.
