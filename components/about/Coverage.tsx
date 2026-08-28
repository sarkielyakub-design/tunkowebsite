"use client";

import { Globe2, ArrowRight } from "lucide-react";

const countries = [
  {
    flag: "🇹🇩",
    name: "Chad",
    capital: "N'Djamena",
    status: "Headquarters",
  },
  {
    flag: "🇨🇲",
    name: "Cameroon",
    capital: "Yaoundé",
    status: "Active",
  },
  {
    flag: "🇬🇦",
    name: "Gabon",
    capital: "Libreville",
    status: "Active",
  },
  {
    flag: "🇬🇶",
    name: "Equatorial Guinea",
    capital: "Malabo",
    status: "Active",
  },
  {
    flag: "🇨🇫",
    name: "Central African Republic",
    capital: "Bangui",
    status: "Active",
  },
  {
    flag: "🇨🇬",
    name: "Republic of the Congo",
    capital: "Brazzaville",
    status: "Active",
  },
];

export default function Coverage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Globe2 className="h-4 w-4" />
            Coverage
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Serving the CEMAC Region
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Tunko Money Transfer proudly serves customers across the
            Central African Economic and Monetary Community (CEMAC),
            providing secure, fast, and reliable international money
            transfer services.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {countries.map((country) => (
            <div
              key={country.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="text-6xl">
                {country.flag}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {country.name}
              </h3>

              <p className="mt-2 text-slate-500">
                {country.capital}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    country.status === "Headquarters"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {country.status}
                </span>

                <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />

              </div>
            </div>
          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Expanding Across Africa
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            We continue to expand our network, bringing secure financial
            services to more countries while maintaining the highest
            standards of security, compliance, and customer satisfaction.
          </p>

        </div>

      </div>
    </section>
  );
}