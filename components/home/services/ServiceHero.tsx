"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Clock3,
  Globe2,
  ShieldCheck,
} from "lucide-react";

interface ServiceHeroProps {
  slug: string;
}

const serviceData: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
  }
> = {
  "money-transfer": {
    badge: "International Transfer",
    title: "Send Money Across Africa",
    subtitle:
      "Transfer money instantly between Niger, Chad, Cameroon, Gabon and Equatorial Guinea with transparent pricing and bank-level security.",
    image: "/images/services/money-transfer.png",
  },

  "digital-wallet": {
    badge: "Digital Wallet",
    title: "Your Wallet, Your Control",
    subtitle:
      "Store money securely, receive payments, withdraw funds and manage transactions from one wallet.",
    image: "/images/services/wallet.png",
  },

  airtime: {
    badge: "Airtime Top-up",
    title: "Recharge Any Mobile Network",
    subtitle:
      "Purchase airtime instantly from supported operators in multiple African countries.",
    image: "/images/services/airtime.png",
  },

  "data-bundles": {
    badge: "Internet Bundles",
    title: "Affordable Internet Packages",
    subtitle:
      "Buy data bundles for Airtel, MTN, Orange, Moov Africa, Zamani and more.",
    image: "/images/services/data.png",
  },
};

export default function ServiceHero({
  slug,
}: ServiceHeroProps) {
  const service =
    serviceData[slug] ??
    serviceData["money-transfer"];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 py-28 text-white">

      {/* Background */}

      <div className="absolute inset-0 opacity-10">

        <Image
          src="/logo.png"
          alt="Tunko"
          fill
          className="object-contain"
        />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            {service.badge}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-green-50">
            {service.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-green-700 transition hover:scale-105"
            >
              Get Started

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/download"
              className="flex items-center gap-2 rounded-full border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-green-700"
            >
              <Download size={18} />

              Download App
            </Link>

          </div>

          {/* Quick Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>

              <Clock3 className="mb-2" />

              <h3 className="text-2xl font-bold">
                Instant
              </h3>

              <p className="text-green-100">
                Delivery
              </p>

            </div>

            <div>

              <Globe2 className="mb-2" />

              <h3 className="text-2xl font-bold">
                5
              </h3>

              <p className="text-green-100">
                Countries
              </p>

            </div>

            <div>

              <ShieldCheck className="mb-2" />

              <h3 className="text-2xl font-bold">
                100%
              </h3>

              <p className="text-green-100">
                Secure
              </p>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="relative"
        >

          <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />

          <Image
            src={service.image}
            alt={service.title}
            width={550}
            height={700}
            className="relative mx-auto"
            priority
          />

        </motion.div>

      </div>

    </section>
  );
}