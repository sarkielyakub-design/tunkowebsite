"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Building2,
  Clock3,
  ShieldCheck,
  Smartphone,
  Wallet,
  Wifi,
  QrCode,
  ArrowRight,
} from "lucide-react";

const operators = [
  "Airtel Niger",
  "Zamani Telecom",
  "Niger Telecom",
];

const services = [
  {
    title: "Money Transfer",
    icon: Banknote,
  },
  {
    title: "Digital Wallet",
    icon: Wallet,
  },
  {
    title: "Airtime",
    icon: Smartphone,
  },
  {
    title: "Data Bundles",
    icon: Wifi,
  },
  {
    title: "QR Payments",
    icon: QrCode,
  },
];

export default function CountryDetails() {
  return (
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
      className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl"
    >
      {/* Header */}

      <div className="flex items-center gap-5">

        <div className="text-6xl">
          🇳🇪
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Niger
          </h2>

          <p className="text-gray-500">
            West Africa
          </p>
        </div>

      </div>

      <div className="my-8 h-px bg-slate-200" />

      {/* Information */}

      <div className="grid gap-6 sm:grid-cols-2">

        <div className="rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Wallet className="text-green-600" />

            <div>

              <p className="text-sm text-gray-500">
                Currency
              </p>

              <h3 className="font-bold">
                XOF
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Clock3 className="text-green-600" />

            <div>

              <p className="text-sm text-gray-500">
                Delivery Time
              </p>

              <h3 className="font-bold">
                Instant
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-green-600" />

            <div>

              <p className="text-sm text-gray-500">
                Transfer Fee
              </p>

              <h3 className="font-bold">
                3%
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Building2 className="text-green-600" />

            <div>

              <p className="text-sm text-gray-500">
                Operators
              </p>

              <h3 className="font-bold">
                3 Networks
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Operators */}

      <div className="mt-10">

        <h3 className="mb-5 text-xl font-bold">
          Supported Operators
        </h3>

        <div className="space-y-3">

          {operators.map((operator) => (
            <div
              key={operator}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
            >
              <span>{operator}</span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Active
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Services */}

      <div className="mt-10">

        <h3 className="mb-5 text-xl font-bold">
          Available Services
        </h3>

        <div className="grid grid-cols-2 gap-4">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-500 hover:bg-green-50"
              >
                <Icon
                  className="mb-3 text-green-600"
                  size={28}
                />

                <p className="font-semibold">
                  {service.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>

      {/* Button */}

      <button
        className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
      >
        Learn More

        <ArrowRight size={18} />

      </button>

    </motion.div>
  );
}