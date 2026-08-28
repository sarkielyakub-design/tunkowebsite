"use client";

import {
  Eye,
  CheckCircle,
  XCircle,
  Ban,
  RotateCw,
} from "lucide-react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../../../../components/ui/table";

import { Button } from "../../../../../components/ui/button";

import { Badge } from "../../../../../components/ui/badge";

import { Transfer } from "../types/transfer";

interface Props {
  transfers: Transfer[];

  loading?: boolean;

  onView: (transfer: Transfer) => void;

  onApprove: (transfer: Transfer) => void;

  onReject: (transfer: Transfer) => void;

  onCancel: (transfer: Transfer) => void;

  onRetry: (transfer: Transfer) => void;
}function StatusBadge({
  status,
}: {
  status: string;
}) {
  const variants: Record<string, any> = {

    pending: "secondary",

    processing: "outline",

    completed: "default",

    approved: "default",

    rejected: "destructive",

    failed: "destructive",

    cancelled: "secondary",

  };

  return (
    <Badge
      variant={
        variants[status] ?? "secondary"
      }
    >
      {status}
    </Badge>
  );
}function buildColumns(
  props: Props
): ColumnDef<Transfer>[] {
  return [

    {
      accessorKey: "reference",

      header: "Reference",
    },

    {
      id: "sender",

      header: "Sender",

      cell: ({ row }) => (
        <div>

          <div className="font-medium">
            {row.original.sender.name}
          </div>

          <div className="text-xs text-muted-foreground">
            {row.original.sender.email}
          </div>

        </div>
      ),
    },

    {
      id: "recipient",

      header: "Recipient",

      cell: ({ row }) => (
        <div>

          <div className="font-medium">
            {row.original.recipient.name}
          </div>

          <div className="text-xs text-muted-foreground">
            {row.original.recipient.bank_name}
          </div>

        </div>
      ),
    },    {
      accessorKey: "amount",

      header: "Amount",

      cell: ({ row }) =>

        Number(
          row.original.amount
        ).toLocaleString(),
    },

    {
      accessorKey: "fee",

      header: "Fee",

      cell: ({ row }) =>

        Number(
          row.original.fee
        ).toLocaleString(),
    },

    {
      accessorKey: "total",

      header: "Total",

      cell: ({ row }) =>

        Number(
          row.original.total
        ).toLocaleString(),
    },

    {
      accessorKey: "provider",

      header: "Provider",
    },

    {
      id: "status",

      header: "Status",

      cell: ({ row }) => (
        <StatusBadge
          status={row.original.status}
        />
      ),
    },    {
      id: "actions",

      header: "Actions",

      cell: ({ row }) => {

        const transfer = row.original;

        return (

          <div className="flex gap-2">

            <Button
              size="icon"
              variant="ghost"
              onClick={() =>
                props.onView(transfer)
              }
            >
              <Eye className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() =>
                props.onApprove(transfer)
              }
            >
              <CheckCircle className="h-4 w-4 text-green-600" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() =>
                props.onReject(transfer)
              }
            >
              <XCircle className="h-4 w-4 text-red-600" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() =>
                props.onCancel(transfer)
              }
            >
              <Ban className="h-4 w-4 text-orange-600" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() =>
                props.onRetry(transfer)
              }
            >
              <RotateCw className="h-4 w-4" />
            </Button>

          </div>

        );
      },
    },

  ];
}export default function TransferTable(
  props: Props
) {
  const table = useReactTable({

    data: props.transfers,

    columns: buildColumns(props),

    getCoreRowModel:
      getCoreRowModel(),

  });

  if (props.loading) {

    return (
      <div className="py-12 text-center">
        Loading transfers...
      </div>
    );

  }

  return (

    <Table>

      <TableHeader>

        {table
          .getHeaderGroups()
          .map((group) => (

            <TableRow key={group.id}>

              {group.headers.map((header) => (

                <TableHead key={header.id}>

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                </TableHead>

              ))}

            </TableRow>

          ))}

      </TableHeader>

      <TableBody>

        {table
          .getRowModel()
          .rows
          .map((row) => (

            <TableRow key={row.id}>

              {row
                .getVisibleCells()
                .map((cell) => (

                  <TableCell key={cell.id}>

                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}

                  </TableCell>

                ))}

            </TableRow>

          ))}

      </TableBody>

    </Table>

  );
}