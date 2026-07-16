"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Wallet,
  Clock3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface ServiceDetailsProps {
  slug: string;
}

const services = {
  "money-transfer": {
    title: "International Money Transfer",
    description:
      "Send money securely across Africa with competitive exchange rates, instant delivery and complete transparency.",

    benefits: [
      "Instant Transfers",
      "Low Transfer Fees",
      "Real-Time Exchange Rates",
      "Secure Transactions",
      "24/7 Availability",
      "Transfer Tracking",
    ],
  },

  "digital-wallet": {
    title: "Digital Wallet",
    description:
      "Store money, receive payments, pay bills and manage your finances securely from one wallet.",

    benefits: [
      "Wallet Balance",
      "Transaction History",
      "Instant Funding",
      "Fast Withdrawals",
      "Bank Security",
      "Multiple Currencies",
    ],
  },

  airtime: {
    title: "Airtime Top-up",
    description:
      "Purchase airtime instantly for supported mobile operators across Africa.",

    benefits: [
      "Instant Recharge",
      "Multiple Operators",
      "Saved Recipients",
      "Fast Delivery",
      "Secure Payment",
      "24/7 Service",
    ],
  },

  "data-bundles": {
    title: "Internet Data Bundles",
    description:
      "Purchase affordable internet bundles for supported telecom providers.",

    benefits: [
      "Daily Plans",
      "Weekly Plans",
      "Monthly Plans",
      "Instant Activation",
      "Affordable Prices",
      "Operator Coverage",
    ],
  },
};

export default function ServiceDetails({
  slug,
}: ServiceDetailsProps) {
  const service =
    services[
      slug as keyof typeof services
    ] || services["money-transfer"];

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Service Overview
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              {service.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {service.description}
            </p>

            <div className="mt-10 grid gap-5">

              {service.benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-green-600"
                    size={24}
                  />

                  <span className="text-lg">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            <Link
              href="/register"
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-green-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-green-700
              "
            >
              Start Now

              <ArrowRight size={20} />

            </Link>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="grid gap-6">

              <div className="rounded-3xl border border-slate-200 bg-green-50 p-8">

                <ShieldCheck
                  size={34}
                  className="text-green-600"
                />

                <h3 className="mt-5 text-2xl font-bold">
                  Secure Platform
                </h3>

                <p className="mt-3 text-gray-600">
                  Enterprise-grade security protects
                  every transaction.
                </p>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow">

                  <Clock3
                    size={30}
                    className="text-orange-500"
                  />

                  <h4 className="mt-4 text-xl font-bold">
                    Instant
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Delivery
                  </p>

                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow">

                  <Wallet
                    size={30}
                    className="text-blue-500"
                  />

                  <h4 className="mt-4 text-xl font-bold">
                    Low Fees
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Transparent Pricing
                  </p>

                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow">

                  <Globe2
                    size={30}
                    className="text-purple-500"
                  />

                  <h4 className="mt-4 text-xl font-bold">
                    5 Countries
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Supported
                  </p>

                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow">

                  <CheckCircle2
                    size={30}
                    className="text-emerald-500"
                  />

                  <h4 className="mt-4 text-xl font-bold">
                    99.9%
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Uptime
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}