"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Abdou Karim",
    country: "Niger",
    image: "/images/customers/niger1.jpg",
    rating: 5,
    review:
      "Tunko has completely changed how I send money home. Transfers are completed within minutes and the exchange rates are always fair.",
  },
  {
    id: 2,
    name: "Fatima Mahamat",
    country: "Chad",
    image: "/images/customers/chad1.jpg",
    rating: 5,
    review:
      "I use Tunko every week to support my family. The app is fast, secure and customer support is always available whenever I need help.",
  },
  {
    id: 3,
    name: "Amina Ibrahim",
    country: "Niger",
    image: "/images/customers/niger2.jpg",
    rating: 5,
    review:
      "The wallet is very easy to use. I can recharge airtime, pay bills and transfer money without any delays.",
  },
  {
    id: 4,
    name: "Mohammed Hassan",
    country: "Chad",
    image: "/images/customers/chad2.jpg",
    rating: 5,
    review:
      "The best money transfer service I have used in Central Africa. Fast delivery, secure transactions and transparent exchange rates.",
  },
];

export default function ServiceTestimonials() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Trusted By
            <span className="text-green-600"> Thousands of Customers</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Thousands of customers across Niger, Chad, Cameroon, Gabon,
            Equatorial Guinea and other African countries trust Tunko for
            secure, fast and reliable money transfers.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((user) => (
            <motion.div
              key={user.id}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Quote */}

              <Quote className="mb-6 text-blue-600" size={34} />

              {/* User */}

              <div className="flex items-center gap-4">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-full border-4 border-green-100 object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {user.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {user.country}
                  </p>
                </div>
              </div>

              {/* Rating */}

              <div className="mt-6 flex gap-1">
                {Array.from({ length: user.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="mt-6 leading-8 text-gray-600">
                "{user.review}"
              </p>

              {/* Footer */}

              <div className="mt-8 border-t pt-5">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Verified Customer
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statistics */}

        <div className="mt-20 grid gap-8 rounded-3xl bg-blue-600 p-10 text-center text-white md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold">500K+</h3>
            <p className="mt-2 text-blue-100">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">99.99%</h3>
            <p className="mt-2 text-blue-100">Secure Transfers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">8+</h3>
            <p className="mt-2 text-blue-100">Supported Countries</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2 text-blue-100">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}