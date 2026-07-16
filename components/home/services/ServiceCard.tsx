"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-lg
        hover:border-green-500
        hover:shadow-2xl
      "
    >
      {/* Header */}

      <div
        className={`bg-gradient-to-r ${service.color} p-8 text-white`}
      >
        <div className="flex items-center justify-between">

          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <Icon size={34} />
          </div>

          <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            Available
          </div>

        </div>

        <h3 className="mt-8 text-2xl font-bold">
          {service.title}
        </h3>

        <p className="mt-3 text-white/90 leading-7">
          {service.description}
        </p>

      </div>

      {/* Body */}

      <div className="space-y-4 p-8">

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-green-500" />

          <span>Instant Processing</span>

        </div>

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-green-500" />

          <span>Bank-Level Security</span>

        </div>

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-green-500" />

          <span>Available 24/7</span>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t bg-slate-50 p-6">

        <Link
          href={`/services/${service.id}`}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-green-600
            px-6
            py-4
            font-semibold
            text-white
            transition-all
            hover:bg-green-700
          "
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

      </div>

    </motion.div>
  );
}