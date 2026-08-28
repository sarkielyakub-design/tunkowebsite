"use client";

import { useEffect, useState, type ChangeEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Transfer } from "../types/transfer";
import { useRetryTransfer } from "../hooks/useRetryTransfer";interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transfer?: Transfer | null;
}export default function RetryTransferModal({
  open,
  onOpenChange,
  transfer,
}: Props) {
  const retryMutation = useRetryTransfer();

  const [provider, setProvider] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!transfer) return;

    setProvider(transfer.provider ?? "");
    setNote("");
  }, [transfer]);  async function handleSubmit() {
    if (!transfer) return;

    await retryMutation.mutateAsync({
      id: transfer.id,

      payload: {
        provider: provider || undefined,
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
            Retry Transfer
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div>
            <Label>
              Provider
            </Label>

            <Input
              placeholder="Thunes"
              value={provider}
              onChange={(e) =>
                setProvider(e.target.value)
              }
            />
          </div>

          <div>
            <Label>
              Admin Note
            </Label>

            <textarea
              rows={4}
              value={note}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
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
            onClick={handleSubmit}
            disabled={retryMutation.isPending}
          >
            {retryMutation.isPending
              ? "Retrying..."
              : "Retry Transfer"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}