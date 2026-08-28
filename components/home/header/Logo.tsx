"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo.png"
        alt="Tunko Money"
        width={48}
        height={48}
        priority
      />

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Tunko
        </h2>

        <p className="text-xs text-slate-500">
          Money Transfer
        </p>
      </div>
    </Link>
  );
}