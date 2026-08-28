"use client";

import { Eye, CheckCircle, XCircle, Ban, RotateCw } from "lucide-react";
import { Withdrawal } from "../api/types";

interface WithdrawTableProps {
  withdrawals: Withdrawal[];
  loading?: boolean;
  onView: (withdrawal: Withdrawal) => void;
  onApprove: (withdrawal: Withdrawal) => void;
  onReject: (withdrawal: Withdrawal) => void;
  onCancel: (withdrawal: Withdrawal) => void;
  onRetry: (withdrawal: Withdrawal) => void;
}

export default function WithdrawTable({
  withdrawals,
  loading,
  onView,
  onApprove,
  onReject,
  onCancel,
  onRetry,
}: WithdrawTableProps) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        Loading withdrawals...
      </div>
    );
  }

  if (!withdrawals.length) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center text-gray-500">
        No withdrawals found.
      </div>
    );
  }

  const statusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "processing":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
      case "rejected":
        return "bg-red-100 text-red-700";
      case "cancelled":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="min-w-full">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Reference</th>
            <th className="px-4 py-3 text-left">User</th>
            <th className="px-4 py-3 text-left">Amount</th>
            <th className="px-4 py-3 text-left">Currency</th>
            <th className="px-4 py-3 text-left">Provider</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Created</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {withdrawals.map((withdrawal) => (
            <tr
              key={withdrawal.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="px-4 py-3 font-medium">
                {withdrawal.reference}
              </td>

              <td className="px-4 py-3">
                {withdrawal.user?.first_name}{" "}
                {withdrawal.user?.last_name}
              </td>

              <td className="px-4 py-3">
                {Number(withdrawal.total).toLocaleString()}
              </td>

              <td className="px-4 py-3">
                {withdrawal.currency}
              </td>

              <td className="px-4 py-3">
                {withdrawal.provider ?? "-"}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(
                    withdrawal.status
                  )}`}
                >
                  {withdrawal.status}
                </span>
              </td>

              <td className="px-4 py-3">
                {new Date(
                  withdrawal.created_at
                ).toLocaleDateString()}
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => onView(withdrawal)}
                    title="View"
                  >
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>

                  <button
                    onClick={() => onApprove(withdrawal)}
                    title="Approve"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </button>

                  <button
                    onClick={() => onReject(withdrawal)}
                    title="Reject"
                  >
                    <XCircle className="h-4 w-4 text-red-600" />
                  </button>

                  <button
                    onClick={() => onCancel(withdrawal)}
                    title="Cancel"
                  >
                    <Ban className="h-4 w-4 text-yellow-600" />
                  </button>

                  <button
                    onClick={() => onRetry(withdrawal)}
                    title="Retry"
                  >
                    <RotateCw className="h-4 w-4 text-blue-600" />
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}