"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How fast are money transfers?",
    answer:
      "Most transfers are completed instantly. Depending on the destination country, bank, or mobile operator, some transfers may take a few minutes.",
  },
  {
    question: "Which countries does Tunko support?",
    answer:
      "Tunko currently supports Nigeria, Niger, Chad, Cameroon, Gabon, Equatorial Guinea, Central African Republic, and Mali. More African countries will be added soon.",
  },
  {
    question: "Is Tunko safe and secure?",
    answer:
      "Yes. Tunko uses bank-level encryption, secure authentication, fraud monitoring, and industry-standard security measures to protect every transaction.",
  },
  {
    question: "Can I send money using my mobile phone?",
    answer:
      "Absolutely. The Tunko mobile app allows you to send money, receive funds, recharge airtime, purchase data bundles, and manage your wallet anytime.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "You can fund your wallet using bank transfers, debit cards, mobile money services, and other supported payment methods available in your country.",
  },
  {
    question: "Can I track my transfer?",
    answer:
      "Yes. Every transfer includes a tracking reference. You can monitor its status in real time directly from your Tunko dashboard.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Tunko believes in complete transparency. All fees and exchange rates are displayed before you confirm your transaction.",
  },
  {
    question: "What currencies are supported?",
    answer:
      "Tunko supports NGN (Nigeria), XAF (Central African CFA Franc), XOF (West African CFA Franc), and major international currencies including USD and EUR.",
  },
  {
    question: "What should I do if my transfer is delayed?",
    answer:
      "Although delays are rare, you can contact our 24/7 customer support through the app, website, email, or WhatsApp for immediate assistance.",
  },
  {
    question: "How do I contact Tunko Support?",
    answer:
      "You can reach our support team 24/7 through live chat, WhatsApp, email, or by visiting any Tunko office in our supported countries.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Find answers to the most common questions about sending money,
            exchange rates, wallets, airtime, and Tunko services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>

              {open === index && (
                <div className="border-t bg-gray-50 px-6 py-5">
                  <p className="leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-green-600 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-lg text-blue-100">
            Our support team is available 24/7 to help you with transfers,
            wallets, exchange rates, and account assistance.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-gray-100">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}