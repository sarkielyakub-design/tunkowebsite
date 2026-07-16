"use client";

import { motion } from "framer-motion";

const countries = [
  {
    flag: "🇳🇪",
    name: "Niger",
  },
  {
    flag: "🇹🇩",
    name: "Chad",
  },
  {
    flag: "🇨🇲",
    name: "Cameroon",
  },
  {
    flag: "🇬🇦",
    name: "Gabon",
  },
  {
    flag: "🇬🇶",
    name: "Equatorial Guinea",
  },
];

export default function AfricaMap() {
  return (
    <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-10 shadow-xl">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative z-10">

        <h3 className="text-3xl font-bold text-slate-900">
          Africa Coverage
        </h3>

        <p className="mt-3 text-gray-600">
          Tunko currently supports secure
          transfers across these countries.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5">

          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{
                opacity: 0,
                scale: .8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * .1,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all hover:border-green-500 hover:shadow-xl"
            >
              <div className="text-4xl">
                {country.flag}
              </div>

              <h4 className="mt-4 text-lg font-bold">
                {country.name}
              </h4>
            </motion.div>
          ))}

        </div>

        <div className="mt-10 rounded-2xl bg-green-600 p-6 text-white">

          <h4 className="text-xl font-bold">
            Expanding Across Africa
          </h4>

          <p className="mt-2 text-green-100">
            More countries will be added
            through the Tunko Admin Panel
            without updating the website.
          </p>

        </div>

      </div>

    </div>
  );
}