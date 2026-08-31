import Image from "next/image";
import {
  ArrowLeft,
  Home,
  Mail,
  MessageCircle,
  SearchX,
} from "lucide-react";

import { MobileMenu } from "@/components/MobileMenu";

const whatsappHref =
  "https://wa.me/6285139495190?text=Halo%20Akademi%20Quality%2C%20saya%20ingin%20mendiskusikan%20kebutuhan%20pelatihan.";

const navItems = [
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
];

const quickLinks = [
  {
    icon: Home,
    title: "Kembali ke Beranda",
    description: "Mulai lagi dari halaman utama Akademi Quality.",
    href: "/",
  },
  {
    icon: MessageCircle,
    title: "Hubungi Kami",
    description: "Tanya admin untuk program atau halaman yang Anda cari.",
    href: whatsappHref,
    external: true,
  },
];

function SocialMark({ label }: { label: string }) {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px] font-semibold uppercase leading-none">
      {label}
    </span>
  );
}

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-white text-black">
      <header className="sticky top-0 z-50 bg-black/70 px-3 py-3 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:px-11">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_18px_55px_rgba(0,0,0,0.28)] md:gap-6 md:px-5">
          <a href="/" aria-label="Akademi Quality home">
            <Image
              src="/logo.png"
              alt="Akademi Quality"
              width={198}
              height={72}
              className="h-[46px] w-[136px] shrink-0 object-contain md:h-[64px] md:w-[178px]"
            />
          </a>
          <nav className="hidden items-center gap-7 text-[15px] font-normal lg:flex">
            {navItems.map((item) => (
              <a
                className="rounded-full px-1 py-2 text-white/82 transition-colors hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center lg:flex">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              Konsultasi
              <MessageCircle size={16} />
            </a>
          </div>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#111111_50%,#32131f_100%)] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.09]" />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 md:grid-cols-[1fr_0.78fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-[0_14px_35px_rgba(255,255,255,0.12)]">
              <SearchX size={16} />
              Page Not Found
            </span>
            <h1 className="mt-5 max-w-[780px] text-[46px] font-semibold leading-[1.05] tracking-tight md:text-[78px]">
              Halaman yang Anda cari belum tersedia.
            </h1>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.75] text-white/76 md:text-[18px]">
              Link mungkin berubah, halaman belum dibuat, atau alamat yang
              diketik belum tepat. Silakan kembali ke halaman utama atau pilih
              menu yang tersedia.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                href="/"
              >
                <ArrowLeft size={18} />
                Ke Beranda
              </a>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Hubungi Kami
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="relative rounded-[34px] border border-white/12 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="rounded-[28px] bg-white p-7 text-black md:p-9">
              <p className="text-[90px] font-bold leading-none tracking-tight md:text-[130px]">
                404
              </p>
              <p className="mt-4 text-[18px] font-semibold leading-snug md:text-[22px]">
                Kami bantu arahkan Anda ke halaman yang tepat.
              </p>
              <div className="mt-7 grid gap-3">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      className="group rounded-[22px] border border-black/8 bg-[#f7f7f7] p-4 transition-colors hover:bg-black hover:text-white"
                      href={item.href}
                      key={item.title}
                      rel={item.external ? "noreferrer" : undefined}
                      target={item.external ? "_blank" : undefined}
                    >
                      <span className="flex items-center gap-3 text-[15px] font-bold">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white transition-colors group-hover:bg-white group-hover:text-black">
                          <Icon size={18} />
                        </span>
                        {item.title}
                      </span>
                      <span className="mt-2 block text-[13px] leading-relaxed text-[#5d5659] transition-colors group-hover:text-white/72">
                        {item.description}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 pt-12 text-white md:px-10">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Akademi Quality"
              width={198}
              height={72}
              className="h-[62px] w-[172px] object-contain md:h-[72px] md:w-[198px]"
            />
            <p className="mt-5 max-w-[360px] text-[15px] font-light leading-[1.8]">
              Improve your Human Quality melalui pelatihan ISO yang praktis,
              fleksibel, dan relevan untuk kebutuhan industri.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                aria-label="Instagram Akademi Quality"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black"
                href="https://www.instagram.com/akademiquality/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-[13px] font-bold leading-none">ig</span>
              </a>
              <a
                aria-label="Facebook Akademi Quality"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black"
                href="https://www.facebook.com/profile.php?id=61562779364975"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-[17px] font-bold leading-none">f</span>
              </a>
              <a
                aria-label="LinkedIn Akademi Quality"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black"
                href="https://www.linkedin.com/company/akademi-quality/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-[13px] font-bold leading-none">in</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[22px] font-medium">Page</h3>
            <ul className="mt-4 space-y-2 text-[15px] font-light">
              <li>
                <a href="/tentang">Tentang</a>
              </li>
              <li>
                <a href="/kontak">Kontak</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] font-medium">Training</h3>
            <div className="mt-4 grid gap-y-2 text-[15px] font-light">
              <a href="/qhse">ISO 9001</a>
              <a href="/qhse">ISO 14001</a>
              <a href="/qhse">ISO 27001</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1120px] border-t border-white/10 py-3 text-[12px]">
          Copyright &copy; 2026 - Akademi Quality
        </div>
      </footer>
    </main>
  );
}





