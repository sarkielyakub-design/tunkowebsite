"use client";

import {
  Target,
  Eye,
  Gem,
} from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide secure, fast, and affordable international money transfer services that connect families, businesses, and communities across Africa and the world.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Central Africa's most trusted digital money transfer platform through innovation, transparency, and exceptional customer service.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Gem,
    title: "Our Core Values",
    description:
      "Integrity, security, transparency, customer satisfaction, innovation, compliance, and excellence guide every transaction we process.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Foundation
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Mission, Vision & Values
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Everything we do is driven by our commitment to providing
            trusted financial services that empower individuals,
            families, and businesses across Africa.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}