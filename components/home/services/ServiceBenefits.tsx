"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Globe2,
  BadgeDollarSign,
  Smartphone,
  BellRing,
} from "lucide-react";

const features = [
  {
    title: "Instant Transfers",
    description:
      "Send money within seconds across supported countries.",
    icon: Clock3,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Bank-Level Security",
    description:
      "Your funds are protected with enterprise-grade security.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Best Exchange Rates",
    description:
      "Transparent exchange rates with competitive pricing.",
    icon: BadgeDollarSign,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Cross-Border Coverage",
    description:
      "Transfer money between multiple African countries.",
    icon: Globe2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Mobile Friendly",
    description:
      "Available on Android, iPhone and the Web.",
    icon: Smartphone,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Receive instant notifications for every transaction.",
    icon: BellRing,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function ServiceFeatures() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Everything You Need
            <span className="text-green-600">
              {" "}To Transfer With Confidence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tunko provides modern financial
            services designed for speed,
            security and convenience.
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
                  y: 30,
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
                  className={`mb-6 inline-flex rounded-2xl p-4 ${feature.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">
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