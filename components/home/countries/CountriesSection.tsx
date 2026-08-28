"use client";

import { motion } from "framer-motion";

import AfricaMap from "./AfricaMap";
import CountryCard from "./CountryCard";
import CountryDetails from "./CountryDetails";

const countries = [
  {
    id: 1,
    name: "Niger",
    flag: "🇳🇪",
    currency: "XOF",
    operators: 3,
  },
  {
    id: 2,
    name: "Chad",
    flag: "🇹🇩",
    currency: "XAF",
    operators: 2,
  },
  {
    id: 3,
    name: "Cameroon",
    flag: "🇨🇲",
    currency: "XAF",
    operators: 2,
  },
  {
    id: 4,
    name: "Gabon",
    flag: "🇬🇦",
    currency: "XAF",
    operators: 2,
  },
  {
    id: 5,
    name: "Equatorial Guinea",
    flag: "🇬🇶",
    currency: "XAF",
    operators: 2,
  },
];

export default function CountriesSection() {
  return (
    <section
      id="countries"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Countries We Support
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Send Money Across
            <span className="text-green-600">
              {" "}Africa
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tunko enables secure, fast and reliable money
            transfers across supported African countries
            with trusted mobile operators and competitive
            exchange rates.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <AfricaMap />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <CountryDetails />
          </motion.div>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
            />
          ))}

        </div>

      </div>
    </section>
  );
}