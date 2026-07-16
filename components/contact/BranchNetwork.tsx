"use client";
import CountryAccordion from "./CountryAccordion";
import {
  Building2,
  Globe,
} from "lucide-react";

const countries = [
  {
    name: "Chad",
    flag: "🇹🇩",
    branches: "23 Provinces",
  },
  {
    name: "Niger",
    flag: "🇳🇪",
    branches: "8 Regions",
  },
  {
    name: "Mali",
    flag: "🇲🇱",
    branches: "19 Regions",
  },
  {
    name: "Central African Republic",
    flag: "🇨🇫",
    branches: "20 Prefectures",
  },
];

export default function BranchNetwork() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Branch Network
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Serving Multiple African Countries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Tunko continues to expand across Africa with strategically
            located branches, making international money transfers
            faster, safer and more accessible.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {countries.map((country) => (
            <div
              key={country.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {country.flag}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {country.name}
              </h3>

              <div className="mt-6 flex items-center gap-3 text-gray-600">
                <Building2 size={20} />
                <span>{country.branches}</span>
              </div>

              <div className="mt-4 flex items-center gap-3 text-gray-600">
                <Globe size={20} />
                <span>Tunko Branch Network</span>
              </div>

              <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                View Branches
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
    
  );
}
<CountryAccordion />