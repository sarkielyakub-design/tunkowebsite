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

import { Deposit } from "../types/deposit";interface RejectDepositDialogProps {
  open: boolean;

  deposit: Deposit | null;

  loading?: boolean;

  onClose: () => void;

  onReject: (reason: string) => void;
}export default function RejectDepositDialog({
  open,
  deposit,
  loading = false,
  onClose,
  onReject,
}: RejectDepositDialogProps) {
  const [reason, setReason] = useState("");

  const handleReject = () => {
    if (!reason.trim()) return;

    onReject(reason);

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
            Reject Deposit
          </AlertDialogTitle>

          <AlertDialogDescription>
            You are about to reject this deposit request.

            <br />
            <br />

            <strong>Reference:</strong> {deposit?.reference}

            <br />

            <strong>Amount:</strong>{" "}
            {deposit?.amount} {deposit?.currency}

            <br />
            <br />

            A rejection reason is required.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-2">
          <Label>Rejection Reason</Label>

          <Textarea
            placeholder="Enter rejection reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={5}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading || !reason.trim()}
            onClick={handleReject}
          >
            {loading ? "Rejecting..." : "Reject Deposit"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}