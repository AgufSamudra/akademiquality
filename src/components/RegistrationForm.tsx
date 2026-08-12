"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  AtSign,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap,
  IdCard,
  Link as LinkIcon,
  LoaderCircle,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

type RegistrationType = "participant" | "trainer";
type FormStatus = "loading" | "ready" | "submitting" | "submitted" | "already-submitted" | "error";

const API_BASE_URL = "https://myquality.akademiquality.com";
const PARTICIPANT_STORAGE_PREFIX = "aq.participant-registration.v1";
const TRAINER_STORAGE_KEY = "aq.trainer-registration.v1";

type Field = {
  name: string;
  label: string;
  placeholder: string;
  icon: typeof UserRound;
  type?: "text" | "email" | "tel" | "date" | "url" | "file";
  required?: boolean;
  maxLength?: number;
};

const MONTH_NAMES = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const DAY_NAMES = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

function isoDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function BirthDatePicker({ name, required }: { name: string; required?: boolean }) {
  const today = new Date();
  const initialView = new Date(today.getFullYear() - 25, today.getMonth(), 1);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [viewYear, setViewYear] = useState(initialView.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialView.getMonth());
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const firstWeekday = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = Array.from({ length: firstWeekday + daysInMonth }, (_, index) => index < firstWeekday ? null : index - firstWeekday + 1);
  const currentYear = today.getFullYear();
  const oldestYear = currentYear - 100;
  const years = Array.from({ length: 101 }, (_, index) => currentYear - index);
  const selectedLabel = selected
    ? new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${selected}T00:00:00`))
    : "Pilih tanggal lahir";

  const moveMonth = (offset: number) => {
    const target = new Date(viewYear, viewMonth + offset, 1);
    if (target > new Date(currentYear, today.getMonth(), 1)) return;
    if (target < new Date(oldestYear, 0, 1)) return;
    setViewYear(target.getFullYear());
    setViewMonth(target.getMonth());
  };

  return <div ref={rootRef} className="relative">
    <input type="hidden" name={name} value={selected} />
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label={selected ? `Tanggal lahir ${selectedLabel}` : "Pilih tanggal lahir"}
      onClick={() => setOpen((current) => !current)}
      className={`flex w-full items-center gap-3 rounded-xl border bg-[#fcfcfb] px-4 py-3.5 text-left transition hover:border-[#c15379]/45 hover:bg-[#fffafb] focus:outline-none focus:ring-4 focus:ring-[#c15379]/10 ${open ? "border-[#c15379] ring-4 ring-[#c15379]/10" : "border-black/[0.10]"}`}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#f7e8ee] text-[#b84a72]"><CalendarDays size={17} /></span>
      <span className={`min-w-0 flex-1 text-sm ${selected ? "font-semibold text-[#302b2d]" : "text-black/40"}`}>{selectedLabel}</span>
      <span className="rounded-full bg-[#f5edf0] px-2.5 py-1 text-[11px] font-semibold text-[#a54567]">Pilih</span>
    </button>

    {open ? <div role="dialog" aria-label="Kalender tanggal lahir" className="absolute left-0 top-[calc(100%+10px)] z-50 w-full min-w-[300px] overflow-hidden rounded-2xl border border-[#ead6dd] bg-white p-4 shadow-[0_24px_70px_rgba(75,38,53,.20)] sm:w-[340px]">
      <div className="mb-4 flex items-center justify-between gap-2">
        <button type="button" onClick={() => moveMonth(-1)} disabled={viewYear === oldestYear && viewMonth === 0} aria-label="Bulan sebelumnya" className="grid h-9 w-9 place-items-center rounded-xl border border-black/8 text-black/55 transition hover:border-[#d98bab] hover:bg-[#fff2f7] hover:text-[#a63e65] disabled:cursor-not-allowed disabled:opacity-25"><ChevronLeft size={18} /></button>
        <div className="flex items-center gap-2">
          <select aria-label="Pilih bulan" value={viewMonth} onChange={(event) => setViewMonth(Number(event.target.value))} className="cursor-pointer rounded-lg border-0 bg-[#f8f4f5] px-2 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#c15379]/25">
            {MONTH_NAMES.map((month, index) => <option value={index} disabled={viewYear === currentYear && index > today.getMonth()} key={month}>{month}</option>)}
          </select>
          <select aria-label="Pilih tahun" value={viewYear} onChange={(event) => { const year = Number(event.target.value); setViewYear(year); if (year === currentYear && viewMonth > today.getMonth()) setViewMonth(today.getMonth()); }} className="cursor-pointer rounded-lg border-0 bg-[#f8f4f5] px-2 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#c15379]/25">
            {years.map((year) => <option value={year} key={year}>{year}</option>)}
          </select>
        </div>
        <button type="button" onClick={() => moveMonth(1)} disabled={viewYear === currentYear && viewMonth === today.getMonth()} aria-label="Bulan berikutnya" className="grid h-9 w-9 place-items-center rounded-xl border border-black/8 text-black/55 transition hover:border-[#d98bab] hover:bg-[#fff2f7] hover:text-[#a63e65] disabled:cursor-not-allowed disabled:opacity-25"><ChevronRight size={18} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DAY_NAMES.map((day) => <span className="py-1 text-[10px] font-bold uppercase tracking-wide text-black/35" key={day}>{day}</span>)}
        {cells.map((day, index) => {
          if (!day) return <span key={`empty-${index}`} />;
          const value = isoDate(viewYear, viewMonth, day);
          const date = new Date(viewYear, viewMonth, day);
          const isFuture = date > new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isSelected = value === selected;
          const isToday = value === isoDate(today.getFullYear(), today.getMonth(), today.getDate());
          return <button type="button" disabled={isFuture} onClick={() => { setSelected(value); setOpen(false); }} className={`grid aspect-square place-items-center rounded-xl text-xs font-semibold transition ${isSelected ? "bg-[#b84a72] text-white shadow-[0_7px_16px_rgba(184,74,114,.28)]" : isToday ? "bg-[#f8e9ef] text-[#a43c62]" : "text-[#403a3c] hover:bg-[#fff0f5] hover:text-[#a43c62]"} disabled:cursor-not-allowed disabled:text-black/20 disabled:hover:bg-transparent`} key={value}>{day}</button>;
        })}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3">
        <span className="text-[11px] text-black/40">Tanggal tidak dapat diubah setelah dikirim</span>
        {selected ? <button type="button" onClick={() => setSelected("")} className="text-xs font-semibold text-[#aa4168] hover:underline">Hapus</button> : null}
      </div>
    </div> : null}
    {required && !selected ? <span className="sr-only">Tanggal lahir wajib dipilih</span> : null}
  </div>;
}

const participantFields: Field[] = [
  { name: "name", label: "Nama lengkap", placeholder: "Masukkan nama lengkap", icon: UserRound, required: true },
  { name: "name_cert", label: "Nama untuk sertifikat", placeholder: "Contoh: Nama Anda, S.T.", icon: IdCard, required: true, maxLength: 25 },
  { name: "email", label: "Email aktif", placeholder: "nama@email.com", icon: Mail, type: "email", required: true },
  { name: "phone", label: "Nomor WhatsApp", placeholder: "08xx xxxx xxxx", icon: Phone, type: "tel", required: true },
  { name: "birth_date", label: "Tanggal lahir", placeholder: "", icon: CalendarDays, type: "date", required: true },
  { name: "domicile_city", label: "Kota domisili", placeholder: "Contoh: Bandung", icon: MapPin, required: true },
  { name: "domicile_regency", label: "Kabupaten / Kota", placeholder: "Contoh: Kota Bandung", icon: MapPin, required: true },
  { name: "domicile_province", label: "Provinsi", placeholder: "Contoh: Jawa Barat", icon: MapPin, required: true },
];

const trainerFields: Field[] = [
  { name: "name", label: "Nama lengkap", placeholder: "Masukkan nama lengkap", icon: UserRound, required: true },
  { name: "name_with_title", label: "Nama dengan gelar", placeholder: "Contoh: Nama Anda, S.T.", icon: IdCard, required: true, maxLength: 35 },
  { name: "email", label: "Email aktif", placeholder: "nama@email.com", icon: Mail, type: "email", required: true },
  { name: "phone", label: "Nomor WhatsApp", placeholder: "08xx xxxx xxxx", icon: Phone, type: "tel", required: true },
  { name: "birth_date", label: "Tanggal lahir", placeholder: "", icon: CalendarDays, type: "date", required: true },
  { name: "domicile_city", label: "Kota domisili", placeholder: "Contoh: Jakarta Selatan", icon: MapPin, required: true },
  { name: "domicile_regency", label: "Kabupaten / Kota", placeholder: "Contoh: Kota Administrasi Jakarta Selatan", icon: MapPin, required: true },
  { name: "domicile_province", label: "Provinsi", placeholder: "Contoh: DKI Jakarta", icon: MapPin, required: true },
  { name: "signature", label: "Tanda tangan", placeholder: "", icon: FileText, type: "file" },
  { name: "instagram", label: "Instagram", placeholder: "username (tanpa @)", icon: AtSign },
  { name: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/...", icon: LinkIcon, type: "url" },
];

function errorMessage(payload: unknown, fallback: string) {
  return typeof payload === "object" && payload !== null && "message" in payload && typeof payload.message === "string"
    ? payload.message
    : fallback;
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(new Error("File tanda tangan tidak dapat dibaca."));
    reader.onerror = () => reject(new Error("File tanda tangan tidak dapat dibaca."));
    reader.readAsDataURL(file);
  });
}

export function RegistrationForm({ type, salesId }: { type: RegistrationType; salesId?: string }) {
  const isTrainer = type === "trainer";
  const [status, setStatus] = useState<FormStatus>("loading");
  const [message, setMessage] = useState("");
  const [characterCounts, setCharacterCounts] = useState<Record<string, number>>({});
  const fields = isTrainer ? trainerFields : participantFields;
  const storageKey = salesId ? `${PARTICIPANT_STORAGE_PREFIX}.${salesId}` : "";

  useEffect(() => {
    if (isTrainer) {
      setStatus(window.localStorage.getItem(TRAINER_STORAGE_KEY) ? "already-submitted" : "ready");
      return;
    }
    if (!salesId) return;

    if (window.localStorage.getItem(storageKey)) {
      setStatus("already-submitted");
      return;
    }

    const activeSalesId = salesId;
    const controller = new AbortController();
    async function validateSales() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/registrations/participants?sales_id=${encodeURIComponent(activeSalesId)}`, { signal: controller.signal });
        if (!response.ok) {
          const payload: unknown = await response.json().catch(() => null);
          throw new Error(errorMessage(payload, "Tautan pendaftaran ini tidak valid atau sudah tidak aktif."));
        }
        setStatus("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setMessage(error instanceof Error ? error.message : "Tidak dapat memvalidasi tautan pendaftaran.");
          setStatus("error");
        }
      }
    }
    void validateSales();
    return () => controller.abort();
  }, [isTrainer, salesId, storageKey]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries()) as Record<string, string | File>;
    if (typeof payload.birth_date !== "string" || !payload.birth_date) {
      setMessage("Silakan pilih tanggal lahir terlebih dahulu.");
      return;
    }
    if (!isTrainer && typeof payload.name_cert === "string" && payload.name_cert.length > 25) {
      setMessage("Nama untuk sertifikat maksimal 25 karakter.");
      return;
    }
    if (!isTrainer) {
      if (!salesId || window.localStorage.getItem(storageKey)) {
        setStatus("already-submitted");
        return;
      }
      Object.assign(payload, { sales_id: salesId });
    } else if (window.localStorage.getItem(TRAINER_STORAGE_KEY)) {
      setStatus("already-submitted");
      return;
    }

    const signature = payload.signature;
    if (signature instanceof File) {
      if (signature.size === 0) {
        delete payload.signature;
      } else {
        if (signature.size > 2 * 1024 * 1024) {
          setMessage("Ukuran gambar tanda tangan maksimal 2 MB.");
          return;
        }
        try {
          payload.signature = await fileToDataUrl(signature);
        } catch (error) {
          setMessage(error instanceof Error ? error.message : "File tanda tangan tidak dapat dibaca.");
          return;
        }
      }
    }

    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/registrations/${isTrainer ? "trainers" : "participants"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: unknown = await response.json().catch(() => null);
      if (!response.ok) throw new Error(errorMessage(data, "Pendaftaran belum dapat dikirim. Silakan coba lagi."));

      window.localStorage.setItem(isTrainer ? TRAINER_STORAGE_KEY : storageKey, JSON.stringify({ submittedAt: new Date().toISOString() }));
      setStatus("submitted");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Pendaftaran belum dapat dikirim. Silakan coba lagi.");
      setStatus("ready");
    }
  }

  const title = isTrainer ? "Bergabung sebagai trainer" : "Daftarkan diri Anda";
  const description = isTrainer
    ? "Lengkapi profil Anda. Tim Akademi Quality akan meninjau pendaftaran Anda terlebih dahulu."
    : "Lengkapi data berikut untuk mendaftar pada pelatihan yang terhubung dengan tautan ini.";

  return (
    <main className="min-h-screen bg-[#f6f5f2] px-4 py-5 text-[#262423] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_24px_80px_rgba(47,38,32,0.10)] lg:grid lg:grid-cols-[0.88fr_1.12fr] lg:rounded-[36px]">
        <aside className="relative overflow-hidden bg-[#1e1d1d] px-6 py-7 text-white sm:px-9 sm:py-10 lg:min-h-[780px] lg:px-11 lg:py-12">
          <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-[#d25a84]/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#e7b366]/15 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
          <div className="relative flex h-full flex-col">
            <Link href="/" className="inline-flex w-fit items-center" aria-label="Akademi Quality">
              <Image src="/logo.png" alt="Akademi Quality" width={260} height={94} className="h-auto w-[220px] object-contain sm:w-[250px]" priority />
            </Link>
            <div className="mt-12 max-w-sm lg:mt-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                {isTrainer ? <BriefcaseBusiness size={14} /> : <GraduationCap size={14} />}{isTrainer ? "Pendaftaran Trainer" : "Pendaftaran Peserta"}
              </span>
              <h1 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-tight sm:text-[42px]">{title}.</h1><p className="mt-5 text-[15px] leading-7 text-white/70">{description}</p>
            </div>
            <div className="mt-10 space-y-4 lg:mt-auto">
              {[[Check, "Proses pendaftaran mudah"], [BadgeCheck, isTrainer ? "Profil ditinjau oleh tim kami" : "Tautan sales telah diverifikasi"], [LockKeyhole, "Data Anda dijaga dengan aman"]].map(([Icon, text]) => {
                const ItemIcon = Icon as typeof Check;
                return <div key={text as string} className="flex items-center gap-3 text-sm text-white/75"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[#f2a9c0]"><ItemIcon size={15} /></span><span>{text as string}</span></div>;
              })}
            </div>
          </div>
        </aside>

        <section className="px-6 py-8 sm:px-10 sm:py-11 lg:px-12 lg:py-12">
          <div className="flex items-start justify-between gap-4 border-b border-black/[0.07] pb-6"><div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#b84a72]">Form pendaftaran</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-[#201f1e]">Informasi dasar</h2></div>{!isTrainer && status === "ready" ? <span className="rounded-full bg-[#edf7f0] px-3 py-1.5 text-xs font-semibold text-[#27804d]">Tautan terverifikasi</span> : null}</div>

          {status === "loading" ? <StatusPanel icon={<LoaderCircle className="animate-spin" />} title="Memeriksa tautan pendaftaran" text="Mohon tunggu sebentar." /> : null}
          {status === "already-submitted" ? <StatusPanel icon={<BadgeCheck />} title="Pendaftaran sudah tercatat" text={isTrainer ? "Form pendaftaran trainer ini sudah pernah dikirim dari browser ini." : "Form untuk tautan sales ini sudah pernah dikirim dari browser ini. Setiap sales ID hanya dapat digunakan satu kali."} /> : null}
          {status === "submitted" ? <StatusPanel icon={<Check />} title="Pendaftaran berhasil dikirim" text="Terima kasih. Tim Akademi Quality akan memproses data Anda." success /> : null}
          {status === "error" ? <StatusPanel icon={<AlertCircle />} title="Form belum dapat dibuka" text={message} error /> : null}

          {(status === "ready" || status === "submitting") ? <form className="mt-7" onSubmit={submit}>
            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">{fields.map(({ name, label, placeholder, icon: Icon, type: inputType = "text", required, maxLength }) => {
              const usesCertificateHelper = name === "name_cert" || name === "name_with_title";
              const isBirthDate = inputType === "date";
              const helperId = `${name}-helper`;
              return <label key={name} className={name === "name" || usesCertificateHelper ? "sm:col-span-2" : ""}>
                <span className="mb-2 block">
                  <span className="block text-sm font-semibold text-[#393634]">{label}{required ? <span className="ml-1 text-[#c15379]">*</span> : null}</span>
                  {usesCertificateHelper ? <span id={helperId} className="mt-1.5 flex items-center justify-between gap-3 text-xs leading-5 text-[#80656e]"><span className="flex items-center gap-2"><BadgeCheck size={14} className="shrink-0 text-[#bd4e74]" /><span>Ditulis persis seperti yang akan dicetak pada sertifikat</span></span><span className="shrink-0 font-semibold tabular-nums text-[#ae4169]">{characterCounts[name] ?? 0}/{maxLength}</span></span> : null}
                </span>
                {isBirthDate ? <BirthDatePicker name={name} required={required} /> : <span className="flex min-w-0 items-center gap-3 rounded-xl border border-black/[0.10] bg-[#fcfcfb] px-4 py-3.5 transition hover:border-black/20 focus-within:border-[#c15379] focus-within:ring-4 focus-within:ring-[#c15379]/10"><Icon size={18} className="shrink-0 text-black/35" />{inputType === "file" ? <input name={name} type="file" accept="image/png,image/jpeg,image/webp" className="min-w-0 w-full bg-transparent text-sm text-black/60 file:mr-3 file:rounded-lg file:border-0 file:bg-[#f5e9ed] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#aa4066] hover:file:bg-[#efdae1]" /> : <input name={name} required={required} type={inputType} placeholder={placeholder} maxLength={maxLength} aria-describedby={usesCertificateHelper ? helperId : undefined} onChange={maxLength ? (event) => setCharacterCounts((current) => ({ ...current, [name]: event.target.value.length })) : undefined} className="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-black/35" />}</span>}
                {isBirthDate ? <span id={helperId} className="mt-2 flex items-center gap-1.5 text-xs text-black/45"><CalendarDays size={13} /><span>Klik seluruh kolom untuk membuka kalender</span></span> : null}
                {inputType === "file" ? <span className="mt-2 block text-xs text-black/45">Unggah PNG, JPG, atau WEBP. Maksimal 2 MB.</span> : null}
              </label>;
            })}</div>
            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-[#f8f6f5] p-4 text-[13px] leading-5 text-black/55"><input required type="checkbox" className="mt-0.5 h-4 w-4 accent-[#bd4e74]" /><span>Saya menyetujui pengumpulan data ini untuk kebutuhan proses pendaftaran Akademi Quality.</span></label>
            {message ? <p role="alert" className="mt-4 rounded-xl bg-[#fff0f2] px-4 py-3 text-sm text-[#b63857]">{message}</p> : null}
            <button disabled={status === "submitting"} type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#262323] px-5 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(35,30,28,.18)] transition hover:-translate-y-0.5 hover:bg-[#b84a72] disabled:cursor-wait disabled:opacity-70">{status === "submitting" ? <><LoaderCircle size={18} className="animate-spin" />Mengirim...</> : <>Kirim pendaftaran <ArrowRight size={18} /></>}</button>
          </form> : null}
        </section>
      </div>
    </main>
  );
}

function StatusPanel({ icon, title, text, success, error }: { icon: React.ReactNode; title: string; text: string; success?: boolean; error?: boolean }) {
  const color = error ? "bg-[#fff0f2] text-[#b63857]" : success ? "bg-[#e8f6ed] text-[#2c8a54]" : "bg-[#f6edf0] text-[#b84a72]";
  return <div className="flex min-h-[440px] flex-col items-center justify-center text-center"><span className={`grid h-16 w-16 place-items-center rounded-full ${color}`}>{icon}</span><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 max-w-sm text-[15px] leading-7 text-black/55">{text}</p></div>;
}
