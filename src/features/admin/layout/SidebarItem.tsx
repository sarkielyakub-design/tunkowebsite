"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function SidebarItem({
  href,
  title,
  icon: Icon,
  active,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
        active
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <Icon size={20} />
      <span className="font-medium">{title}</span>
    </Link>
  );
}