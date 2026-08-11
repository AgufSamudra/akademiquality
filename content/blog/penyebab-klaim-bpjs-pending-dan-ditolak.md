---
title: "Penyebab Klaim BPJS Rumah Sakit Pending dan Ditolak serta Cara Mengatasinya"
description: "Analisis penyebab klaim BPJS pending atau ditolak dari administrasi, dokumentasi klinis, coding, verifikasi, sistem, serta langkah perbaikannya."
date: "2026-07-21"
category: "Rumah Sakit"
subcategory: "Keuangan"
tags: ["Klaim BPJS", "Casemix", "Coding", "Denial Management"]
---
Klaim pending atau ditolak bukan hanya masalah tim casemix. Masalah biasanya terbentuk sejak registrasi, eligibilitas, pelayanan, dokumentasi dokter, coding, verifikasi, sampai pengiriman data. Jika rumah sakit hanya mengejar perbaikan berkas di ujung proses, klaim yang sama akan bermasalah kembali.

Sistem payer di berbagai negara menunjukkan pola serupa: klaim membutuhkan dokumentasi yang mendukung layanan, coding yang tepat, pemenuhan aturan, dan data elektronik yang lolos validasi. CMS, misalnya, menyediakan panduan pencegahan denial dan reason codes untuk membantu provider memahami sumber masalah. Prinsipnya relevan sebagai benchmark, meskipun aturan BPJS tetap harus mengikuti kebijakan nasional yang berlaku.

## Bedakan klaim ditolak, pending, dan dispute

Definisi operasional perlu disepakati rumah sakit:
- Rejected atau gagal masuk: data tidak lolos validasi teknis atau administratif awal.
- Pending: klaim membutuhkan klarifikasi, dokumen, atau verifikasi tambahan.
- Denied atau tidak dibayar: klaim dinilai tidak memenuhi ketentuan pembayaran.
- Dispute: terdapat perbedaan interpretasi atau keputusan yang memerlukan proses penyelesaian.

Klasifikasi yang jelas membantu dashboard dan tindakan. Jangan mencampur seluruh masalah menjadi satu angka “klaim bermasalah”.

## Penyebab administratif

- Data identitas tidak konsisten.
- Eligibilitas atau surat tidak sesuai.
- Tanggal pelayanan, admission, discharge, atau rujukan tidak sinkron.
- Dokumen wajib tidak lengkap.
- Persetujuan atau otorisasi tidak tersedia.
- Kesalahan kelas, jenis pelayanan, atau episode.
- Duplikasi klaim.
- Pengiriman melewati batas waktu.

Perbaikan:
- Validasi data pada titik registrasi.
- Checklist otomatis sebelum pasien dilayani dan sebelum klaim dikirim.
- Master data tunggal.
- Notifikasi dokumen kurang.
- Daily exception report.

## Penyebab dokumentasi klinis

- Diagnosis tidak spesifik.
- Diagnosis utama tidak jelas.
- Komorbiditas tidak didukung catatan.
- Prosedur tidak terdokumentasi lengkap.
- Resume medis tidak konsisten dengan progress note.
- Indikasi rawat inap atau tindakan tidak terlihat.
- Tanggal dan tanda tangan tidak lengkap.
- Klarifikasi dilakukan terlambat setelah dokter sulit dihubungi.

Perbaikan:
- Standar dokumentasi per kelompok kasus.
- Template RME yang membantu tanpa memaksa copy-paste.
- Concurrent review untuk kasus berisiko.
- Query dokter yang netral dan terdokumentasi.
- Feedback berkala berbasis data per unit.

## Penyebab coding

- Diagnosis utama salah dipilih.
- Kode terlalu umum ketika informasi spesifik tersedia.
- Diagnosis sekunder tidak memiliki dukungan klinis.
- Prosedur salah atau tidak lengkap.
- Aturan sequencing tidak diikuti.
- Koder menggunakan asumsi tanpa query.
- Perubahan kode tidak memiliki audit trail.

Perbaikan:
- Pedoman coding resmi dan versi terkendali.
- Peer review.
- Audit akurasi rutin.
- Library kasus dan keputusan coding.
- Pembaruan kompetensi.
- Pemisahan target produktivitas dan target akurasi agar koder tidak terdorong terburu-buru.

## Penyebab klinis dan utilisasi

- Pelayanan tidak memenuhi kriteria atau indikasi yang dipersyaratkan.
- Lama rawat atau penggunaan sumber daya sangat berbeda tanpa penjelasan.
- Readmission atau episode berulang membutuhkan review.
- Clinical pathway tidak diikuti tanpa alasan klinis.
- Transfer atau rujukan tidak terdokumentasi.

Perbaikan:
- Utilization review.
- Clinical pathway dan kriteria deviasi.
- Case review multidisiplin.
- Discharge planning sejak awal.
- Review kasus high cost dan outlier.

## Penyebab sistem dan integrasi data

- Data HIS, RME, laboratorium, farmasi, dan e-claim tidak sinkron.
- Mapping kode atau master data salah.
- Gangguan interface.
- Perubahan data tidak tercatat.
- User mengisi ulang data secara manual.
- Hak akses tidak sesuai.

Perbaikan:
- Data reconciliation.
- Audit trail.
- Uji integrasi setelah perubahan sistem.
- Monitoring interface dan error queue.
- Data owner serta SLA penanganan insiden.

## Cara melakukan root cause analysis klaim

Gunakan data minimal tiga sampai enam bulan. Kelompokkan berdasarkan:
- Reason code atau alasan.
- Unit pelayanan.
- Dokter atau kelompok klinis, dengan pendekatan pembinaan bukan menyalahkan.
- Koder atau verifikator.
- Jenis kasus.
- Nilai finansial.
- Frekuensi berulang.
- Waktu dalam siklus klaim.

Prioritaskan masalah dengan kombinasi frekuensi tinggi, nilai besar, risiko kepatuhan, dan mudah diperbaiki. Lima penyebab utama biasanya memberi dampak lebih besar daripada mencoba menyelesaikan semua kategori sekaligus.

## Workflow denial management

- Terima dan klasifikasikan alasan.
- Tentukan owner.
- Verifikasi data serta bukti.
- Putuskan koreksi, klarifikasi, appeal, atau write-off sesuai kebijakan.
- Catat nilai dan waktu penyelesaian.
- Analisis penyebab akar.
- Terapkan pencegahan di titik awal proses.
- Verifikasi apakah masalah menurun pada periode berikutnya.

SLA perlu berbeda menurut nilai dan batas waktu. Kasus bernilai tinggi atau mendekati deadline harus memiliki eskalasi otomatis.

## Dashboard yang berguna

- Clean claim rate.
- First-pass acceptance rate.
- Pending rate dan denial rate.
- Nilai klaim tertahan.
- Days in accounts receivable atau lead time pembayaran.
- Top reason codes.
- Persentase kasus yang berhasil dikoreksi atau diselesaikan.
- Waktu respons query dokter.
- Akurasi coding.
- Repeat error rate.
- Nilai lost revenue yang tidak dapat dipulihkan.

## Program perbaikan 30 hari

Minggu 1:
- Tetapkan definisi dan baseline.
- Ambil 100–200 sampel klaim bermasalah.
- Kelompokkan penyebab dan nilai.

Minggu 2:
- Petakan alur proses.
- Tentukan tiga akar masalah prioritas.
- Rancang checklist atau kontrol.

Minggu 3:
- Uji kontrol pada satu unit.
- Berikan feedback dokter, koder, dan registrasi.
- Pantau exception harian.

Minggu 4:
- Bandingkan hasil.
- Perbaiki workflow.
- Scale-up bila efektif.

## Pelatihan terkait dari Akademi Quality

LINK: Training Casemix Manajemen Pelayanan Klaim BPJS Kesehatan|/trainings/training-casemix-manajemen-pelayanan-klaim-bpjs-kesehatan
LINK: Training Manajemen Rekam Medis dan Informasi Kesehatan|/trainings/training-manajemen-rekam-medis-dan-informasi-kesehatan
LINK: Training Clinical Pathway|/trainings/training-clinical-pathway
LINK: Training Analisis Unit Cost Rumah Sakit|/trainings/training-analisis-unit-cost-rumah-sakit-berbasis-tarif-ina-cbgs

## Reference

LINK: CMS Medicare Provider Compliance Tips|https://www.cms.gov/training-education/medicare-learning-networkr-mln/compliance/medicare-provider-compliance-tips
LINK: CMS Review Reason Codes and Statements|https://www.cms.gov/data-research/monitoring-programs/medicare-fee-service-compliance-programs/review-reason-codes-and-statements
LINK: WHO Diagnosis-Related Groups Q&A Guide|https://www.who.int/publications/i/item/WHO-UHC-HGF-Guidance-20.10

Tujuan denial management bukan sekadar mengejar pembayaran yang tertahan. Sistem yang baik memindahkan kontrol ke sumber masalah sehingga dokumentasi, pelayanan, coding, dan data menjadi benar sejak awal.
