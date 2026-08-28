"use client";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Deposit } from "../types/deposit";interface CancelDepositDialogProps {
  open: boolean;

  deposit: Deposit | null;

  loading?: boolean;

  onClose: () => void;

  onCancel: (reason: string) => void;
}export default function CancelDepositDialog({
  open,
  deposit,
  loading = false,
  onClose,
  onCancel,
}: CancelDepositDialogProps) {
  const [reason, setReason] = useState("");

  const handleCancel = () => {
    if (!reason.trim()) return;

    onCancel(reason);

    setReason("");
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          setReason("");
          onClose();
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Cancel Deposit
          </AlertDialogTitle>

          <AlertDialogDescription>
            This will cancel the selected deposit request.

            <br />
            <br />

            <strong>Reference:</strong> {deposit?.reference}

            <br />

            <strong>Amount:</strong>{" "}
            {deposit?.amount} {deposit?.currency}

            <br />
            <br />

            Please provide a reason for cancelling this deposit.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-2">
          <Label>Cancellation Reason</Label>

          <Textarea
            placeholder="Enter cancellation reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={5}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Close
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading || !reason.trim()}
            onClick={handleCancel}
          >
            {loading ? "Cancelling..." : "Cancel Deposit"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}