"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Transfer } from "../types/transfer";
import { useCancelTransfer } from "../hooks/useCancelTransfer";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transfer?: Transfer | null;
}export default function CancelTransferModal({
  open,
  onOpenChange,
  transfer,
}: Props) {
  const cancelMutation = useCancelTransfer();

  const [reason, setReason] = useState("");
  const [refundWallet, setRefundWallet] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!transfer) return;

    setReason("");
    setRefundWallet(false);
    setNote("");
  }, [transfer]);  async function handleSubmit() {
    if (!transfer) return;

    await cancelMutation.mutateAsync({
      id: transfer.id,

      payload: {
        reason,
        refund_wallet: refundWallet,
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
            Cancel Transfer
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">          
            <div>

            <Label>
              Cancellation Reason
            </Label>

            <textarea
              rows={3}
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

          </div>          
          <div className="flex items-center space-x-2">

            <Checkbox
              id="refund-wallet"
              checked={refundWallet}
              onCheckedChange={(checked) =>
                setRefundWallet(Boolean(checked))
              }
            />

            <Label htmlFor="refund-wallet">
              Refund customer's wallet
            </Label>

          </div>         
           <div>

            <Label>
              Admin Note
            </Label>

            <textarea
              rows={4}
              value={note}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNote(e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

          </div>

        </div>      
          <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Close
          </Button>

          <Button
            variant="destructive"
            onClick={handleSubmit}
            disabled={cancelMutation.isPending}
          >
            {cancelMutation.isPending
              ? "Cancelling..."
              : "Cancel Transfer"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}