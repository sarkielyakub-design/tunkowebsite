"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  Globe,
  Zap,
  Smartphone,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description:
      "Send money within seconds between supported African countries.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    description:
      "Your transactions are protected with modern encryption and fraud prevention.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Exchange Rates",
    description:
      "Get transparent exchange rates with no hidden charges.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Globe,
    title: "Cross-Border Transfers",
    description:
      "Transfer money between Niger, Chad, Cameroon, Gabon and Equatorial Guinea.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Airtime & Data",
    description:
      "Recharge Airtel, Moov Africa, Zamani and other supported networks directly.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description:
      "Fund your wallet, withdraw funds and track every transaction in one place.",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function WhyChooseTunko() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Why Choose Tunko
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Everything You Need for
            <span className="text-green-600">
              {" "}Secure Money Transfers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tunko combines secure transfers,
            digital wallets,
            airtime,
            data bundles,
            and competitive exchange rates
            into one modern financial platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
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
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-300
                  hover:shadow-2xl
                "
              >

                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${feature.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}