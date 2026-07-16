"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "120+",
    label: "Countries Supported",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Users,
    value: "500K+",
    label: "Happy Customers",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: TrendingUp,
    value: "$2B+",
    label: "Transferred Securely",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "Secure Transactions",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

const customers = [
  "/images/customers/chad1.jpg",
  "/images/customers/niger1.jpg",
  "/images/customers/chad2.jpg",
  "/images/customers/niger2.jpg",
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            🌍 Trusted Worldwide
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Tunko by the{" "}
            <span className="text-blue-600">
              Numbers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Every number reflects the trust our customers place in Tunko
            for secure and reliable international money transfers.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div
                key={stat.label}
                initial={{
                  opacity:0,
                  y:60
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                viewport={{once:true}}
                transition={{
                  delay:index*0.15,
                  duration:.6
                }}
                whileHover={{
                  y:-10,
                  scale:1.03
                }}
                className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-lg"
              >

                <motion.div
                  animate={{
                    rotate:[0,8,-8,0]
                  }}
                  transition={{
                    repeat:Infinity,
                    duration:5
                  }}
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl ${stat.bg}`}
                >

                  <Icon className={`h-10 w-10 ${stat.color}`} />

                </motion.div>

                <motion.h3
                  initial={{scale:.7}}
                  whileInView={{scale:1}}
                  transition={{duration:.5}}
                  className="text-5xl font-extrabold"
                >
                  {stat.value}
                </motion.h3>

                <p className="mt-3 text-lg text-gray-600">
                  {stat.label}
                </p>

                {index === 1 && (

                  <div className="mt-8">

                    <div className="flex justify-center">

                      {customers.map((img, i) => (

                        <motion.img
                          key={i}
                          src={img}
                          alt=""
                          initial={{
                            opacity:0,
                            x:-30
                          }}
                          whileInView={{
                            opacity:1,
                            x:0
                          }}
                          transition={{
                            delay:i*.15
                          }}
                          whileHover={{
                            scale:1.15
                          }}
                          className="-ml-3 h-12 w-12 rounded-full border-4 border-white object-cover first:ml-0"
                        />

                      ))}

                    </div>

                    <p className="mt-4 text-center font-semibold text-green-600">
                      +500K Active Customers
                    </p>

                  </div>

                )}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}