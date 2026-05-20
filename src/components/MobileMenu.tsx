"use client";

import { X } from "lucide-react";
import { useState } from "react";

type MobileMenuProps = {
  items: Array<string | { label: string; href: string }>;
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <span className="h-0.5 w-5 bg-white before:block before:h-0.5 before:w-5 before:-translate-y-2 before:bg-white after:block after:h-0.5 after:w-5 after:translate-y-1.5 after:bg-white" />
        )}
      </button>

      {isOpen ? (
        <div className="absolute left-3 right-3 top-[82px] overflow-hidden rounded-[26px] border border-white/10 bg-black/88 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:left-11 md:right-11">
          <nav className="grid gap-1">
            {items.map((item) => {
              const label = typeof item === "string" ? item : item.label;
              const href = typeof item === "string" ? "#" : item.href;

              return (
                <a
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-white/86 transition-colors hover:bg-white/10 hover:text-white"
                  href={href}
                  key={label}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
