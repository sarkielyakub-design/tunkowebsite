"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
} from "lucide-react";

const countries = [
  {
    name: "🇹🇩 Chad",
    regions: [
      "Logone Occidental",
      "Kanem",
      "N'Djamena",
      "Batha",
      "Guéra",
    ],
  },
  {
    name: "🇳🇪 Niger",
    regions: [
      "Niamey",
      "Agadez",
      "Diffa",
      "Dosso",
      "Maradi",
      "Tahoua",
      "Tillabéri",
      "Zinder",
    ],
  },
  {
    name: "🇲🇱 Mali",
    regions: [
      "Bamako",
      "Kayes",
      "Koulikoro",
      "Sikasso",
      "Ségou",
      "Mopti",
    ],
  },
  {
    name: "🇨🇫 Central African Republic",
    regions: [
      "Bangui",
      "Bamingui-Bangoran",
      "Basse-Kotto",
      "Haute-Kotto",
      "Lobaye",
    ],
  },
];

export default function CountryAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Browse Our Branches
          </h2>

          <p className="mt-4 text-gray-600">
            Select a country to explore available Tunko branches.
          </p>
        </div>

        <div className="space-y-6">

          {countries.map((country, index) => (
            <div
              key={country.name}
              className="overflow-hidden rounded-2xl border shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between bg-gray-50 px-6 py-5 text-left"
              >
                <span className="text-xl font-bold">
                  {country.name}
                </span>

                {open === index ? (
                  <ChevronDown />
                ) : (
                  <ChevronRight />
                )}
              </button>

              {open === index && (
                <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">

                  {country.regions.map((region) => (
                    <div
                      key={region}
                      className="flex items-center gap-3 rounded-xl border p-4 hover:bg-blue-50 transition"
                    >
                      <MapPin
                        className="text-blue-600"
                        size={18}
                      />

                      <span>{region}</span>
                    </div>
                  ))}

                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}