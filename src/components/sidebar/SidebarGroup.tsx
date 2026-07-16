"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  hrefs?: string[];
}

export default function SidebarGroup({
  title,
  children,
  defaultOpen = false,
  hrefs = [],
}: SidebarGroupProps) {
  const pathname = usePathname();

  const hasActiveChild = hrefs.some((href) =>
    pathname.startsWith(href)
  );

  const [open, setOpen] = useState(
    defaultOpen || hasActiveChild
  );

  useEffect(() => {
    if (hasActiveChild) {
      setOpen(true);
    }
  }, [hasActiveChild]);

  return (
    <div className="space-y-2">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={clsx(
          "flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
          open
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        )}
      >
        <span className="text-sm font-semibold uppercase tracking-wide">
          {title}
        </span>

        <ChevronDown
          className={clsx(
            "h-4 w-4 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          open
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 pl-2">
          {children}
        </div>
      </div>

    </div>
  );
}