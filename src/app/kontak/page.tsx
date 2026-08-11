import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

const whatsappHref = "https://wa.me/6285139495190?text=Halo%20Akademi%20Quality%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pelatihan.";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Konsultasikan kebutuhan pelatihan QHSE, Rumah Sakit, dan pengembangan kompetensi bersama Akademi Quality.",
  alternates: { canonical: "/kontak" },
  openGraph: { title: "Kontak | Akademi Quality", description: "Hubungi Akademi Quality untuk konsultasi kebutuhan pelatihan.", url: "/kontak", siteName: SITE_NAME, locale: "id_ID", type: "website", images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Kontak Akademi Quality" }] },
};

const contactChannels = [
  { icon: MessageCircle, title: "WhatsApp", value: "0851-3949-5190", note: "Chat langsung dengan Sarah untuk konsultasi cepat.", href: whatsappHref },
  { icon: Mail, title: "Email", value: "info@akademiquality.com", note: "Untuk penawaran, kerja sama, atau kebutuhan yang lebih detail.", href: "mailto:info@akademiquality.com" },
];

const steps = [
  ["Ceritakan kebutuhan Anda", "Sampaikan topik yang dicari, jumlah peserta, dan tujuan pelatihannya."],
  ["Kami bantu pilihkan", "Tim kami akan membantu menentukan format dan materi yang paling sesuai."],
  ["Siapkan langkah berikutnya", "Setelah cocok, kami lanjutkan dengan jadwal dan kebutuhan pelatihannya."],
];

export default function KontakPage() {
  return (
    <main className="min-h-dvh bg-[#f8f8f7] text-black">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#151115_52%,#2b111b_100%)] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_.82fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[.18em] text-[#f3a3c0]">Hubungi Akademi Quality</p>
            <h1 className="mt-5 max-w-[740px] text-[44px] font-bold leading-[1.06] tracking-tight md:text-[68px]">Mari temukan pelatihan yang tepat untuk tim Anda.</h1>
            <p className="mt-6 max-w-[650px] text-[17px] leading-[1.8] text-white/70 md:text-[18px]">Diskusikan kebutuhan QHSE, Rumah Sakit, audit, sertifikasi, maupun pengembangan kompetensi bersama tim Akademi Quality.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5" href={whatsappHref} rel="noreferrer" target="_blank">Konsultasi via WhatsApp <ArrowRight size={17} /></a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/18 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10" href="mailto:info@akademiquality.com">Kirim email <Mail size={17} /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/66"><span className="flex items-center gap-2"><CheckCircle2 className="text-[#f3a3c0]" size={17} /> Respon konsultatif</span><span className="flex items-center gap-2"><CheckCircle2 className="text-[#f3a3c0]" size={17} /> Online & offline</span></div>
          </div>

          <div className="rounded-[30px] border border-white/15 bg-white/[.08] p-3 shadow-[0_28px_80px_rgba(0,0,0,.3)] backdrop-blur-xl">
            <div className="rounded-[24px] bg-white p-7 text-black md:p-8">
              <div className="flex items-center justify-between gap-5"><div><p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#ae4169]">Konsultasi cepat</p><h2 className="mt-2 text-[30px] font-bold leading-tight">Kami siap membantu.</h2></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-white"><Phone size={20} /></span></div>
              <div className="mt-7 grid gap-3">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return <a className="group rounded-2xl border border-black/8 bg-[#f8f7f7] p-5 transition-colors hover:border-[#ae4169]/30 hover:bg-[#f8edf1]" href={channel.href} key={channel.title} rel={channel.href.startsWith("http") ? "noreferrer" : undefined} target={channel.href.startsWith("http") ? "_blank" : undefined}><div className="flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-sm font-bold"><Icon className="text-[#ae4169]" size={18} />{channel.title}</span><ArrowRight className="text-black/35 transition-transform group-hover:translate-x-1" size={17} /></div><p className="mt-3 text-[18px] font-bold">{channel.value}</p><p className="mt-1 text-sm leading-6 text-black/55">{channel.note}</p></a>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl"><p className="text-[13px] font-bold uppercase tracking-[.18em] text-[#ae4169]">Bagaimana prosesnya</p><h2 className="mt-4 text-[38px] font-bold leading-tight tracking-tight md:text-[54px]">Ceritakan dulu kebutuhan Anda.</h2><p className="mt-5 text-[16px] leading-7 text-black/60">Setiap tim punya kebutuhan yang berbeda. Karena itu, kami ingin memahami kebutuhan Anda terlebih dahulu sebelum menyarankan program pelatihan.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{steps.map(([title, description], index) => <article className="rounded-[26px] border border-black/8 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,.05)]" key={title}><span className="text-sm font-bold text-[#ae4169]">0{index + 1}</span><h3 className="mt-7 text-2xl font-bold tracking-tight">{title}</h3><p className="mt-3 text-[15px] leading-7 text-black/60">{description}</p></article>)}</div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[34px] bg-black text-white md:grid-cols-[1fr_.8fr] md:rounded-[42px]">
          <div className="p-8 md:p-12"><p className="text-[13px] font-bold uppercase tracking-[.18em] text-[#f3a3c0]">Siap berdiskusi</p><h2 className="mt-4 max-w-[600px] text-[36px] font-bold leading-tight tracking-tight md:text-[50px]">Satu percakapan bisa menjadi awal peningkatan kompetensi tim.</h2><p className="mt-5 max-w-[570px] text-[16px] leading-7 text-white/68">Hubungi kami untuk pelatihan publik, inhouse, online, atau offline di seluruh Indonesia.</p><a className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-black" href={whatsappHref} rel="noreferrer" target="_blank">Chat dengan tim AQ <MessageCircle size={17} /></a></div>
          <div className="relative min-h-[300px]"><Image src="/corporate-training.png" alt="Tim pelatihan Akademi Quality" fill className="object-cover" sizes="(min-width: 768px) 480px, 100vw" /><div className="absolute inset-0 bg-black/25" /><div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/16 bg-black/55 p-4 backdrop-blur-md"><p className="flex items-center gap-2 text-sm font-semibold"><MapPin size={17} /> Melayani kebutuhan pelatihan di seluruh Indonesia.</p><p className="mt-2 flex items-center gap-2 text-xs text-white/70"><Clock3 size={15} /> Online dan offline sesuai kebutuhan tim.</p></div></div>
        </div>
      </section>

      <SiteFooter />
      <a className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(37,211,102,.3)] transition-transform hover:-translate-y-0.5" href={whatsappHref} rel="noreferrer" target="_blank"><MessageCircle size={19} /> Konsultasi</a>
    </main>
  );
}
