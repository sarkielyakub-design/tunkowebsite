"use client";

import { CheckCircle2, Globe2 } from "lucide-react";

interface Country {
  id: number;
  name: string;
  code: string;
  currency: string;
  flag: string;
}

interface Props {
  countries: Country[];
  value?: number;
  loading?: boolean;
  onChange: (country: Country) => void;
}

export default function CountryCard({
  countries,
  value,
  loading = false,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-blue-100 p-3">

          <Globe2 className="h-6 w-6 text-blue-600" />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            Select Country
          </h2>

          <p className="text-sm text-slate-500">
            Choose the country where the mobile number is registered.
          </p>

        </div>

      </div>

      {loading ? (

        <div className="space-y-3">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="h-20 animate-pulse rounded-2xl bg-slate-100"
            />

          ))}

        </div>

      ) : (

        <div className="grid gap-4">

          {countries.map((country) => {

            const active = value === country.id;

            return (

              <button
                key={country.id}
                type="button"
                onClick={() => onChange(country)}
                className={`flex items-center justify-between rounded-2xl border p-5 transition-all

                ${
                  active
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                }`}
              >

                <div className="flex items-center gap-4">

                  <div className="text-4xl">

                    {country.flag}

                  </div>

                  <div className="text-left">

                    <h3 className="font-bold">

                      {country.name}

                    </h3>

                    <p className="text-sm text-slate-500">

                      {country.currency}

                    </p>

                  </div>

                </div>

                {active && (

                  <CheckCircle2 className="h-7 w-7 text-blue-600" />

                )}

              </button>

            );

          })}

        </div>

      )}

    </div>
  );
}