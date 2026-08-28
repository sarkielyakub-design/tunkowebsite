"use client";

import { useEffect, useRef, useState } from "react";

import {
  ShieldCheck,
  Lock,
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

export default function PinModal({
  open,
  onClose,
  onConfirm,
}: Props) {

  const [pin, setPin] = useState([
    "",
    "",
    "",
    "",
  ]);

  const [loading, setLoading] =
    useState(false);

  const inputs = useRef<
    (HTMLInputElement | null)[]
  >([]);

  useEffect(() => {

    if (!open) {

      setPin([
        "",
        "",
        "",
        "",
      ]);

      return;

    }

    setTimeout(() => {

      inputs.current[0]?.focus();

    }, 150);

  }, [open]);

  function updatePin(
    index: number,
    value: string
  ) {

    if (!/^\d?$/.test(value))
      return;

    const copy = [...pin];

    copy[index] = value;

    setPin(copy);

    if (value && index < 3) {

      inputs.current[
        index + 1
      ]?.focus();

    }

    const finalPin = copy.join("");

    if (
      finalPin.length === 4
    ) {

      setTimeout(() => {

        submit(finalPin);

      }, 150);

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

      inputs.current[
        index - 1
      ]?.focus();

    }

  }

  async function submit(
    value?: string
  ) {

    const finalPin =
      value ?? pin.join("");

    if (
      finalPin.length !== 4
    )
      return;

    try {

      setLoading(true);

      await onConfirm(
        finalPin
      );

      setPin([
        "",
        "",
        "",
        "",
      ]);

      onClose();

    } finally {

      setLoading(false);

    }

  }

  return (

    <Dialog
      open={open}
      onOpenChange={
        loading
          ? undefined
          : onClose
      }
    >

      <DialogContent className="max-w-md overflow-hidden rounded-3xl p-0">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 text-white">

          <DialogHeader>

            <DialogTitle className="flex items-center gap-3 text-2xl">

              <ShieldCheck className="h-8 w-8" />

              Confirm Transfer

            </DialogTitle>

          </DialogHeader>

          <p className="mt-3 text-blue-100">

            Enter your secure
            transaction PIN to
            authorize this
            transfer.

          </p>

        </div>

        {/* Body */}

        <div className="space-y-8 p-8">

          <div className="rounded-2xl bg-blue-50 p-4">

            <div className="flex items-center gap-3">

              <Lock className="h-6 w-6 text-blue-600" />

              <div>

                <p className="font-semibold">

                  Secure Transaction

                </p>

                <p className="text-sm text-slate-500">

                  Your PIN is encrypted
                  and never stored.

                </p>

              </div>

            </div>

          </div>

          {/* PIN */}

          <div className="flex justify-center gap-4">

            {pin.map(
              (
                digit,
                index
              ) => (

                <input
                  key={index}
                  ref={(el) => {
                    inputs.current[
                      index
                    ] = el;
                  }}
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={1}
                  disabled={
                    loading
                  }
                  value={digit}
                  onChange={(e) =>
                    updatePin(
                      index,
                      e.target.value
                    )
                  }
                  onKeyDown={(e) =>
                    handleBackspace(
                      index,
                      e
                    )
                  }
                  className="h-16 w-16 rounded-2xl border-2 text-center text-3xl font-bold transition focus:border-blue-600 focus:ring-2 focus:ring-blue-300"
                />

              )
            )}

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-4">

            <Button
              variant="outline"
              disabled={loading}
              onClick={onClose}
              className="h-12 rounded-xl"
            >

              Cancel

            </Button>

            <Button
              disabled={
                loading ||
                pin.join("").length !==
                  4
              }
              onClick={() =>
                submit()
              }
              className="h-12 rounded-xl"
            >

              {loading ? (

                <>

                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />

                  Processing...

                </>

              ) : (

                "Confirm"

              )}

            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>

  );

}