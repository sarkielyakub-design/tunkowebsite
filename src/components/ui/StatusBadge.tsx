"use client";

interface Props {
  status:
    | "active"
    | "inactive"
    | "pending"
    | "approved"
    | "rejected"
    | "completed"
    | "failed";
}

export default function StatusBadge({
  status,
}: Props) {

  const colors = {
    active:
      "bg-green-100 text-green-700",

    inactive:
      "bg-red-100 text-red-700",

    pending:
      "bg-yellow-100 text-yellow-700",

    approved:
      "bg-blue-100 text-blue-700",

    rejected:
      "bg-red-100 text-red-700",

    completed:
      "bg-green-100 text-green-700",

    failed:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[status]
      }`}
    >
      {status}
    </span>
  );
}