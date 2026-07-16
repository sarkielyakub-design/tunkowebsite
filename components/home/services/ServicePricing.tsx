"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Globe2,
  Clock3,
  Wallet,
  ArrowRight,
  BadgePercent,
} from "lucide-react";

const pricing = [
  {
    title: "Transfer Fee",
    value: "3%",
    description: "Transparent fee charged on every transfer.",
    icon: BadgePercent,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Exchange Rate",
    value: "Live",
    description: "Updated in real-time from the Tunko platform.",
    icon: Globe2,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Delivery Time",
    value: "Instant",
    description: "Most transfers arrive within seconds.",
    icon: Clock3,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Payment Methods",
    value: "Multiple",
    description: "Wallet, Card, Bank and Mobile Money.",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function ServicePricing() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Pricing
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Simple &
            <span className="text-green-600">
              {" "}Transparent Pricing
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            No hidden charges.
            See exactly what you pay before confirming
            every transaction.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {pricing.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
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
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  hover:border-green-500
                  hover:shadow-2xl
                "
              >

                <div
                  className={`inline-flex rounded-2xl p-4 ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <h2 className="mt-4 text-4xl font-extrabold text-green-600">
                  {item.value}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* CTA */}

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
          className="
            mt-20
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-green-600
            to-emerald-600
            p-10
            text-white
          "
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h2 className="text-4xl font-bold">
                Calculate Before You Send
              </h2>

              <p className="mt-4 max-w-2xl text-green-100">
                Use our live exchange calculator
                to see fees, exchange rates
                and exactly how much your
                recipient will receive.
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-green-700 transition hover:scale-105">

              <Wallet size={22} />

              Calculate Transfer

              <ArrowRight size={18} />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}