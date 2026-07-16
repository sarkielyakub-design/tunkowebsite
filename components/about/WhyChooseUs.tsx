"use client";

import {
  ShieldCheck,
  Zap,
  Globe,
  BadgeDollarSign,
  Smartphone,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description:
      "Every transfer is protected using industry-standard security, encrypted systems, and compliance procedures.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Zap,
    title: "Fast Transfers",
    description:
      "Send and receive money quickly with efficient processing and reliable transaction delivery.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Globe,
    title: "Regional Coverage",
    description:
      "Serving customers across Chad, Cameroon, Gabon, Equatorial Guinea, Central African Republic, and the Republic of the Congo.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Rates",
    description:
      "Transparent fees and competitive exchange rates with no hidden charges.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Modern Digital Platform",
    description:
      "Manage transfers, track transactions, and monitor payments from anywhere using our digital services.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our customer support team is available to help you throughout every step of your transfer.",
    color: "bg-red-100 text-red-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Tunko
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Trusted by Individuals & Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We combine speed, security, transparency, and exceptional
            customer service to deliver a world-class money transfer
            experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}