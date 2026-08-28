"use client";

import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 py-28">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            <Globe className="h-4 w-4" />
            About Tunko Money Transfer
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Connecting Families,
            <br />
            Businesses &
            <span className="block text-cyan-300">
              Opportunities
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Headquartered in N'Djamena, Chad, Tunko Money Transfer
            provides fast, secure and reliable international money
            transfer services across Central Africa and beyond.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Link>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-4xl font-bold text-white">
                6+
              </h3>

              <p className="mt-2 text-blue-100">
                Countries Served
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-4xl font-bold text-white">
                24/7
              </h3>

              <p className="mt-2 text-blue-100">
                Customer Support
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="mb-3">
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Secure
              </h3>

              <p className="mt-2 text-blue-100">
                Trusted Transactions
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}