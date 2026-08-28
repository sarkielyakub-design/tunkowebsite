"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="hidden lg:flex items-center gap-3">

      {/* Login */}
      <Link
        href="/login"
        className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-600 hover:text-emerald-600"
      >
        Login
      </Link>

      {/* Register */}
      <Link
        href="/register"
        className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl"
      >
        Register
      </Link>

      {/* Download App */}
      <Link
        href="/download"
        className="flex items-center gap-2 rounded-xl border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
      >
        <Download className="h-4 w-4" />
        Download App
      </Link>

    </div>
  );
}