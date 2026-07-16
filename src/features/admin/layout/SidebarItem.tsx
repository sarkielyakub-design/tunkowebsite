"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string | number;
}

export default function SidebarItem({
  href,
  label,
  icon: Icon,
  badge,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={clsx(
        "group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
        active
          ? "bg-blue-600 text-white shadow-lg"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      )}
    >
      <div className="flex items-center gap-4">
        <Icon className="h-5 w-5 flex-shrink-0" />

        <span className="font-medium">
          {label}
        </span>
      </div>

      {badge && (
        <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}