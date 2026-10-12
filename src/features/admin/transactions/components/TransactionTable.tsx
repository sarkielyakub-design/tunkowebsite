"use client";

import { useMemo } from "react";
import {
  Eye,
  RefreshCw,
  RotateCcw,
  AlertCircle,
} from "lucide-react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type {
  Transaction,
  Pagination,
  TransactionFilters,
} from "../types/transaction";

interface Props {
  transactions: Transaction[];
  loading: boolean;
  error: unknown;
  pagination?: Pagination;
  filters: TransactionFilters;

  onFiltersChange: (
    filters: TransactionFilters
  ) => void;

  onView: (
    transaction: Transaction
  ) => void;

  onRefund: (
    transaction: Transaction
  ) => void;

  onStatus: (
    transaction: Transaction
  ) => void;
}

/**
 * Formats transaction amounts safely.
 * Missing currency defaults to NGN for display only.
 */
function formatCurrency(
  amount: number | string | null | undefined,
  currency?: string | null
): string {
  const normalizedCurrency =
    typeof currency === "string" && currency.trim()
      ? currency.trim().toUpperCase()
      : "NGN";

  const parsedAmount =
    amount === null ||
    amount === undefined ||
    amount === ""
      ? 0
      : Number(amount);

  const safeAmount = Number.isFinite(parsedAmount)
    ? parsedAmount
    : 0;

  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: normalizedCurrency,
    }).format(safeAmount);
  } catch (error) {
    console.error("[TransactionTable] Currency formatting failed", {
      currency,
      normalizedCurrency,
      amount,
      error,
    });

    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(safeAmount);
  }
}

function formatDate(value?: string | null): string {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleString();
}

function displayValue(
  value?: string | number | null
): string {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  return String(value);
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const normalizedStatus = status?.toLowerCase() || "unknown";

  const colors: Record<string, string> = {
    success: "bg-green-100 text-green-700",
    successful: "bg-green-100 text-green-700",
    completed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    failed: "bg-red-100 text-red-700",
    refunded: "bg-purple-100 text-purple-700",
    cancelled: "bg-gray-100 text-gray-700",
    canceled: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        colors[normalizedStatus] ??
        "bg-gray-100 text-gray-700"
      }`}
    >
      {normalizedStatus.replace(/_/g, " ")}
    </span>
  );
}

function buildColumns(
  onView: (transaction: Transaction) => void,
  onRefund: (transaction: Transaction) => void,
  onStatus: (transaction: Transaction) => void
): ColumnDef<Transaction>[] {
  return [
    {
      accessorKey: "reference",
      header: "Reference",
      cell: ({ row }) => {
        const transaction = row.original;

        return (
          <div className="min-w-32">
            <div className="font-medium text-gray-900">
              {displayValue(transaction.reference)}
            </div>

            <div className="mt-1 text-xs text-muted-foreground">
              {displayValue(transaction.gateway_reference)}
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "user",
      header: "Customer",
      cell: ({ row }) => {
        const user = row.original.user;

        return (
          <div className="min-w-36">
            <div className="font-medium text-gray-900">
              {displayValue(user?.name)}
            </div>

            <div className="mt-1 text-xs text-muted-foreground">
              {displayValue(user?.email)}
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => (
        <span className="capitalize">
          {displayValue(row.original.type)}
        </span>
      ),
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <StatusBadge
          status={String(row.original.status ?? "unknown")}
        />
      ),
    },

    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const transaction = row.original;

        return (
          <span className="font-semibold tabular-nums text-gray-900">
            {formatCurrency(
              transaction.amount,
              transaction.currency
            )}
          </span>
        );
      },
    },

    {
      accessorKey: "payment_gateway",
      header: "Gateway",
      cell: ({ row }) => (
        <span>
          {displayValue(row.original.payment_gateway)}
        </span>
      ),
    },

    {
      accessorKey: "created_at",
      header: "Date",
      cell: ({ row }) => (
        <span className="text-sm text-gray-600">
          {formatDate(row.original.created_at)}
        </span>
      ),
    },

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const transaction = row.original;

        return (
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="View transaction"
              title="View transaction"
              onClick={() => onView(transaction)}
              className="rounded-lg border p-2 transition hover:bg-muted"
            >
              <Eye size={16} />
            </button>

            <button
              type="button"
              aria-label="Refresh transaction status"
              title="Refresh transaction status"
              onClick={() => onStatus(transaction)}
              className="rounded-lg border p-2 transition hover:bg-muted"
            >
              <RefreshCw size={16} />
            </button>

            {transaction.can_refund && (
              <button
                type="button"
                aria-label="Refund transaction"
                title="Refund transaction"
                onClick={() => onRefund(transaction)}
                className="rounded-lg border p-2 text-purple-700 transition hover:bg-purple-50"
              >
                <RotateCcw size={16} />
              </button>
            )}
          </div>
        );
      },
    },
  ];
}

export default function TransactionTable({
  transactions,
  loading,
  error,
  pagination,
  filters,
  onFiltersChange,
  onView,
  onRefund,
  onStatus,
}: Props) {
  const columns = useMemo(
    () => buildColumns(onView, onRefund, onStatus),
    [onView, onRefund, onStatus]
  );

  const safeTransactions = Array.isArray(transactions)
    ? transactions
    : [];

  const table = useReactTable({
    data: safeTransactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return (
      <div className="rounded-xl border bg-background">
        <div className="flex items-center justify-center gap-3 p-10">
          <RefreshCw
            size={18}
            className="animate-spin text-muted-foreground"
          />

          <span className="text-sm text-muted-foreground">
            Loading transactions...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-red-200 bg-background"
      >
        <div className="flex items-center justify-center gap-3 p-10">
          <AlertCircle size={20} className="text-red-600" />

          <div>
            <p className="text-sm font-semibold text-red-600">
              Failed to load transactions.
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Check your connection and administrator permissions, then try again.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!safeTransactions.length) {
    return (
      <div className="rounded-xl border bg-background">
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <div className="rounded-full bg-muted p-3">
            <AlertCircle
              size={22}
              className="text-muted-foreground"
            />
          </div>

          <p className="mt-3 font-medium text-gray-900">
            No transactions found
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Transactions will appear here when records match your filters.
          </p>

          {pagination && pagination.total > 0 && (
            <button
              type="button"
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  page: 1,
                })
              }
              className="mt-4 rounded-lg border px-4 py-2 text-sm hover:bg-muted"
            >
              Return to first page
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="whitespace-nowrap px-4 py-3 text-left text-sm font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b transition-colors hover:bg-muted/30"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="whitespace-nowrap px-4 py-4 text-sm align-top"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex flex-col gap-4 border-t px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium">
              {pagination.from ?? 0}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {pagination.to ?? 0}
            </span>{" "}
            of{" "}
            <span className="font-medium">
              {pagination.total}
            </span>{" "}
            transactions
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={
                pagination.current_page <= 1
              }
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  page: pagination.current_page - 1,
                })
              }
              className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <span className="rounded-lg border px-4 py-2 text-sm">
              Page {pagination.current_page} of{" "}
              {pagination.last_page}
            </span>

            <button
              type="button"
              disabled={
                pagination.current_page >=
                pagination.last_page
              }
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  page: pagination.current_page + 1,
                })
              }
              className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
