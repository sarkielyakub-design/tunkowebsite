"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

interface SidebarLogoProps {
  collapsed?: boolean;
}

export default function SidebarLogo({
  collapsed = false,
}: SidebarLogoProps) {
  return (
    <Link
      href="/admin/dashboard"
      className="flex items-center gap-3 border-b border-slate-800 px-5 py-6"
    >
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow">

        <Image
          src="/logo/logo.png"
          alt="Tunko"
          fill
          className="object-contain p-2"
          priority
        />

      </div>

      {!collapsed && (
        <div className="flex flex-col">

          <span className="text-lg font-bold text-white">
            Tunko
          </span>

          <div className="flex items-center gap-1">

            <BadgeCheck className="h-4 w-4 text-blue-400" />

            <span className="text-xs text-slate-400">
              Admin Dashboard
            </span>

          </div>

        </div>
      )}
    </Link>
  );
}