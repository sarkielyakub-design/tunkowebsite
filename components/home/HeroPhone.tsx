"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  Wallet,
} from "lucide-react";

export default function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-green-300/20 blur-[120px]" />

      {/* Wallet Card */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-0 top-8 z-20 w-64 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-green-100 p-3">
            <Wallet className="text-green-600" />
          </div>

          <div>

            <p className="text-sm text-gray-500">
              Wallet Balance
            </p>

            <h2 className="text-2xl font-bold">
              850,000 XOF
            </h2>

          </div>

        </div>
      </motion.div>

      {/* Success Card */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-0 top-28 z-20 w-72 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">

          <CheckCircle2
            className="text-green-600"
            size={28}
          />

          <div>

            <h3 className="font-bold">
              Transfer Successful
            </h3>

            <p className="text-sm text-gray-500">
              250,000 XAF sent successfully
            </p>

          </div>

        </div>
      </motion.div>

      {/* Exchange Rate Card */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-12 left-4 z-20 w-64 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Exchange Rate
            </p>

            <h3 className="text-xl font-bold">
              1 USD
            </h3>

          </div>

          <ArrowDownLeft className="text-red-500" />

        </div>

        <div className="mt-4 text-2xl font-bold text-green-600">
          615 XOF
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="relative z-10"
      >
        <div className="overflow-hidden rounded-[48px] border-[12px] border-slate-900 shadow-[0_40px_80px_rgba(0,0,0,.25)]">

          <Image
            src="/images/app/dashboard.png"
            alt="Tunko App"
            width={360}
            height={760}
            priority
          />

        </div>
      </motion.div>

      {/* Floating Transaction */}
      <motion.div
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-2 z-20 rounded-3xl bg-green-600 px-6 py-5 text-white shadow-2xl"
      >
        <div className="flex items-center gap-3">

          <ArrowUpRight />

          <div>

            <p className="text-sm opacity-80">
              Money Sent
            </p>

            <h2 className="font-bold">
              +120,000 FCFA
            </h2>

          </div>

        </div>
      </motion.div>

    </div>
  );
}