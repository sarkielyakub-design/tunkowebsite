"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Deposit } from "../types/deposit";interface DepositDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deposit: Deposit | null;
}function StatusBadge({ status }: { status: string }) {
  const colors: Record<
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
    <Badge variant={colors[status] ?? "outline"}>
      {status.toUpperCase()}
    </Badge>
  );
}export default function DepositDetailsDrawer({
  open,
  onOpenChange,
  deposit,
}: DepositDetailsDrawerProps) {
  if (!deposit) return null;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle>
            Deposit #{deposit.reference}
          </DrawerTitle>
        </DrawerHeader>

        <div className="space-y-6 p-6">

          {/* Deposit */}
          <div>
            <h3 className="font-semibold mb-3">
              Deposit Information
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info label="Reference" value={deposit.reference} />

              <Info
                label="Status"
                value={<StatusBadge status={deposit.status} />}
              />

              <Info
                label="Amount"
                value={`${deposit.amount} ${deposit.currency}`}
              />

              <Info
                label="Fee"
                value={`${deposit.fee} ${deposit.currency}`}
              />

              <Info
                label="Total"
                value={`${deposit.total} ${deposit.currency}`}
              />

              <Info
                label="Gateway"
                value={deposit.gateway ?? "-"}
              />

              <Info
                label="Payment Method"
                value={deposit.payment_method ?? "-"}
              />
            </div>
          </div>

          <Separator />

          {/* Customer */}
          <div>
            <h3 className="font-semibold mb-3">
              Customer
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Name"
                value={deposit.user.name}
              />

              <Info
                label="Email"
                value={deposit.user.email}
              />

              <Info
                label="Phone"
                value={deposit.user.phone}
              />
            </div>
          </div>

          <Separator />

          {/* Wallet */}
          <div>
            <h3 className="font-semibold mb-3">
              Wallet
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Wallet ID"
                value={deposit.wallet.id}
              />

              <Info
                label="Balance"
                value={`${deposit.wallet.balance} ${deposit.wallet.currency}`}
              />
            </div>
          </div>

          <Separator />

          {/* Provider */}
          <div>
            <h3 className="font-semibold mb-3">
              Provider Response
            </h3>

            <div className="grid gap-4">

              <Info
                label="Provider Status"
                value={deposit.provider_status ?? "-"}
              />

              <Info
                label="Gateway Reference"
                value={deposit.gateway_reference ?? "-"}
              />

              <Info
                label="Response"
                value={deposit.provider_response ?? "-"}
              />
            </div>
          </div>

          <Separator />

          {/* Timeline */}
          <div>
            <h3 className="font-semibold mb-3">
              Timeline
            </h3>

            <div className="grid gap-4">

              <Info
                label="Created"
                value={deposit.created_at}
              />

              <Info
                label="Approved"
                value={deposit.approved_at ?? "-"}
              />

              <Info
                label="Completed"
                value={deposit.completed_at ?? "-"}
              />

              <Info
                label="Admin Note"
                value={deposit.admin_note ?? "-"}
              />
            </div>
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}function Info({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <div className="font-medium mt-1">
        {value}
      </div>
    </div>
  );
}