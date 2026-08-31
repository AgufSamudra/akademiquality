import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileHeart,
  HardHat,
  HeartPulse,
  Leaf,
  LockKeyhole,
  ShieldCheck,
  ShieldPlus,
  Stethoscope,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type FeaturedTraining = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const qhseTrainings: FeaturedTraining[] = [
  {
    title: "ISO 14001:2026",
    description: "Sistem Manajemen Lingkungan",
    href: "/trainings/training-iso-140012015",
    icon: Leaf,
  },
  {
    title: "ISO 9001:2015 + Transition Readiness",
    description: "Persiapan menuju ISO 9001:2026",
    href: "/trainings/training-iso-90012015",
    icon: BadgeCheck,
  },
  {
    title: "ISO 45001:2018",
    description: "Sistem Manajemen Keselamatan & Kesehatan Kerja",
    href: "/trainings/training-iso-450012018",
    icon: HardHat,
  },
  {
    title: "HIRADC",
    description: "Hazard Identification & Risk Assessment",
    href: "/trainings/training-hiradc-hazard-identification-risk-assessment",
    icon: TriangleAlert,
  },
  {
    title: "ISO 27001:2022",
    description: "Sistem Manajemen Keamanan Informasi",
    href: "/trainings/training-iso-270012022-sistem-manajemen-keamanan-informasi",
    icon: LockKeyhole,
  },
];

const hospitalTrainings: FeaturedTraining[] = [
  {
    title: "PMKP",
    description: "Peningkatan Mutu dan Keselamatan Pasien",
    href: "/trainings/training-pmkp-peningkatan-mutu-dan-keselamatan-pasien",
    icon: HeartPulse,
  },
  {
    title: "Bimtek & Pendampingan Akreditasi",
    description: "Persiapan akreditasi rumah sakit yang terarah",
    href: "/trainings/bimtek-dan-pendampingan-akreditasi-rumah-sakit",
    icon: ClipboardCheck,
  },
  {
    title: "Manajemen Rekam Medis & RME",
    description: "Informasi kesehatan dan rekam medis elektronik",
    href: "/trainings/training-manajemen-rekam-medis-dan-informasi-kesehatan",
    icon: FileHeart,
  },
  {
    title: "Manajemen Risiko Rumah Sakit",
    description: "Risk management untuk pelayanan yang lebih aman",
    href: "/trainings/training-manajemen-risiko-rumah-sakit",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Pencegahan & Pengendalian Infeksi",
    description: "Program PPI untuk fasilitas pelayanan kesehatan",
    href: "/trainings/training-pencegahan-dan-pengendalian-infeksi-ppi",
    icon: ShieldPlus,
  },
];

function TrainingLink({
  training,
  index,
  dark = false,
}: {
  training: FeaturedTraining;
  index: number;
  dark?: boolean;
}) {
  const Icon = training.icon;

  return (
    <Link
      aria-label={`Lihat detail ${training.title}`}
      className={`group relative flex min-h-[132px] items-start gap-4 overflow-hidden rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 md:p-6 ${
        dark
          ? "border-white/12 bg-white/[0.065] shadow-[inset_0_1px_0_rgba(255,255,255,.08)] hover:border-[#f1a6c1]/40 hover:bg-white/[0.1]"
          : "border-black/[0.07] bg-white/80 shadow-[0_15px_45px_rgba(31,15,21,.07)] hover:border-[#c84d7c]/25 hover:bg-white hover:shadow-[0_22px_55px_rgba(31,15,21,.11)]"
      }`}
      href={training.href}
    >
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
          dark ? "bg-[#f1a6c1] text-[#231018]" : "bg-black text-white"
        }`}
      >
        <Icon aria-hidden="true" size={20} strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-[17px] font-bold leading-[1.35] tracking-tight md:text-[18px] ${dark ? "text-white" : "text-black"}`}>
          {training.title}
        </span>
        <span className={`mt-2 block text-[13px] leading-[1.55] ${dark ? "text-white/55" : "text-black/52"}`}>
          {training.description}
        </span>
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${dark ? "text-[#f1a6c1]" : "text-[#b63161]"}`}
        size={19}
      />
      <span className={`absolute bottom-3 right-5 text-[10px] font-bold tracking-[.18em] ${dark ? "text-white/18" : "text-black/15"}`}>
        {String(index + 1).padStart(2, "0")}
      </span>
    </Link>
  );
}

export function FeaturedTrainingSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f6f4f3] px-5 py-18 md:px-10 md:py-26">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-[#d75586]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white">
                <ShieldCheck aria-hidden="true" size={21} />
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[.2em] text-[#ae4169]">Training Unggulan 01</span>
            </div>
            <h2 className="mt-7 max-w-[460px] text-[42px] font-bold leading-[1.02] tracking-[-.04em] text-black md:text-[62px]">
              QHSE untuk standar yang lebih tinggi.
            </h2>
            <p className="mt-6 max-w-[430px] text-[15px] leading-[1.8] text-black/58 md:text-[16px]">
              Bangun sistem mutu, lingkungan, K3, dan keamanan informasi yang siap diterapkan—bukan hanya dipahami.
            </p>
            <Link className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-black transition-colors hover:text-[#ae4169]" href="/qhse">
              Jelajahi semua training QHSE <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {qhseTrainings.map((training, index) => (
              <TrainingLink index={index} key={training.title} training={training} />
            ))}
            <div className="relative hidden min-h-[132px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#090909_0%,#271019_100%)] p-6 text-white sm:flex sm:flex-col sm:justify-between">
              <Stethoscope className="absolute -bottom-7 -right-5 text-white/[.06]" size={112} strokeWidth={1.2} />
              <span className="text-[12px] font-bold uppercase tracking-[.17em] text-[#f1a6c1]">InHouse tersedia</span>
              <span className="relative max-w-[220px] text-[15px] font-semibold leading-relaxed">Materi dapat disesuaikan dengan proses dan risiko organisasi Anda.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111010_52%,#291019_100%)] px-5 py-18 text-white md:px-10 md:py-26">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#c84d7c]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.22fr_.78fr] lg:gap-14">
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
            {hospitalTrainings.map((training, index) => (
              <TrainingLink dark index={index} key={training.title} training={training} />
            ))}
            <div className="relative hidden min-h-[132px] overflow-hidden rounded-[24px] border border-[#f1a6c1]/20 bg-[#f1a6c1] p-6 text-[#281019] sm:flex sm:flex-col sm:justify-between">
              <HeartPulse className="absolute -bottom-6 -right-4 text-[#281019]/[.08]" size={108} strokeWidth={1.25} />
              <span className="text-[12px] font-bold uppercase tracking-[.17em]">Pendampingan tim</span>
              <span className="relative max-w-[220px] text-[15px] font-semibold leading-relaxed">Dari pemahaman standar hingga kesiapan implementasi di fasilitas Anda.</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f1a6c1] text-[#281019]">
                <Stethoscope aria-hidden="true" size={21} />
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[.2em] text-[#f1a6c1]">Training Unggulan 02</span>
            </div>
            <h2 className="mt-7 max-w-[480px] text-[42px] font-bold leading-[1.02] tracking-[-.04em] text-white md:text-[62px]">
              Mutu layanan rumah sakit dimulai dari tim.
            </h2>
            <p className="mt-6 max-w-[430px] text-[15px] leading-[1.8] text-white/58 md:text-[16px]">
              Perkuat mutu, keselamatan pasien, akreditasi, rekam medis, dan pengendalian risiko bersama praktisi berpengalaman.
            </p>
            <Link className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-white transition-colors hover:text-[#f1a6c1]" href="/rumah-sakit">
              Jelajahi semua training Rumah Sakit <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
