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

import { Deposit } from "../types/deposit";

interface ApproveDepositDialogProps {
  open: boolean;

  deposit: Deposit | null;

  loading?: boolean;

  onClose: () => void;

  onApprove: (note: string) => void;
}

export default function ApproveDepositDialog({
  open,
  deposit,
  loading = false,
  onClose,
  onApprove,
}: ApproveDepositDialogProps) {
  const [note, setNote] = useState("");

  const handleApprove = () => {
    onApprove(note);
    setNote("");
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(value: boolean) => {
        if (!value) {
          setNote("");
          onClose();
        }
      }}
    >
      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            Approve Deposit
          </AlertDialogTitle>

          <AlertDialogDescription>

            Are you sure you want to approve this deposit?

            <br />

            <br />

            <strong>Reference:</strong>{" "}
            {deposit?.reference}

            <br />

            <strong>Amount:</strong>{" "}
            {deposit?.amount} {deposit?.currency}

            <br />

            This action will credit the customer's wallet.

          </AlertDialogDescription>

        </AlertDialogHeader>

        <div className="space-y-2">

          <Label>
            Admin Note (Optional)
          </Label>

          <textarea
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
            placeholder="Enter approval note..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <AlertDialogFooter>

          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={handleApprove}
          >
            {loading ? "Approving..." : "Approve Deposit"}
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}