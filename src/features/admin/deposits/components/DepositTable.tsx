"use client";

import { Eye, CheckCircle, XCircle, Ban } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Deposit } from "../types/deposit";interface DepositTableProps {
  deposits: Deposit[];

  onView: (deposit: Deposit) => void;

  onApprove: (deposit: Deposit) => void;

  onReject: (deposit: Deposit) => void;

  onCancel: (deposit: Deposit) => void;
}function StatusBadge({ status }: { status: string }) {
  const variants: Record<
    string,
    "default" | "secondary" | "destructive" | "outline"
  > = {
    pending: "secondary",
    completed: "default",
    failed: "destructive",
    rejected: "destructive",
    cancelled: "outline",
  };

  return (
    <Badge variant={variants[status] ?? "outline"}>
      {status.toUpperCase()}
    </Badge>
  );
}export default function DepositTable({
  deposits,
  onView,
  onApprove,
  onReject,
  onCancel,
}: DepositTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reference</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Wallet</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Gateway</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {deposits.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={11 as any}
                className="text-center py-10"
              >
                No deposits found.
              </TableCell>
            </TableRow>
          ) : (
            deposits.map((deposit) => (
              <TableRow key={deposit.id}>
                <TableCell className="font-medium">
                  {deposit.reference}
                </TableCell>

                <TableCell>
                  <div>
                    <p>{deposit.user.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {deposit.user.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  {deposit.wallet.currency}
                </TableCell>

                <TableCell>
                  {Number(deposit.amount).toLocaleString()}
                </TableCell>

                <TableCell>
                  {Number(deposit.fee).toLocaleString()}
                </TableCell>

                <TableCell>
                  {Number(deposit.total).toLocaleString()}
                </TableCell>

                <TableCell>
                  {deposit.gateway ?? "-"}
                </TableCell>

                <TableCell>
                  {deposit.payment_method ?? "-"}
                </TableCell>

                <TableCell>
                  <StatusBadge status={deposit.status} />
                </TableCell>

                <TableCell>
                  {new Date(
                    deposit.created_at
                  ).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => onView(deposit)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    {deposit.status === "pending" && (
                      <>
                        <Button
                          size="icon"
                          onClick={() =>
                            onApprove(deposit)
                          }
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() =>
                            onReject(deposit)
                          }
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="secondary"
                          onClick={() =>
                            onCancel(deposit)
                          }
                        >
                          <Ban className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}