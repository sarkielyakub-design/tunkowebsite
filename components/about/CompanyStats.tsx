"use client";

import {
  Globe2,
  Users,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "6+",
    label: "Countries Served",
    description: "Across the CEMAC region",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
    description: "Individuals & businesses trust us",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: ArrowRightLeft,
    value: "1M+",
    label: "Successful Transfers",
    description: "Processed securely and efficiently",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Transaction Security",
    description: "Protected with modern technology",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Trusted Across Central Africa
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Every number represents the confidence our customers place
            in Tunko Money Transfer. We are committed to delivering
            secure, reliable, and efficient financial services every day.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white ${stat.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-3 text-xl font-semibold text-white">
                  {stat.label}
                </p>

                <p className="mt-3 text-blue-100">
                  {stat.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}