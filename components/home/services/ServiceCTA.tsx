"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Smartphone,
  ShieldCheck,
  Globe2,
  Clock3,
} from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700" />

      {/* Tunko Logo Background */}

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/logo.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "40%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl text-center text-white"
        >

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Get Started Today
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
            Ready To Send Money
            <br />
            Across Africa?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">
            Join thousands of customers using Tunko for
            secure money transfers, wallet services,
            airtime, data bundles and digital payments.
          </p>

          {/* Statistics */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <Clock3
                className="mx-auto mb-4"
                size={34}
              />

              <h3 className="text-3xl font-bold">
                Instant
              </h3>

              <p className="mt-2 text-green-100">
                Transfers
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <ShieldCheck
                className="mx-auto mb-4"
                size={34}
              />

              <h3 className="text-3xl font-bold">
                Secure
              </h3>

              <p className="mt-2 text-green-100">
                Transactions
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <Globe2
                className="mx-auto mb-4"
                size={34}
              />

              <h3 className="text-3xl font-bold">
                5 Countries
              </h3>

              <p className="mt-2 text-green-100">
                Supported
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-16 flex flex-wrap justify-center gap-5">

            <Link
              href="/register"
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-green-700
                transition
                hover:scale-105
              "
            >
              <ArrowRight size={20} />

              Create Free Account

            </Link>

            <Link
              href="/download"
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-green-700
              "
            >
              <Download size={20} />

              Download App

            </Link>

          </div>

          {/* Trust Badges */}

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            <div className="rounded-full bg-white/10 px-5 py-3 backdrop-blur">
              🔒 Bank-Level Security
            </div>

            <div className="rounded-full bg-white/10 px-5 py-3 backdrop-blur">
              ⚡ Instant Delivery
            </div>

            <div className="rounded-full bg-white/10 px-5 py-3 backdrop-blur">
              🌍 Cross-Border Transfers
            </div>

            <div className="rounded-full bg-white/10 px-5 py-3 backdrop-blur">
              📱 Mobile App Available
            </div>

          </div>

          {/* App Stores */}

          <div className="mt-20 flex flex-wrap justify-center gap-6">

            <Link
              href="#"
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-black
                px-8
                py-4
                text-white
              "
            >
              <Smartphone size={26} />

              <div className="text-left">

                <p className="text-xs">
                  Download on the
                </p>

                <h4 className="font-bold">
                  App Store
                </h4>

              </div>

            </Link>

            <Link
              href="#"
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-black
                px-8
                py-4
                text-white
              "
            >
              <Smartphone size={26} />

              <div className="text-left">

                <p className="text-xs">
                  Get it on
                </p>

                <h4 className="font-bold">
                  Google Play
                </h4>

              </div>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}