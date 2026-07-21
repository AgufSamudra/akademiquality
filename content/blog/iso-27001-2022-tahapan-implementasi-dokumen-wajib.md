---
title: "ISO 27001:2022 untuk Perusahaan: Tahapan Implementasi dan Dokumen yang Disiapkan"
description: "Panduan implementasi ISO/IEC 27001:2022: scope, aset, risk assessment, Statement of Applicability, kontrol, audit, incident response, dan KPI."
date: "2026-07-21"
category: "QHSE"
subcategory: "ISO"
tags: ["ISO 27001:2022", "ISMS", "Keamanan Informasi"]
---
ISO/IEC 27001:2022 menetapkan persyaratan untuk membangun, menerapkan, memelihara, dan meningkatkan Information Security Management System atau ISMS. Standar ini dapat digunakan perusahaan dari berbagai ukuran dan sektor untuk mengelola risiko terhadap kerahasiaan, integritas, dan ketersediaan informasi.

Implementasi bukan proyek IT semata. Risiko informasi berasal dari manusia, proses, vendor, fasilitas, aplikasi, cloud, perangkat, kontrak, dan keputusan bisnis. Karena itu, governance serta keterlibatan pemilik risiko menjadi faktor utama.

## Tahap 1: Menetapkan konteks dan ruang lingkup

Ruang lingkup perlu menjelaskan:
- Unit, lokasi, proses, produk, dan layanan.
- Sistem, aplikasi, serta infrastruktur.
- Informasi dan pihak terkait.
- Interface serta dependensi di luar scope.
- Alasan pengecualian batas organisasi bila ada.

Scope yang terlalu luas dapat membebani implementasi. Scope terlalu sempit dapat tidak mewakili layanan yang ingin dilindungi atau menyesatkan pelanggan. Mulai dari layanan bernilai tinggi bila organisasi perlu pendekatan bertahap.

## Tahap 2: Governance dan peran

Tetapkan:
- Sponsor top management.
- ISMS manager atau koordinator.
- Risk owner.
- Asset owner.
- Control owner.
- Incident response team.
- Internal auditor independen.
- Mekanisme pelaporan dan keputusan.

Top management perlu menyetujui risk appetite, prioritas, sumber daya, dan penerimaan residual risk.

## Tahap 3: Inventaris informasi dan aset

Identifikasi informasi penting:
- Data pelanggan.
- Data pegawai.
- Informasi finansial.
- Intellectual property.
- Kontrak.
- Source code.
- Data operasional.
- Backup.
- Log.

Petakan supporting assets seperti aplikasi, server, cloud service, endpoint, jaringan, personel, lokasi, dan vendor. Tentukan owner, klasifikasi, lokasi, retention, akses, dan dependensi.

## Tahap 4: Risk assessment

Metode risk assessment perlu konsisten dan menghasilkan prioritas. Langkah umum:
- Tetapkan kriteria dampak dan kemungkinan.
- Identifikasi skenario ancaman dan kerentanan.
- Nilai risiko sebelum atau setelah kontrol sesuai metode.
- Identifikasi kontrol yang ada.
- Tentukan treatment.
- Nilai residual risk.
- Dapatkan approval risk owner.

Gunakan skenario spesifik, misalnya “akun admin cloud dikompromikan melalui phishing dan digunakan untuk menyalin data pelanggan”, bukan hanya “risiko hacking”.

## Tahap 5: Risk treatment dan Statement of Applicability

Risk treatment dapat berupa:
- Mengurangi.
- Menghindari.
- Membagi atau mentransfer.
- Menerima dengan otorisasi.

Statement of Applicability atau SoA mendokumentasikan kontrol Annex A yang relevan, alasan inclusion atau exclusion, serta status implementasi. SoA bukan checklist kosmetik. Hubungkan kontrol dengan risiko, kewajiban, dan proses.

## Area kontrol penting

Kontrol ISO/IEC 27001:2022 dikelompokkan dalam tema organisasi, manusia, fisik, dan teknologi. Implementasi praktis dapat mencakup:
- Kebijakan dan tanggung jawab.
- Segregation of duties.
- Threat intelligence.
- Supplier security.
- Incident management.
- Business continuity.
- Screening dan offboarding.
- Awareness serta phishing simulation.
- Physical access.
- Secure configuration.
- Identity and access management.
- Logging dan monitoring.
- Vulnerability management.
- Backup.
- Network security.
- Secure development.
- Data masking, deletion, dan leakage prevention sesuai risiko.

## Dokumen yang perlu disiapkan

Kebutuhan dokumentasi bergantung pada scope dan kompleksitas, tetapi biasanya meliputi:
- Scope ISMS.
- Kebijakan keamanan informasi.
- Metode dan hasil risk assessment.
- Risk treatment plan.
- Statement of Applicability.
- Tujuan keamanan informasi.
- Peran dan tanggung jawab.
- Asset inventory dan klasifikasi.
- Access control.
- Supplier security.
- Incident response.
- Backup dan recovery.
- Business continuity atau ICT readiness sesuai konteks.
- Secure development dan change management bila relevan.
- Monitoring, audit log, dan vulnerability management.
- Training serta competence records.
- Internal audit.
- Management review.
- Corrective action.

Dokumen sebaiknya berbentuk sederhana dan terintegrasi dengan workflow. Ticketing system, IAM, SIEM, atau platform GRC dapat menjadi sumber bukti bila dikendalikan.

## Incident response

Rencana perlu mencakup:
- Kriteria incident.
- Kanal pelaporan.
- Triage dan severity.
- Roles serta escalation.
- Containment.
- Evidence preservation.
- Eradication dan recovery.
- Komunikasi.
- Kewajiban notifikasi.
- Lessons learned.

Lakukan tabletop exercise untuk ransomware, data leakage, compromised account, vendor breach, dan outage layanan kritis.

## Supplier dan cloud risk

Pastikan kontrak dan monitoring mencakup:
- Security requirements.
- Lokasi serta kepemilikan data.
- Subprocessor.
- Incident notification.
- Backup dan recovery.
- Access control.
- Audit rights atau assurance report.
- Exit plan dan data deletion.
- SLA.

Sertifikat vendor dapat membantu assurance tetapi tidak menggantikan penilaian risiko layanan yang digunakan organisasi.

## Internal audit dan management review

Audit internal harus menguji efektivitas proses dan kontrol. Management review perlu membahas:
- Perubahan konteks.
- Status tindakan.
- Kinerja tujuan.
- Insiden dan tren.
- Hasil audit.
- Supplier issue.
- Risiko dan residual risk.
- Kebutuhan sumber daya.
- Peluang perbaikan.

## Menghubungkan ISO 27001 dengan NIST CSF 2.0

NIST CSF 2.0 dapat digunakan sebagai referensi untuk mengorganisasi outcome cybersecurity melalui fungsi Govern, Identify, Protect, Detect, Respond, dan Recover. ISO 27001 memberi persyaratan sistem manajemen yang dapat diaudit, sedangkan NIST CSF membantu komunikasi dan profiling risiko. Keduanya dapat dipetakan, tetapi organisasi tidak perlu membuat dua sistem terpisah.

## KPI ISMS

- Persentase critical assets dengan owner dan klasifikasi.
- Waktu penutupan vulnerability berdasarkan severity.
- MFA coverage.
- Privileged access review completion.
- Backup success dan restore test.
- Mean time to detect dan respond.
- Phishing reporting serta failure rate.
- Supplier assessment coverage.
- Incident recurrence.
- Corrective action overdue.
- Pencapaian tujuan keamanan informasi.

## Pelatihan terkait dari Akademi Quality

LINK: Training ISO 27001:2022 Sistem Manajemen Keamanan Informasi|/trainings/training-iso-270012022-sistem-manajemen-keamanan-informasi
LINK: Training Internal Audit ISO 27001:2022|/trainings/training-internal-audit-iso-270012022
LINK: Training Document Control Management System|/trainings/training-document-control-management-system

## Reference

LINK: ISO/IEC 27001 Information Security Management Systems|https://www.iso.org/standard/27001
LINK: ISO/IEC 27000 Family|https://www.iso.org/standard/iso-iec-27000-family
LINK: NIST Cybersecurity Framework 2.0|https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20
LINK: ISO/IEC 27002 Information Security Controls|https://www.iso.org/standard/75652.html

ISMS yang efektif membantu bisnis mengambil risiko secara sadar dan menjaga layanan tetap dapat dipercaya. Hindari pendekatan checklist; mulai dari informasi kritis dan skenario risiko nyata.
