"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiShare2 } from "react-icons/fi";

export default function ReceiptHeader() {
  return (
    <div className="relative bg-white rounded-t-3xl">

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6">

        <Link
          href="/dashboard"
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
        >
          <FiArrowLeft className="text-gray-700" size={22} />
        </Link>

        <h1 className="text-center text-base md:text-lg font-bold tracking-wide text-gray-800">
          MONEY TRANSFER RECEIPT
        </h1>

        <button
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
        >
          <FiShare2 className="text-gray-700" size={20} />
        </button>

      </div>

      {/* Logo */}
      <div className="flex justify-center mt-8">

        <Image
          src="/images/logo.png"
          alt="Tunko Money"
          width={120}
          height={120}
          priority
          className="object-contain"
        />

      </div>

      {/* Company */}
      <div className="text-center mt-4">

        <h2 className="text-2xl font-bold text-[#0047AB]">
          TUNKO MONEY
        </h2>

        <p className="text-gray-500 mt-2">
          International Money Transfer
        </p>

      </div>

      {/* Divider */}
      <div className="px-8 mt-8">

        <div className="border-t border-dashed border-gray-300"></div>

      </div>

    </div>
  );
}