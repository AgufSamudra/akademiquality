---
title: "Implementasi Rekam Medis Elektronik dan SATUSEHAT: Checklist Kesiapan Rumah Sakit"
description: "Checklist implementasi RME dan SATUSEHAT: governance, workflow, data, FHIR, terminologi, keamanan, testing, downtime, kompetensi, dan KPI."
date: "2026-07-21"
category: "Rumah Sakit"
subcategory: "Manajemen"
tags: ["RME", "SATUSEHAT", "FHIR", "Rekam Medis"]
---
Implementasi rekam medis elektronik atau RME tidak selesai ketika rumah sakit berhasil membeli aplikasi. Sistem baru dianggap berhasil bila mendukung pelayanan, menghasilkan data yang lengkap, menjaga keamanan, mengurangi duplikasi, dan dapat bertukar informasi sesuai standar interoperabilitas SATUSEHAT.

SATUSEHAT menggunakan HL7 FHIR sebagai standar pertukaran data. FHIR mendefinisikan resources dan API untuk pertukaran informasi kesehatan secara elektronik. Tantangan terbesar bukan hanya membuat koneksi teknis, tetapi memastikan data klinis, identitas, terminologi, workflow, dan governance rumah sakit cukup konsisten untuk dipertukarkan.

## Bentuk tim implementasi lintas fungsi

Tim minimal mencakup:
- Sponsor direksi.
- Klinisi dan perawat dari unit prioritas.
- Rekam medis dan informasi kesehatan.
- IT, integrasi, infrastruktur, serta keamanan informasi.
- Mutu dan keselamatan pasien.
- Farmasi, laboratorium, radiologi, dan unit penunjang.
- Casemix atau klaim.
- Legal, compliance, dan data protection sesuai kebutuhan.
- Vendor aplikasi.

Hindari keputusan workflow hanya oleh vendor dan IT. Sistem harus mengikuti keselamatan pasien serta kebutuhan klinis, tetapi proses lama yang buruk juga tidak boleh didigitalisasi mentah-mentah.

## Pemetaan workflow sebelum konfigurasi

Petakan alur aktual dan target untuk:
- Registrasi dan identitas pasien.
- Appointment dan admission.
- Asesmen awal serta asesmen ulang.
- Order, hasil, dan tindak lanjut.
- Medication management.
- Tindakan dan prosedur.
- Konsultasi dan transfer.
- Discharge planning serta resume medis.
- Coding dan klaim.
- Correction atau amendment rekam medis.

Untuk setiap tahap, tentukan pengguna, data wajib, decision point, notifikasi, risiko, dan output. Kurangi double entry dan pastikan tanggung jawab tidak hilang saat proses berubah.

## Kualitas master data dan identitas

Integrasi gagal bila master data tidak konsisten. Fokus pada:
- Identitas pasien dan mekanisme mencegah duplikasi.
- Identitas tenaga kesehatan.
- Unit, lokasi, dan fasilitas.
- Daftar obat, laboratorium, prosedur, diagnosis, dan layanan.
- Mapping terminologi dan kode.
- Versioning master data.
- Data owner serta proses perubahan.

Lakukan data profiling untuk menemukan nilai kosong, format salah, duplikasi, kode tidak valid, dan penggunaan free text berlebihan.

## Memahami FHIR secara praktis

FHIR memodelkan informasi menjadi resources seperti Patient, Encounter, Observation, Condition, Medication, dan lainnya. Rumah sakit tidak perlu menjadikan seluruh staf sebagai developer, tetapi tim proses perlu memahami bahwa:
- Data harus memiliki makna yang konsisten.
- Satu field lokal belum tentu langsung cocok dengan resource FHIR.
- Terminologi dan kode berperan penting.
- Relasi antarresource perlu benar.
- Profil implementasi dapat menentukan elemen wajib dan aturan tambahan.
- Error teknis dapat berasal dari masalah data atau workflow, bukan hanya koneksi API.

Buat data mapping yang mendokumentasikan sumber data, transformasi, terminologi, validasi, tujuan, dan owner.

## Keamanan dan privasi

RME menyimpan data sensitif dan menjadi sistem kritis. Kontrol minimal:
- Role-based access.
- Least privilege.
- Multi-factor authentication untuk akses berisiko.
- Audit log dan review aktivitas mencurigakan.
- Enkripsi saat transit dan penyimpanan sesuai arsitektur.
- Backup serta restore test.
- Patch dan vulnerability management.
- Segregasi lingkungan development, test, dan production.
- Incident response.
- Manajemen vendor dan akses remote.
- Kebijakan penggunaan perangkat, akun, dan sharing data.

Akses darurat atau break-glass harus tercatat dan ditinjau. Jangan menggunakan akun bersama karena merusak akuntabilitas.

## Patient safety dalam desain RME

Risiko digital dapat menyebabkan salah pasien, salah obat, hasil tidak ditindaklanjuti, alarm overload, copy-paste, atau informasi penting tersembunyi.

Uji skenario:
- Pasien dengan nama mirip.
- Alergi dan interaksi obat.
- Order yang dibatalkan atau diubah.
- Hasil kritis.
- Downtime.
- Transfer antarunit.
- Perubahan dokter penanggung jawab.
- Discharge dan follow-up.
- Koreksi dokumentasi.

Clinical decision support harus relevan. Terlalu banyak alert dapat menyebabkan alert fatigue dan diabaikan pengguna.

## Testing sebelum go-live

Lakukan beberapa lapisan pengujian:
- Unit dan integration testing.
- Data mapping serta terminology validation.
- End-to-end workflow testing.
- User acceptance testing.
- Performance dan load testing.
- Security testing.
- Interface failure dan retry testing.
- Downtime serta recovery simulation.
- Parallel run untuk proses kritis bila dibutuhkan.

Gunakan skenario nyata yang sudah dianonimkan. Catat expected result, actual result, severity, owner, dan status retest.

## Downtime dan business continuity

Rumah sakit harus tetap aman saat sistem atau jaringan tidak tersedia. Siapkan:
- Kriteria aktivasi downtime.
- Form manual terkendali.
- Mekanisme identifikasi pasien.
- Akses informasi kritis.
- Proses obat, order, hasil, dan tindakan.
- Komunikasi status.
- Rekonsiliasi data setelah sistem pulih.
- Prioritas recovery.
- Simulasi berkala.

Downtime plan yang hanya berupa dokumen tanpa simulasi tidak cukup.

## Pelatihan pengguna

Pisahkan pelatihan berdasarkan peran dan workflow. Gunakan sandbox, simulasi kasus, dan evaluasi kompetensi. Super user di unit perlu dilatih lebih dalam untuk mendukung go-live.

Materi minimal:
- Login dan keamanan.
- Identifikasi pasien.
- Dokumentasi serta order.
- Hasil dan notifikasi.
- Koreksi atau amendment.
- Downtime.
- Pelaporan insiden.
- Larangan copy-paste yang berisiko.

## KPI implementasi

- Kelengkapan data wajib.
- Duplicate patient rate.
- Persentase transaksi berhasil dikirim.
- Error integrasi per kategori.
- Response time sistem.
- Uptime dan durasi downtime.
- Waktu penyelesaian hasil kritis.
- Persentase resume selesai tepat waktu.
- User adoption.
- Jumlah insiden keselamatan terkait sistem.
- Temuan akses tidak sesuai.
- Waktu penyelesaian tiket prioritas.

## Pelatihan terkait dari Akademi Quality

LINK: Training Manajemen Rekam Medis dan Informasi Kesehatan|/trainings/training-manajemen-rekam-medis-dan-informasi-kesehatan
LINK: Training Rekam Medis Rumah Sakit|/trainings/training-rekam-medis-rumah-sakit
LINK: Training ISO 27001 Sistem Manajemen Keamanan Informasi|/trainings/training-iso-270012022-sistem-manajemen-keamanan-informasi
LINK: Training Casemix Manajemen Pelayanan Klaim BPJS|/trainings/training-casemix-manajemen-pelayanan-klaim-bpjs-kesehatan

## Reference

LINK: SATUSEHAT Platform – FHIR|https://satusehat.kemkes.go.id/platform/docs/id/fhir/
LINK: HL7 FHIR Overview|https://www.hl7.org/fhir/overview.html
LINK: WHO Global Strategy on Digital Health|https://www.who.int/health-topics/digital-health
LINK: ISO/IEC 27001 Information Security Management Systems|https://www.iso.org/standard/27001

Implementasi RME adalah perubahan cara kerja. Ukur keberhasilan dari keselamatan, kualitas data, kemudahan pelayanan, dan kemampuan menghasilkan informasi yang dapat dipercaya—bukan hanya jumlah modul yang sudah aktif.
