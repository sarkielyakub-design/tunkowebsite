"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

const rates = [
  {
    from: "NGN",
    to: "XAF",
    rate: "1 NGN = 0.38 XAF",
    change: "+0.42%",
    up: true,
    countries: "Cameroon • Chad • Gabon • Central African Republic • Equatorial Guinea",
  },
  {
    from: "NGN",
    to: "XOF",
    rate: "1 NGN = 0.40 XOF",
    change: "+0.28%",
    up: true,
    countries: "Niger • Mali",
  },
  {
    from: "XAF",
    to: "NGN",
    rate: "1 XAF = ₦2.62",
    change: "-0.15%",
    up: false,
    countries: "Cameroon • Chad • Gabon • Central African Republic • Equatorial Guinea",
  },
  {
    from: "XOF",
    to: "NGN",
    rate: "1 XOF = ₦2.48",
    change: "+0.19%",
    up: true,
    countries: "Niger • Mali",
  },
  {
    from: "USD",
    to: "XAF",
    rate: "1 USD = 615 XAF",
    change: "+0.31%",
    up: true,
    countries: "International Transfers",
  },
  {
    from: "EUR",
    to: "XAF",
    rate: "1 EUR = 656 XAF",
    change: "-0.08%",
    up: false,
    countries: "International Transfers",
  },
];

export default function ExchangeRates() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Live Exchange Rates
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Exchange Rates
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            View competitive exchange rates for all countries supported by
            Tunko Money Transfer. Rates are updated regularly to ensure
            transparent and secure transactions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rates.map((rate) => (
            <div
              key={`${rate.from}-${rate.to}`}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {rate.from} → {rate.to}
                  </h3>

                  <p className="mt-3 text-3xl font-extrabold text-blue-600">
                    {rate.rate}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {rate.countries}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold ${
                    rate.up
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {rate.up ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}

                  {rate.change}
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between border-t pt-5">
                <div>
                  <p className="text-xs text-gray-500">
                    Updated
                  </p>

                  <p className="font-semibold text-green-600">
                    Every Minute
                  </p>
                </div>

                <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                  View Rate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white">
          <h3 className="text-3xl font-bold">
            Need Real-Time Exchange Rates?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Download the Tunko Money Transfer app to access live exchange
            rates, send money instantly, and track every transaction across
            Africa.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-gray-100">
            Download App
          </button>
        </div>
      </div>
    </section>
  );
}