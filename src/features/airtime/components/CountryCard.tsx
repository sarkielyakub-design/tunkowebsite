"use client";

import { Globe2, CheckCircle2 } from "lucide-react";

interface Country {
  id: number;
  name: string;
  iso2: string;
}

interface Props {
  countries: Country[];
  value: Country | null;
  onChange: (country: Country) => void;
}

export default function CountryCard({
  countries,
  value,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Select Country
      </h2>

      <div className="space-y-3">

        {countries.map((country) => {

          const active =
            value?.id === country.id;

          return (

            <button
              key={country.id}
              onClick={() => onChange(country)}
              className={`flex w-full items-center justify-between rounded-2xl border p-4 transition ${
                active
                  ? "border-blue-600 bg-blue-50"
                  : "hover:bg-slate-50"
              }`}
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3">

                  <Globe2 className="h-5 w-5 text-blue-600" />

                </div>

                <div className="text-left">

                  <h3 className="font-semibold">
                    {country.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {country.iso2}
                  </p>

                </div>

              </div>

              {active && (
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              )}

            </button>

          );

        })}

      </div>

    </div>
  );
}