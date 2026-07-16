"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ShieldCheck,
  Globe,
  TrendingUp,
} from "lucide-react";

import CountryBadges from "./services/CountryBadges";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex flex-col">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2"
      >
        <ShieldCheck
          size={18}
          className="text-green-600"
        />

        <span className="text-sm font-semibold text-green-700">
          Trusted African Money Transfer Platform
        </span>

      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .15,
          duration: .6,
        }}
        className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl"
      >
        Fast,
        <span className="text-green-600">
          {" "}Secure
        </span>
        <br />

        Money Transfers
        <br />

        Across Africa
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .35,
          duration: .6,
        }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-600"
      >
        Send money instantly between
        <strong> Niger</strong>,
        <strong> Chad</strong>,
        <strong> Cameroon</strong>,
        <strong> Gabon</strong> and
        <strong> Equatorial Guinea</strong>.

        Enjoy secure transfers,
        competitive exchange rates,
        airtime top-ups,
        data bundles,
        and digital wallet services.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .5,
        }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <button
          className="
          group
          rounded-full
          bg-green-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-xl
          transition
          hover:-translate-y-1
          hover:bg-green-700
        "
        >
          <span className="flex items-center gap-2">

            Get Started

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </span>
        </button>

        <button
          className="
          rounded-full
          border
          border-slate-300
          bg-white
          px-8
          py-4
          font-semibold
          text-slate-800
          transition
          hover:bg-slate-100
        "
        >
          <span className="flex items-center gap-2">

            <Download size={18} />

            Download App

          </span>
        </button>

      </motion.div>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .7,
        }}
        className="mt-12 flex flex-wrap gap-6"
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-600" />
          <span>Secure Transfers</span>
        </div>

        <div className="flex items-center gap-2">
          <TrendingUp className="text-green-600" />
          <span>Live Exchange Rates</span>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="text-green-600" />
          <span>5 African Countries</span>
        </div>

      </motion.div>

      {/* Countries */}

      <div className="mt-12">
        <CountryBadges />
      </div>

      {/* Statistics */}

      <div className="mt-14">
        <HeroStats />
      </div>

    </div>
  );
}