"use client";

import { Check, Globe } from "lucide-react";
import { useI18n, type Locale } from "@/src/i18n/I18nProvider";

const languages: { code: Locale; name: string; native: string }[] = [
  { code: "en", name: "English", native: "English" },
  { code: "fr", name: "French", native: "Français" },
  { code: "ar", name: "Arabic", native: "العربية" },
];

export default function AdminLanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="relative group">
      <button
        type="button"
        aria-label="Language"
        className="flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100"
      >
        <Globe size={20} />
        <span className="hidden 2xl:inline text-sm font-medium uppercase">{locale}</span>
      </button>
      <div className="invisible absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border bg-white p-1 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => setLocale(language.code)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50"
          >
            <span>{language.native}</span>
            {locale === language.code && <Check className="h-4 w-4 text-blue-600" />}
          </button>
        ))}
      </div>
    </div>
  );
}
