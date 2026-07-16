interface ReceiptStatusProps {
  status: string;
}

export default function ReceiptStatus({
  status,
}: ReceiptStatusProps) {
  const normalized = status.toUpperCase();

  const styles = {
    SUCCESS: {
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-600",
      label: "SUCCESS",
    },
    PENDING: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      dot: "bg-yellow-500",
      label: "PENDING",
    },
    FAILED: {
      bg: "bg-red-100",
      text: "text-red-700",
      dot: "bg-red-600",
      label: "FAILED",
    },
    CANCELLED: {
      bg: "bg-gray-200",
      text: "text-gray-700",
      dot: "bg-gray-500",
      label: "CANCELLED",
    },
  } as const;

  const current =
    styles[normalized as keyof typeof styles] ??
    {
      bg: "bg-blue-100",
      text: "text-blue-700",
      dot: "bg-blue-600",
      label: normalized,
    };

  return (
    <div className="flex justify-center py-6">
      <div
        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm ${current.bg} ${current.text}`}
      >
        <span
          className={`w-3 h-3 rounded-full ${current.dot}`}
        />

        {current.label}
      </div>
    </div>
  );
}