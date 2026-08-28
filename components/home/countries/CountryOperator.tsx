"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Smartphone,
  Wifi,
  Wallet,
} from "lucide-react";
import Image from "next/image";

interface CountryOperatorProps {
  name: string;
  logo?: string;
  active?: boolean;
  services?: string[];
}

export default function CountryOperator({
  name,
  logo = "/operators/default.png",
  active = true,
  services = [
    "Wallet",
    "Airtime",
    "Data",
  ],
}: CountryOperatorProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        duration: .2,
      }}
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        hover:border-green-500
        hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="relative h-14 w-14 overflow-hidden rounded-xl border bg-white">

            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain p-2"
            />

          </div>

          <div>

            <h3 className="font-bold text-lg">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              Mobile Operator
            </p>

          </div>

        </div>

        <div
          className={`
            flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold

            ${
              active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          <CheckCircle2 size={16} />

          {active
            ? "Active"
            : "Offline"}
        </div>

      </div>

      <div className="my-6 h-px bg-slate-200" />

      <div className="grid grid-cols-3 gap-3">

        {services.includes("Wallet") && (
          <div className="rounded-xl bg-green-50 p-3 text-center">
            <Wallet
              className="mx-auto text-green-600"
              size={24}
            />

            <p className="mt-2 text-xs font-medium">
              Wallet
            </p>

          </div>
        )}

        {services.includes("Airtime") && (
          <div className="rounded-xl bg-blue-50 p-3 text-center">
            <Smartphone
              className="mx-auto text-blue-600"
              size={24}
            />

            <p className="mt-2 text-xs font-medium">
              Airtime
            </p>

          </div>
        )}

        {services.includes("Data") && (
          <div className="rounded-xl bg-orange-50 p-3 text-center">
            <Wifi
              className="mx-auto text-orange-600"
              size={24}
            />

            <p className="mt-2 text-xs font-medium">
              Data
            </p>

          </div>
        )}

      </div>

    </motion.div>
  );
}