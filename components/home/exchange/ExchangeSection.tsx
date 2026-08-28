"use client";

import ExchangeHero from "./ExchangeHero";
import ExchangeRates from "./ExchangeRates";

export default function ExchangeSection() {
  return (
    <section
      id="exchange"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <ExchangeHero />

        <div className="mt-16">
          <ExchangeRates />
        </div>
      </div>
    </section>
  );
}