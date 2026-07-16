"use client";

import Image from "next/image";
import { Apple, Smartphone } from "lucide-react";

export default function Download() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Download Tunko
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Send Money
            <br />
            Anytime, Anywhere
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Download the Tunko Money Transfer app and enjoy secure
            international transfers, live exchange rates, wallet services,
            airtime recharge, data bundles and bill payments across Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:scale-105">
              <Apple size={24} />
              App Store
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-blue-700">
              <Smartphone size={22} />
              Google Play
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-blue-100">
            <div>✓ Secure Wallet</div>
            <div>✓ Instant Transfers</div>
            <div>✓ Live Exchange Rates</div>
            <div>✓ 24/7 Support</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          <Image
            src="/images/app/dashboard.png"
            alt="Tunko Mobile App"
            width={430}
            height={850}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
    </section>
  );
}