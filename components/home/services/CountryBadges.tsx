"use client";

import Image from "next/image";

interface Country {
  name: string;
  flag: string;
}

const countries: Country[] = [
  {
    name: "Nigeria",
    flag: "https://flagcdn.com/w80/ng.png",
  },
  {
    name: "Niger",
    flag: "https://flagcdn.com/w80/ne.png",
  },
  {
    name: "Chad",
    flag: "https://flagcdn.com/w80/td.png",
  },
  {
    name: "Cameroon",
    flag: "https://flagcdn.com/w80/cm.png",
  },
  {
    name: "Gabon",
    flag: "https://flagcdn.com/w80/ga.png",
  },
  {
    name: "Equatorial Guinea",
    flag: "https://flagcdn.com/w80/gq.png",
  },
  {
    name: "Central African Republic",
    flag: "https://flagcdn.com/w80/cf.png",
  },
  {
    name: "Mali",
    flag: "https://flagcdn.com/w80/ml.png",
  },
];

export default function CountryBadges() {
  return (
    <section className="mt-10">
      <div className="text-center">

        <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Our Network
        </span>

        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          Countries We Serve
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Tunko provides fast, secure and reliable money transfer
          services across West and Central Africa.
        </p>

      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

        {countries.map((country) => (
          <div
            key={country.name}
            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
          >
            <Image
              src={country.flag}
              alt={country.name}
              width={36}
              height={24}
              className="rounded"
            />

            <span className="font-medium text-gray-800">
              {country.name}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}