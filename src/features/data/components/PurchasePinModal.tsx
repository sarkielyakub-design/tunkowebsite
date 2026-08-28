"use client";

import { useEffect, useRef, useState } from "react";

import {
  ShieldCheck,
  Loader2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: (pin: string) => Promise<void>;
}

export default function PurchasePinModal({
  open,
  onClose,
  onConfirm,
}: Props) {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputs.current[0]?.focus();
      }, 100);
    }
  }, [open]);

  function updatePin(
    index: number,
    value: string
  ) {
    if (!/^\d?$/.test(value)) return;

    const copy = [...pin];

    copy[index] = value;

    setPin(copy);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleBackspace(
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (
      e.key === "Backspace" &&
      !pin[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  }

  async function submit() {
    const finalPin = pin.join("");

    if (finalPin.length !== 4) return;

    try {
      setLoading(true);

      await onConfirm(finalPin);

      setPin(["", "", "", ""]);

      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-md overflow-hidden rounded-3xl p-0">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">

          <DialogHeader>

            <DialogTitle className="flex items-center gap-3 text-2xl">

              <ShieldCheck className="h-8 w-8" />

              Confirm Purchase

            </DialogTitle>

          </DialogHeader>

          <p className="mt-3 text-blue-100">

            Enter your secure 4-digit transaction PIN to complete this data purchase.

          </p>

        </div>

        <div className="space-y-8 p-8">

          <div className="flex justify-center gap-4">

            {pin.map((digit, index) => (

              <input
                key={index}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  updatePin(index, e.target.value)
                }
                onKeyDown={(e) =>
                  handleBackspace(index, e)
                }
                className="h-16 w-16 rounded-2xl border text-center text-3xl font-bold outline-none focus:border-blue-600"
              />

            ))}

          </div>

          <Button
            onClick={submit}
            disabled={
              loading ||
              pin.join("").length !== 4
            }
            className="h-14 w-full rounded-2xl"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing Purchase...
              </>
            ) : (
              "Buy Data"
            )}
          </Button>

        </div>

      </DialogContent>

    </Dialog>
  );
}