"use client";

import { X } from "lucide-react";

import type { Transaction } from "../types/transaction";

interface TransactionDetailsDrawerProps {
  open: boolean;
  transaction: Transaction | null;
  onClose: () => void;
}

export default function TransactionDetailsDrawer({
  open,
  transaction,
  onClose,
}: TransactionDetailsDrawerProps) {
  if (!open || !transaction) return null;

  const formatCurrency = (
    amount: number,
    currency = "NGN"
  ) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
    }).format(amount);

  const formatDate = (date: string) =>
    new Date(date).toLocaleString();

  const statusColors: Record<string, string> = {
    success: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    failed: "bg-red-100 text-red-700",
    refunded: "bg-purple-100 text-purple-700",
    cancelled: "bg-gray-100 text-gray-700",
  };  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-2xl overflow-y-auto bg-background shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b bg-background px-6 py-5">

          <div>

            <h2 className="text-xl font-semibold">
              Transaction Details
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {transaction.reference}
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border p-2 transition hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        <div className="space-y-6 p-6">

          {/* Status */}
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                Current Status
              </p>

              <span
                className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  statusColors[transaction.status] ??
                  "bg-gray-100 text-gray-700"
                }`}
              >
                {transaction.status}
              </span>

            </div>

            <div className="text-right">

              <p className="text-sm text-muted-foreground">
                Amount
              </p>

              <h3 className="text-2xl font-bold">
                {formatCurrency(
                  transaction.amount,
                  transaction.currency
                )}
              </h3>

            </div>

          </div>          {/* Customer Information */}
          <div className="rounded-xl border">

            <div className="border-b px-5 py-3">
              <h3 className="font-semibold">
                Customer Information
              </h3>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2">

              <div>
                <p className="text-sm text-muted-foreground">
                  Full Name
                </p>

                <p className="font-medium">
                  {transaction.user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Email Address
                </p>

                <p className="font-medium break-all">
                  {transaction.user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone Number
                </p>

                <p className="font-medium">
                  {transaction.user.phone || "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  User ID
                </p>

                <p className="font-medium">
                  #{transaction.user.id}
                </p>
              </div>

            </div>

          </div>

          {/* Transaction Information */}
          <div className="rounded-xl border">

            <div className="border-b px-5 py-3">
              <h3 className="font-semibold">
                Transaction Information
              </h3>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2">

              <div>
                <p className="text-sm text-muted-foreground">
                  Reference
                </p>

                <p className="font-medium break-all">
                  {transaction.reference}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Gateway Reference
                </p>

                <p className="font-medium break-all">
                  {transaction.gateway_reference || "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Transaction Type
                </p>

                <p className="font-medium capitalize">
                  {transaction.type}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Payment Gateway
                </p>

                <p className="font-medium capitalize">
                  {transaction.payment_gateway}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Currency
                </p>

                <p className="font-medium">
                  {transaction.currency}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Fee
                </p>

                <p className="font-medium">
                  {formatCurrency(
                    transaction.fee,
                    transaction.currency
                  )}
                </p>
              </div>

            </div>

          </div>

          {/* Payment Details */}
          <div className="rounded-xl border">

            <div className="border-b px-5 py-3">
              <h3 className="font-semibold">
                Payment Details
              </h3>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2">

              <div>
                <p className="text-sm text-muted-foreground">
                  Created At
                </p>

                <p className="font-medium">
                  {formatDate(transaction.created_at)}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Completed At
                </p>

                <p className="font-medium">
                  {transaction.completed_at
                    ? formatDate(transaction.completed_at)
                    : "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Updated At
                </p>

                <p className="font-medium">
                  {formatDate(transaction.updated_at)}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Description
                </p>

                <p className="font-medium">
                  {transaction.description || "-"}
                </p>
              </div>

            </div>

          </div>          {/* Refund Information */}
          {transaction.refund?.refunded_at && (
            <div className="rounded-xl border">

              <div className="border-b px-5 py-3">
                <h3 className="font-semibold">
                  Refund Information
                </h3>
              </div>

              <div className="grid gap-4 p-5 md:grid-cols-2">

                <div>
                  <p className="text-sm text-muted-foreground">
                    Refunded At
                  </p>

                  <p className="font-medium">
                    {transaction.refund?.refunded_at
                      ? formatDate(transaction.refund.refunded_at)
                      : "-"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Refund Amount
                  </p>

                  <p className="font-medium">
                    {formatCurrency(
                      transaction.amount,
                      transaction.currency
                    )}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Refund Reason
                  </p>

                  <p className="font-medium">
                    {transaction.meta.admin_note ?? transaction.meta.note ?? "-"}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* Metadata */}
          {transaction.meta &&
            Object.keys(transaction.meta)
              .length > 0 && (
              <div className="rounded-xl border">

                <div className="border-b px-5 py-3">
                  <h3 className="font-semibold">
                    Metadata
                  </h3>
                </div>

                <div className="p-5">

                  <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                    {JSON.stringify(
                      transaction.meta,
                      null,
                      2
                    )}
                  </pre>

                </div>

              </div>
            )}

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 flex items-center justify-end gap-3 border-t bg-background px-6 py-4">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-muted"
          >
            Close
          </button>

          {transaction.can_update_status && (
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Update Status
            </button>
          )}

          {transaction.can_refund && (
            <button
              type="button"
              className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Refund
            </button>
          )}

        </div>

      </div>
    </>
  );
}