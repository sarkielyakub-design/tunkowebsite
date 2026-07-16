"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Wallet,
  Smartphone,
  Wifi,
} from "lucide-react";

const services = [
  {
    title: "Money Transfer",
    description: "Send money instantly across Africa.",
    icon: Send,
    href: "/services/money-transfer",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Digital Wallet",
    description: "Store and manage your money securely.",
    icon: Wallet,
    href: "/services/digital-wallet",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Airtime Top-up",
    description: "Recharge all supported mobile networks.",
    icon: Smartphone,
    href: "/services/airtime",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Data Bundles",
    description: "Purchase internet bundles instantly.",
    icon: Wifi,
    href: "/services/data-bundles",
    color: "from-purple-500 to-pink-600",
  },
];

export default function RelatedServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Explore More
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            More Services From
            <span className="text-green-600">
              {" "}Tunko
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover additional financial services designed
            to simplify your everyday transactions.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                  hover:border-green-500
                  hover:shadow-2xl
                "
              >

                <div
                  className={`bg-gradient-to-r ${service.color} p-8 text-white`}
                >

                  <Icon size={36} />

                  <h3 className="mt-6 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-white/90">
                    {service.description}
                  </p>

                </div>

                <div className="p-6">

                  <Link
                    href={service.href}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-green-600
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-green-700
                    "
                  >
                    Learn More

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}