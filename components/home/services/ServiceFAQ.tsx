"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a transfer take?",
    answer:
      "Most transfers are completed instantly. Processing time may vary depending on the destination country and payment method.",
  },
  {
    question: "What countries does Tunko support?",
    answer:
      "Tunko currently supports Niger, Chad, Cameroon, Gabon and Equatorial Guinea, with more countries coming soon.",
  },
  {
    question: "How much is the transfer fee?",
    answer:
      "Tunko charges transparent fees. The exact fee is calculated before you confirm your transfer.",
  },
  {
    question: "Is my money secure?",
    answer:
      "Yes. All transactions are protected with bank-level encryption and advanced fraud monitoring.",
  },
  {
    question: "Which payment methods are supported?",
    answer:
      "You can pay using your Tunko Wallet, bank cards, bank transfers and supported mobile money providers.",
  },
  {
    question: "Can I track my transfer?",
    answer:
      "Yes. Every transfer includes a live tracking status until it reaches the recipient.",
  },
];

export default function ServiceFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Have Questions?
            <span className="text-green-600">
              {" "}We've Got Answers
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to know before using Tunko.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              layout
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: .3,
                    }}
                  >
                    <div className="border-t border-slate-100 px-6 py-5 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}