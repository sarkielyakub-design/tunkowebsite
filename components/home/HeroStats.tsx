"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "100K+",
    label: "Active Users",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Globe2,
    value: "5",
    label: "Supported Countries",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    value: "1M+",
    label: "Transfers Completed",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Success Rate",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function HeroStats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {statistics.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
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
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-lg
              transition
            "
          >
            <div
              className={`mb-5 inline-flex rounded-2xl p-4 ${item.color}`}
            >
              <Icon size={28} />
            </div>

            <h2 className="text-4xl font-extrabold text-slate-900">
              {item.value}
            </h2>

            <p className="mt-2 text-gray-500">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}