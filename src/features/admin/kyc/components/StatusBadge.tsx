"use client";

import { cn } from "@/lib/utils";

interface Props {
  status:
    | "pending"
    | "under_review"
    | "approved"
    | "rejected"
    | "expired";
}

const STATUS_STYLES = {
  pending: {
    label: "Pending",
    className:
      "bg-yellow-100 text-yellow-800 border-yellow-200",
  },

  under_review: {
    label: "Under Review",
    className:
      "bg-blue-100 text-blue-800 border-blue-200",
  },

  approved: {
    label: "Approved",
    className:
      "bg-green-100 text-green-800 border-green-200",
  },

  rejected: {
    label: "Rejected",
    className:
      "bg-red-100 text-red-800 border-red-200",
  },

  expired: {
    label: "Expired",
    className:
      "bg-gray-100 text-gray-700 border-gray-200",
  },
} as const;

export default function StatusBadge({
  status,
}: Props) {
  const config = STATUS_STYLES[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}