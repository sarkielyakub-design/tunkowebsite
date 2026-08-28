"use client";

import { SetStateAction, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Transfer } from "../types/transfer";
import { useApproveTransfer } from "../hooks/useApproveTransfer";interface Props {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  transfer?: Transfer | null;
}export default function ApproveTransferModal({
  open,
  onOpenChange,
  transfer,
}: Props) {
  const approveMutation = useApproveTransfer();

  const [provider, setProvider] = useState("");
  const [providerReference, setProviderReference] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [recipientAmount, setRecipientAmount] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!transfer) return;

    setProvider(transfer.provider ?? "");
    setProviderReference(transfer.provider_reference ?? "");
    setExchangeRate(
      transfer.exchange_rate?.toString() ?? ""
    );
    setRecipientAmount(
      transfer.recipient_amount?.toString() ?? ""
    );
    setNote("");
  }, [transfer]);  async function handleSubmit() {
    if (!transfer) return;

    await approveMutation.mutateAsync({
      id: transfer.id,

      payload: {
        provider,

        provider_reference: providerReference,

        exchange_rate: Number(exchangeRate),

        recipient_amount: Number(recipientAmount),

        note,
      },
    });

    onOpenChange(false);
  }  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Approve Transfer
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">          <div>
            <Label>Provider</Label>

            <Input
              value={provider}
              onChange={(e) =>
                setProvider(e.target.value)
              }
            />
          </div>          <div>
            <Label>
              Provider Reference
            </Label>

            <Input
              value={providerReference}
              onChange={(e) =>
                setProviderReference(
                  e.target.value
                )
              }
            />
          </div>          <div>
            <Label>
              Provider Reference
            </Label>

            <Input
              value={providerReference}
              onChange={(e) =>
                setProviderReference(
                  e.target.value
                )
              }
            />
          </div>         
           <div>
            <Label>
              Recipient Amount
            </Label>

            <Input
              type="number"
              value={recipientAmount}
              onChange={(e) =>
                setRecipientAmount(
                  e.target.value
                )
              }
            />
          </div>         
           <div>
            <Label>Admin Note</Label>

            <textarea
              rows={4}
              value={note}
              onChange={(e) =>
                setNote(e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

        </div>        <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={approveMutation.isPending}
          >
            {approveMutation.isPending
              ? "Approving..."
              : "Approve Transfer"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}