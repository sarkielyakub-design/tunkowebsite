"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe,
  CheckCircle2,
} from "lucide-react";

interface Country {
  id: number;
  name: string;
  flag: string;
  currency: string;
  operators: number;
}

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({
  country,
}: CountryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: .25,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        hover:border-green-500
        hover:shadow-2xl
      "
    >
      {/* Top */}

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">

        <div className="flex items-center justify-between">

          <div className="text-5xl">
            {country.flag}
          </div>

          <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            Available
          </div>

        </div>

        <h3 className="mt-5 text-2xl font-bold">
          {country.name}
        </h3>

        <p className="mt-1 text-green-100">
          Currency: {country.currency}
        </p>

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        <div className="flex items-center gap-3">

          <Building2
            size={20}
            className="text-green-600"
          />

          <div>

            <p className="text-sm text-gray-500">
              Operators
            </p>

            <h4 className="font-bold">
              {country.operators} Available
            </h4>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Globe
            size={20}
            className="text-green-600"
          />

          <div>

            <p className="text-sm text-gray-500">
              Coverage
            </p>

            <h4 className="font-bold">
              Nationwide
            </h4>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle2
            size={20}
            className="text-green-600"
          />

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <h4 className="font-bold text-green-600">
              Active
            </h4>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t bg-slate-50 p-6">

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-green-600
            px-5
            py-3
            font-semibold
            text-white
            transition-all
            hover:bg-green-700
          "
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />

        </button>

      </div>

    </motion.div>
  );
}