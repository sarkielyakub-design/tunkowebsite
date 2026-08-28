"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ShieldCheck,
  Eye,
  EyeOff,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { usePin } from "./hooks/usePin";

export default function CreatePinPage() {
  const router = useRouter();

  const { loading, savePin } = usePin();

  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const [showPin, setShowPin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  async function submit() {
    if (pin.length !== 4) return;

    if (confirmPin.length !== 4) return;

    const success = await savePin(pin, confirmPin);

    if (success) {
      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-xl">

        <div className="rounded-t-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">

          <ShieldCheck className="h-12 w-12" />

          <h1 className="mt-4 text-3xl font-bold">
            Create Transaction PIN
          </h1>

          <p className="mt-2 text-blue-100">
            Protect your wallet with a secure 4-digit PIN.
          </p>

        </div>

        <div className="space-y-6 p-8">

          <div>

            <label className="mb-2 block font-medium">
              Transaction PIN
            </label>

            <div className="relative">

              <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

              <Input
                type={showPin ? "text" : "password"}
                maxLength={4}
                value={pin}
                onChange={(e) =>
                  setPin(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                className="pl-12 pr-12 h-12 rounded-xl"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPin(!showPin)
                }
                className="absolute right-4 top-3"
              >
                {showPin ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Confirm PIN
            </label>

            <div className="relative">

              <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

              <Input
                type={showConfirm ? "text" : "password"}
                maxLength={4}
                value={confirmPin}
                onChange={(e) =>
                  setConfirmPin(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                className="pl-12 pr-12 h-12 rounded-xl"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
                className="absolute right-4 top-3"
              >
                {showConfirm ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>

          </div>

          {pin.length === 4 &&
            confirmPin.length === 4 &&
            pin === confirmPin && (

            <div className="rounded-xl bg-green-50 p-4 text-green-700 flex items-center gap-2">

              <CheckCircle2 className="h-5 w-5" />

              PINs match

            </div>

          )}

          <Button
            disabled={
              loading ||
              pin.length !== 4 ||
              confirmPin.length !== 4
            }
            onClick={submit}
            className="h-14 w-full rounded-2xl text-base"
          >
            {loading
              ? "Creating PIN..."
              : "Create PIN"}
          </Button>

        </div>

      </div>

    </main>
  );
}