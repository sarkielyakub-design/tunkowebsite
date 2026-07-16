"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  Send,
  Smartphone,
  Globe,
  Star,
} from "lucide-react";

export default function LoginHero() {
  return (
    <section className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 lg:flex">

      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col justify-between p-16 text-white">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-xl">
              💸
            </div>

            <div>
              <h1 className="text-3xl font-extrabold">
                Tunko
              </h1>

              <p className="text-blue-100">
                Money Transfer
              </p>
            </div>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="max-w-xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            <ShieldCheck size={18} />
            Bank-Level Security
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight">
            Send Money Across
            <span className="block text-cyan-200">
              Africa With Confidence.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Fast, secure and reliable wallet transfers,
            international remittance, airtime and data
            purchases across Africa.
          </p>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <Wallet className="mb-3 text-cyan-200" />

              <h3 className="font-bold">
                Digital Wallet
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Store and manage your money securely.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <Send className="mb-3 text-cyan-200" />

              <h3 className="font-bold">
                Instant Transfers
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Send money in seconds.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <Smartphone className="mb-3 text-cyan-200" />

              <h3 className="font-bold">
                Airtime & Data
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Purchase mobile services anytime.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <Globe className="mb-3 text-cyan-200" />

              <h3 className="font-bold">
                Multi-Country
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Available across West & Central Africa.
              </p>
            </div>

          </div>

          <div className="mt-12 flex items-center gap-3">

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
              Learn More
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">
              Our Services

              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">

          <div>
            <div className="flex text-yellow-300">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-yellow-300"
                />
              ))}
            </div>

            <p className="mt-2 text-blue-100">
              Trusted by thousands of customers across
              Africa.
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-4xl font-extrabold">
              7+
            </h3>

            <p className="text-blue-100">
              Supported Countries
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}