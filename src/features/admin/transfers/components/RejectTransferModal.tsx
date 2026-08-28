"use client";

import { useState, useEffect } from "react";

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
import { Checkbox } from "@/components/ui/checkbox";

import { Transfer } from "../types/transfer";
import { useRejectTransfer } from "../hooks/useRejectTransfer";interface Props {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  transfer?: Transfer | null;
}export default function RejectTransferModal({
  open,
  onOpenChange,
  transfer,
}: Props) {
  const rejectMutation = useRejectTransfer();

  const [reason, setReason] = useState("");
  const [rejectCode, setRejectCode] = useState("");
  const [refundWallet, setRefundWallet] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!transfer) return;

    setReason("");
    setRejectCode("");
    setRefundWallet(false);
    setNote("");
  }, [transfer]);  async function handleSubmit() {
    if (!transfer) return;

    await rejectMutation.mutateAsync({
      id: transfer.id,

      payload: {
        reason,
        reject_code: rejectCode,
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
            Reject Transfer
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">          <div>
            <Label>
              Reject Reason
            </Label>

            <textarea
              rows={3}
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>          <div>
            <Label>
              Reject Code
            </Label>

            <Input
              placeholder="e.g. INVALID_ACCOUNT"
              value={rejectCode}
              onChange={(e) =>
                setRejectCode(e.target.value)
              }
            />
          </div>          <div className="flex items-center space-x-2">

            <Checkbox
              id="refund-wallet"
              checked={refundWallet}
              onCheckedChange={(checked) =>
                setRefundWallet(Boolean(checked))
              }
            />

            <Label htmlFor="refund-wallet">
              Refund money to customer's wallet
            </Label>

          </div>          <div>
            <Label>
              Admin Note
            </Label>

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
            variant="destructive"
            onClick={handleSubmit}
            disabled={rejectMutation.isPending}
          >
            {rejectMutation.isPending
              ? "Rejecting..."
              : "Reject Transfer"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}