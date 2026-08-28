"use client";

import { useMemo } from "react";
import {
  Eye,
 RefreshCw,
  RotateCcw,
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

function formatCurrency(
  amount: number,
  currency = "NGN"
) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
  }).format(amount);
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors: Record<
    string,
    string
  > = {
    success:
      "bg-green-100 text-green-700",

    pending:
      "bg-yellow-100 text-yellow-700",

    processing:
      "bg-blue-100 text-blue-700",

    failed:
      "bg-red-100 text-red-700",

    refunded:
      "bg-purple-100 text-purple-700",

    cancelled:
      "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-medium ${
        colors[status] ??
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}function buildColumns(
  onView: (
    transaction: Transaction
  ) => void,

  onRefund: (
    transaction: Transaction
  ) => void,

  onStatus: (
    transaction: Transaction
  ) => void
): ColumnDef<Transaction>[] {
  return [
    {
      accessorKey: "reference",

      header: "Reference",

      cell: ({ row }) => (
        <div>
          <div className="font-medium">
            {row.original.reference}
          </div>

          <div className="text-xs text-muted-foreground">
            {row.original.gateway_reference ??
              "-"}
          </div>
        </div>
      ),
    },

    {
      accessorKey: "user",

      header: "Customer",

      cell: ({ row }) => (
        <div>
          <div className="font-medium">
            {row.original.user.name}
          </div>

          <div className="text-xs text-muted-foreground">
            {row.original.user.email}
          </div>
        </div>
      ),
    },

    {
      accessorKey: "type",

      header: "Type",
    },

    {
      accessorKey: "status",

      header: "Status",

      cell: ({ row }) => (
        <StatusBadge
          status={
            row.original.status
          }
        />
      ),
    },

    {
      accessorKey: "amount",

      header: "Amount",

      cell: ({ row }) =>
        formatCurrency(
          row.original.amount,
          row.original.currency
        ),
    },

    {
      accessorKey:
        "payment_gateway",

      header: "Gateway",
    },

    {
      accessorKey:
        "created_at",

      header: "Date",

      cell: ({ row }) =>
        new Date(
          row.original.created_at
        ).toLocaleString(),
    },

    {
      id: "actions",

      header: "Actions",

      cell: ({ row }) => (
        <div className="flex gap-2">

          <button
            onClick={() =>
              onView(
                row.original
              )
            }
            className="rounded border p-2 hover:bg-muted"
          >
            <Eye size={16} />
          </button>

          <button
            onClick={() =>
              onStatus(
                row.original
              )
            }
            className="rounded border p-2 hover:bg-muted"
          >
            <RefreshCw
              size={16}
            />
          </button>

          {row.original
            .can_refund && (
            <button
              onClick={() =>
                onRefund(
                  row.original
                )
              }
              className="rounded border p-2 hover:bg-muted"
            >
              <RotateCcw
                size={16}
              />
            </button>
          )}

        </div>
      ),
    },
  ];
}export default function TransactionTable({
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

  const columns =
    useMemo(
      () =>
        buildColumns(
          onView,
          onRefund,
          onStatus
        ),
      [
        onView,
        onRefund,
        onStatus,
      ]
    );

  const table =
    useReactTable({

      data: transactions,

      columns,

      getCoreRowModel:
        getCoreRowModel(),
    });  if (loading) {
    return (
      <div className="rounded-xl border bg-background">
        <div className="flex items-center justify-center p-10">
          <span className="text-sm text-muted-foreground">
            Loading transactions...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border bg-background">
        <div className="flex items-center justify-center p-10">
          <span className="text-sm font-medium text-red-600">
            Failed to load transactions.
          </span>
        </div>
      </div>
    );
  }

  if (!transactions.length) {
    return (
      <div className="rounded-xl border bg-background">
        <div className="flex items-center justify-center p-10">
          <span className="text-sm text-muted-foreground">
            No transactions found.
          </span>
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
                    className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap"
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
                    className="px-4 py-4 text-sm align-top whitespace-nowrap"
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

      </div>      {pagination && (
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

          <div className="flex items-center gap-2">

            <button
              type="button"
              disabled={pagination.current_page <= 1}
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
              Page {pagination.current_page} of {pagination.last_page}
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