"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  ShieldCheck,
  Users,
  Wallet,
  Send,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in minutes using your email address or phone number.",
    icon: UserPlus,
    color: "bg-green-100 text-green-600",
  },
  {
    number: "02",
    title: "Verify Your Identity",
    description:
      "Complete a quick KYC verification to unlock all services securely.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    number: "03",
    title: "Choose Recipient",
    description:
      "Select an existing recipient or add a new beneficiary.",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    number: "04",
    title: "Enter Amount",
    description:
      "Choose how much money you want to send and review live exchange rates.",
    icon: Wallet,
    color: "bg-purple-100 text-purple-600",
  },
  {
    number: "05",
    title: "Send Money",
    description:
      "Confirm your payment securely using your wallet or supported payment method.",
    icon: Send,
    color: "bg-pink-100 text-pink-600",
  },
  {
    number: "06",
    title: "Transfer Completed",
    description:
      "The recipient receives the money instantly and both parties are notified.",
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function ServiceHowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Send Money
            <span className="text-green-600">
              {" "}In Six Easy Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've made international transfers simple,
            secure and fast for everyone.
          </p>

        </motion.div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-green-100 lg:block" />

          <div className="space-y-12">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.number}
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
                  transition={{
                    delay: index * .1,
                  }}
                  className={`flex flex-col items-center gap-10 lg:flex-row ${
                    index % 2 === 0
                      ? ""
                      : "lg:flex-row-reverse"
                  }`}
                >

                  <div className="flex-1">

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

                      <div className="flex items-center gap-5">

                        <div
                          className={`rounded-2xl p-4 ${step.color}`}
                        >
                          <Icon size={30} />
                        </div>

                        <div>

                          <span className="text-green-600 font-bold">
                            STEP {step.number}
                          </span>

                          <h3 className="text-2xl font-bold mt-1">
                            {step.title}
                          </h3>

                        </div>

                      </div>

                      <p className="mt-6 leading-7 text-gray-600">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* Timeline Dot */}

                  <div className="relative z-10 hidden h-6 w-6 rounded-full border-4 border-white bg-green-600 shadow lg:block" />

                  <div className="flex-1" />

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}