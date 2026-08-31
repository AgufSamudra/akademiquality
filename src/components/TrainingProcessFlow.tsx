import {
  Award,
  BarChart3,
  ClipboardCheck,
  MessageCircle,
  Presentation,
} from "lucide-react";

const processSteps = [
  {
    title: "Registrasi / Konsultasi",
    description: "Konfirmasi kebutuhan, peserta, format, dan jadwal training bersama tim AQ.",
    icon: MessageCircle,
  },
  {
    title: "Pre-assessment",
    description: "Pemetaan pemahaman awal agar proses belajar lebih tepat sasaran.",
    icon: ClipboardCheck,
  },
  {
    title: "Training Delivery",
    description: "Penyampaian materi, diskusi, studi kasus, serta praktik bersama trainer.",
    icon: Presentation,
  },
  {
    title: "Post-assessment / Evaluasi",
    description: "Pengukuran hasil belajar dan evaluasi pelaksanaan setelah training.",
    icon: BarChart3,
  },
  {
    title: "Sertifikat & Report",
    description: "Peserta menerima sertifikat dan organisasi mendapatkan laporan training.",
    icon: Award,
  },
] as const;

export function TrainingProcessFlow() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(182,49,97,.1),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(0,0,0,.06),transparent_25%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#b63161]">
            Alur pelaksanaan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Proses training yang jelas dari awal hingga akhir.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-black/60">
            Setiap tahapan dirancang transparan agar peserta dan organisasi mengetahui proses serta hasil yang akan diterima.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl lg:mt-16 lg:max-w-none">
          <div className="absolute bottom-8 left-[10%] right-[10%] top-8 hidden h-px bg-[linear-gradient(90deg,transparent,#d58aa6_12%,#d58aa6_88%,transparent)] lg:block" />
          <div className="absolute bottom-10 left-[27px] top-10 w-px bg-[linear-gradient(180deg,transparent,#d58aa6_10%,#d58aa6_90%,transparent)] lg:hidden" />

          <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-3">
            {processSteps.map(({ title, description, icon: Icon }, index) => (
              <li className="group relative flex gap-5 lg:block" key={title}>
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,.2)] transition-transform duration-300 group-hover:-translate-y-1 lg:mx-auto lg:h-16 lg:w-16 lg:rounded-[20px]">
                  <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                </div>
                <article className="relative flex-1 rounded-[22px] border border-black/10 bg-white/90 p-5 shadow-[0_16px_45px_rgba(0,0,0,.07)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#b63161]/30 group-hover:shadow-[0_22px_55px_rgba(0,0,0,.1)] lg:mt-6 lg:min-h-[220px] lg:p-5">
                  <span className="text-[12px] font-bold uppercase tracking-[.16em] text-[#b63161]">
                    Tahap {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[18px] font-bold leading-snug tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/58">
                    {description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
