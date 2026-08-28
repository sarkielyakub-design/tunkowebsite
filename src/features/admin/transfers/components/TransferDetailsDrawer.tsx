"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Transfer } from "../types/transfer";interface Props {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  transfer?: Transfer | null;
}export default function TransferDetailsDrawer({
  open,
  onOpenChange,
  transfer,
}: Props) {
  if (!transfer) return null;

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>
            Transfer Details
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">          <section>

            <h3 className="font-semibold mb-3">
              Transfer
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Reference"
                value={transfer.reference}
              />

              <Info
                label="Status"
                value={
                  <Badge>
                    {transfer.status}
                  </Badge>
                }
              />

              <Info
                label="Provider"
                value={transfer.provider ?? "-"}
              />

              <Info
                label="Provider Ref"
                value={
                  transfer.provider_reference ??
                  "-"
                }
              />

            </div>

          </section>

          <Separator />          <section>

            <h3 className="font-semibold mb-3">
              Sender
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Name"
                value={transfer.sender.name}
              />

              <Info
                label="Email"
                value={transfer.sender.email}
              />

              <Info
                label="Phone"
                value={transfer.sender.phone}
              />

            </div>

          </section>

          <Separator />         
           <section>

            <h3 className="font-semibold mb-3">
              Recipient
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Name"
                value={transfer.recipient.name}
              />

              <Info
                label="Email"
                value={transfer.recipient.email}
              />

              <Info
                label="Phone"
                value={transfer.recipient.phone}
              />

              <Info
                label="Bank"
                value={transfer.recipient.bank_name}
              />

              <Info
                label="Account"
                value={
                  transfer.recipient.account_number
                }
              />

              <Info
                label="Country"
                value={transfer.recipient.country}
              />

            </div>

          </section>

          <Separator />          <section>

            <h3 className="font-semibold mb-3">
              Amounts
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Amount"
                value={transfer.amount}
              />

              <Info
                label="Fee"
                value={transfer.fee}
              />

              <Info
                label="Total"
                value={transfer.total}
              />

              <Info
                label="Exchange Rate"
                value={transfer.exchange_rate}
              />

              <Info
                label="Recipient Amount"
                value={
                  transfer.recipient_amount
                }
              />

              <Info
                label="Currencies"
                value={`${transfer.sender_currency} → ${transfer.recipient_currency}`}
              />

            </div>

          </section>

          <Separator />          <section>

            <h3 className="font-semibold mb-3">
              Compliance
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Compliance"
                value={
                  transfer.compliance_status ??
                  "-"
                }
              />

              <Info
                label="Risk Score"
                value={
                  transfer.risk_score ?? "-"
                }
              />

              <Info
                label="Purpose"
                value={
                  transfer.purpose ?? "-"
                }
              />

              <Info
                label="Source of Funds"
                value={
                  transfer.source_of_funds ??
                  "-"
                }
              />

            </div>

          </section>

          <Separator />          <section>

            <h3 className="font-semibold mb-3">
              Timeline
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <Info
                label="Approved"
                value={
                  transfer.approved_at ?? "-"
                }
              />

              <Info
                label="Completed"
                value={
                  transfer.completed_at ?? "-"
                }
              />

              <Info
                label="Created"
                value={transfer.created_at}
              />

              <Info
                label="Updated"
                value={transfer.updated_at}
              />

            </div>

          </section>

        </div>

      </SheetContent>

    </Sheet>
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

      <div className="mt-1 font-medium break-words">
        {value}
      </div>

    </div>
  );
}