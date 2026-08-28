"use client";

import { motion } from "framer-motion";

import {
  Send,
  Wallet,
  Smartphone,
  Wifi,
  Receipt,
  CreditCard,
  Building2,
  QrCode,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Money Transfer",
    description:
      "Send money instantly across supported African countries.",
    icon: Send,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "Digital Wallet",
    description:
      "Store, receive and manage your money securely.",
    icon: Wallet,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Airtime Top-up",
    description:
      "Recharge all supported mobile operators.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Data Bundles",
    description:
      "Purchase affordable internet bundles instantly.",
    icon: Wifi,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Bill Payments",
    description:
      "Pay utility bills securely from your wallet.",
    icon: Receipt,
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 6,
    title: "Wallet Funding",
    description:
      "Fund your wallet using bank cards and mobile money.",
    icon: CreditCard,
    color: "from-teal-500 to-green-600",
  },
  {
    id: 7,
    title: "Bank Withdrawal",
    description:
      "Withdraw directly to supported bank accounts.",
    icon: Building2,
    color: "from-slate-700 to-slate-900",
  },
  {
    id: 8,
    title: "QR Payments",
    description:
      "Pay merchants instantly using QR codes.",
    icon: QrCode,
    color: "from-pink-500 to-rose-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Everything You Need
            <span className="text-green-600">
              {" "}In One App
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tunko combines international
            transfers, digital wallets,
            airtime, data bundles,
            bill payments and much more
            into one secure financial platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

            <ServiceCard
              key={service.id}
              service={service}
            />

          ))}

        </div>

      </div>

    </section>
  );
}