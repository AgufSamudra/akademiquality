import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/MobileMenu";

const navItems = [
  { label: "QHSE", href: "/qhse" },
  { label: "Rumah Sakit", href: "/rumah-sakit" },
  { label: "Tentang", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black px-3 py-3 text-white md:px-11">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-2 md:gap-6 md:px-5">
        <Link className="shrink-0" href="/" aria-label="Akademi Quality home">
          <Image src="/logo.png" alt="Akademi Quality" width={198} height={72} className="h-[46px] w-[136px] object-contain md:h-[64px] md:w-[178px]" />
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] font-normal lg:flex">
          {navItems.map((item) => <Link className="rounded-full px-1 py-2 text-white/82 transition-colors hover:text-white" href={item.href} key={item.label}>{item.label}</Link>)}
        </nav>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,#050505_0%,#121212_52%,#251016_100%)] px-5 pt-16 text-white md:px-10 md:pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
      <div className="relative mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/logo.png" alt="Akademi Quality" width={198} height={72} className="h-[62px] w-[172px] object-contain md:h-[72px] md:w-[198px]" />
          <p className="mt-5 max-w-[360px] text-[15px] leading-[1.8] text-white/65">Mengembangkan kompetensi tim melalui pelatihan yang praktis, relevan, dan siap diterapkan di dunia kerja.</p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Instagram Akademi Quality" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black" href="https://www.instagram.com/akademiquality/" rel="noreferrer" target="_blank"><span className="text-[13px] font-bold leading-none">ig</span></a>
            <a aria-label="Facebook Akademi Quality" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black" href="https://www.facebook.com/profile.php?id=61562779364975" rel="noreferrer" target="_blank"><span className="text-[17px] font-bold leading-none">f</span></a>
            <a aria-label="LinkedIn Akademi Quality" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white hover:text-black" href="https://www.linkedin.com/company/akademi-quality/" rel="noreferrer" target="_blank"><span className="text-[13px] font-bold leading-none">in</span></a>
          </div>
        </div>
        <div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Navigasi</p><ul className="mt-5 space-y-3 text-[15px] text-white/70"><li><Link className="transition-colors hover:text-white" href="/">Beranda</Link></li><li><Link className="transition-colors hover:text-white" href="/tentang">Tentang Kami</Link></li><li><Link className="transition-colors hover:text-white" href="/kontak">Hubungi Kami</Link></li></ul></div>
        <div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#f1a6c1]">Program</p><div className="mt-5 grid gap-y-3 text-[15px] text-white/70"><Link className="transition-colors hover:text-white" href="/#program">Public Training</Link><Link className="transition-colors hover:text-white" href="/#program">Online Training</Link><Link className="transition-colors hover:text-white" href="/#program">InHouse Training</Link><Link className="transition-colors hover:text-white" href="/#program">Sertifikasi</Link></div></div>
      </div>
      <div className="relative mx-auto mt-14 flex max-w-[1200px] flex-col gap-2 border-t border-white/10 py-5 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between"><span>Copyright &copy; 2026 Akademi Quality</span><span>Provider Training SDM untuk QHSE dan Rumah Sakit</span></div>
    </footer>
  );
}
