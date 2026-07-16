"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
  {
    code: "fr",
    name: "Français",
    flag: "🇫🇷",
  },
  {
    code: "ar",
    name: "العربية",
    flag: "🇸🇦",
  },
];

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden lg:block">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:border-emerald-500 hover:shadow-md"
      >
        <Globe className="h-4 w-4 text-emerald-600" />

        <span>{selected.flag}</span>

        <span>{selected.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelected(language);
                setOpen(false);

                // TODO:
                // Connect Laravel API
                // POST /api/v1/language
              }}
              className="flex w-full items-center justify-between px-5 py-3 transition hover:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  {language.flag}
                </span>

                <span className="font-medium">
                  {language.name}
                </span>
              </div>

              {selected.code === language.code && (
                <Check className="h-4 w-4 text-emerald-600" />
              )}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}