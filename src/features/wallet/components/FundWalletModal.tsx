"use client";

import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import FundWalletHeader from "./FundWalletHeader";
import AmountInput from "./AmountInput";
import PaymentGateway from "./PaymentGateway";
import PaymentSummary from "./PaymentSummary";
import SecurePaymentCard from "./SecurePaymentCard";

interface FundWalletModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (
    amount: number,
    gateway: string
  ) => Promise<void>;
}

export default function FundWalletModal({
  open,
  onClose,
  onSubmit,
}: FundWalletModalProps) {
  const [amount, setAmount] = useState("");
  const [gateway, setGateway] =
    useState("paystack");

  const [loading, setLoading] =
    useState(false);

  async function handleContinue() {
    const value = Number(amount);

    if (!value || value < 100) {
      return;
    }

    try {
      setLoading(true);

      await onSubmit(
        value,
        gateway
      );

      setAmount("");
      setGateway("paystack");

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
      <DialogContent
        className="
          max-w-lg
          max-h-[90vh]
          rounded-3xl
          overflow-hidden
          border-0
          p-0
          flex
          flex-col
        "
      >

        {/* Header */}

        <FundWalletHeader />

        {/* Scrollable Body */}

        <div className="flex-1 overflow-y-auto p-8 space-y-8">

          <AmountInput
            value={amount}
            onChange={setAmount}
          />

          <PaymentGateway
            value={gateway}
            onChange={setGateway}
          />

          <PaymentSummary
            amount={amount}
            gateway={gateway}
          />

          <SecurePaymentCard />

          <Button
            disabled={
              loading ||
              Number(amount) < 100
            }
            onClick={handleContinue}
            className="h-14 w-full rounded-2xl text-base font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Initializing Payment...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-5 w-5" />
                Continue to Payment
              </>
            )}
          </Button>

        </div>

      </DialogContent>

    </Dialog>
  );
}