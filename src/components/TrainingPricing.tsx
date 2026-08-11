import { ArrowRight, CheckCircle2 } from "lucide-react";

const whatsappHref = "https://wa.me/6285139495190?text=Halo%20Akademi%20Quality%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20pelatihan.";

const pricingPlans = [
  ["Online Training", "3JT", "5JT", "/ Peserta", ["E-Sertifikat", "Softcopy Materi", "Rekaman Kelas", "Konsultasi Paska Training", "Terhubung dengan Komunitas"], false],
  ["InHouse Training Online", "12JT", "16JT", "/ 15 Peserta", ["E-Sertifikat", "Softcopy Materi", "Rekaman Kelas", "Konsultasi Paska Training", "Terhubung dengan Komunitas"], false],
  ["Offline Training", "4JT", "8JT", "/ Peserta", ["E-Sertifikat", "Softcopy Materi", "Training Kit", "Dilaksanakan di Hotel", "Coffee Break dan Lunch", "Konsultasi Paska Training", "Terhubung dengan Komunitas"], true],
  ["InHouse Training Offline", "18JT", "22JT", "/ 15 Peserta", ["E-Sertifikat", "Softcopy Materi", "Training Kit", "Dilaksanakan di Hotel atau Lokasi Perusahaan", "Coffee Break dan Lunch", "Konsultasi Paska Training", "Terhubung dengan Komunitas"], false],
] as const;

export function TrainingPricing() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f7] px-5 py-20 md:px-10 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,rgba(200,77,124,0.08),transparent_25%),radial-gradient(circle_at_90%_84%,rgba(0,0,0,0.06),transparent_28%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center"><p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#ae4169]">Pilihan Paket</p><h2 className="mt-4 text-[38px] font-bold leading-tight tracking-tight text-black md:text-[54px]">Pilih format pelatihan yang paling sesuai.</h2><p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-black/60">Tersedia pilihan kelas individu maupun paket untuk tim. Hubungi kami untuk penyesuaian kebutuhan QHSE dan Rumah Sakit.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map(([title, price, originalPrice, unit, features, popular]) => (
            <article className={popular ? "relative flex min-h-[500px] flex-col overflow-hidden rounded-[26px] border border-black bg-[linear-gradient(145deg,#080808_0%,#281018_100%)] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1" : "relative flex min-h-[500px] flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white/75 p-6 text-black shadow-[0_18px_55px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"} key={title}>
              {popular ? <span className="absolute right-4 top-4 rounded-full bg-[#e75686] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Pilihan Populer</span> : null}
              <p className="max-w-[170px] text-[20px] font-bold leading-tight">{title}</p>
              <div className="mt-8 border-t border-current/10 pt-6"><div className="flex items-end gap-2"><p className="text-[42px] font-bold leading-none tracking-tight">{price}</p><p className={popular ? "pb-1 text-[16px] font-semibold leading-none text-white/55 line-through" : "pb-1 text-[16px] font-semibold leading-none text-black/40 line-through"}>{originalPrice}</p></div><p className={popular ? "mt-2 min-h-[36px] text-[13px] leading-snug text-white/68" : "mt-2 min-h-[36px] text-[13px] leading-snug text-black/55"}>{unit}</p></div>
              <ul className={popular ? "mt-6 grid gap-3 text-[14px] leading-snug text-white/78" : "mt-6 grid gap-3 text-[14px] leading-snug text-black/65"}>{features.map((feature) => <li className="flex gap-2.5" key={feature}><CheckCircle2 className={popular ? "shrink-0 text-[#f3a3c0]" : "shrink-0 text-[#c84d7c]"} size={17} />{feature}</li>)}</ul>
              <a className={popular ? "mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-black transition-transform hover:-translate-y-0.5" : "mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"} href={whatsappHref} rel="noreferrer" target="_blank">Konsultasikan Paket <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
