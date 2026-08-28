"use client";

import { X } from "lucide-react";
import { Withdrawal } from "../api/types";

interface WithdrawDetailsDrawerProps {
  open: boolean;
  withdrawal?: Withdrawal | null;
  onClose: () => void;
}

export default function WithdrawDetailsDrawer({
  open,
  withdrawal,
  onClose,
}: WithdrawDetailsDrawerProps) {
  if (!open || !withdrawal) return null;

  const Item = ({
    label,
    value,
  }: {
    label: string;
    value: React.ReactNode;
  }) => (
    <div className="border-b py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 font-medium break-all">
        {value ?? "-"}
      </p>
    </div>
  );

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-xl overflow-y-auto bg-white shadow-xl">

        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Withdrawal Details
          </h2>

          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-1 p-6">

          <Item
            label="Reference"
            value={withdrawal.reference}
          />

          <Item
            label="Status"
            value={withdrawal.status}
          />

          <Item
            label="User"
            value={`${withdrawal.user?.first_name ?? ""} ${withdrawal.user?.last_name ?? ""}`}
          />

          <Item
            label="Wallet"
            value={withdrawal.wallet?.id}
          />

          <Item
            label="Amount"
            value={withdrawal.amount}
          />

          <Item
            label="Fee"
            value={withdrawal.fee}
          />

          <Item
            label="Total"
            value={withdrawal.total}
          />

          <Item
            label="Currency"
            value={withdrawal.currency}
          />

          <Item
            label="Provider"
            value={withdrawal.provider}
          />

          <Item
            label="Provider Reference"
            value={withdrawal.provider_reference}
          />

          <Item
            label="Provider Status"
            value={withdrawal.provider_status}
          />

          <Item
            label="Reject Reason"
            value={withdrawal.reject_reason}
          />

          <Item
            label="Cancel Reason"
            value={withdrawal.cancel_reason}
          />

          <Item
            label="Admin Note"
            value={withdrawal.admin_note}
          />

          <Item
            label="Created At"
            value={new Date(
              withdrawal.created_at
            ).toLocaleString()}
          />

          <Item
            label="Updated At"
            value={new Date(
              withdrawal.updated_at
            ).toLocaleString()}
          />

        </div>
      </div>
    </>
  );
}