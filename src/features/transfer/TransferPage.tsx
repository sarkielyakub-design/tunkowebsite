"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import TransferHeader from "./components/TransferHeader";
import TransferTypeCard from "./components/TransferTypeCard";
import BeneficiaryList from "./components/BeneficiaryList";
import RecipientSearch from "./components/RecipientSearch";
import RecipientCard from "./components/RecipientCard";
import AmountCard from "./components/AmountCard";
import FeeCard from "./components/FeeCard";
import TransferSummary from "./components/TransferSummary";
import PinModal from "./components/PinModal";

import { useTransfer } from "./hooks/useTransfer";
import { useBeneficiaries } from "./hooks/useBeneficiaries";

export default function TransferPage() {
  const router = useRouter();

  const { beneficiaries } = useBeneficiaries();

  const {
    loading,
    recipient,
    amount,
    setAmount,
    transferType,
    setTransferType,
    findRecipient,
    sendTransfer,
  } = useTransfer();

  const [pinOpen, setPinOpen] = useState(false);

  // TODO: Replace with Dashboard API
  const walletBalance = 250000;

  const amountValue = Number(amount) || 0;

  // TODO: Replace with Quote API
  const fee =
    amountValue <= 0
      ? 0
      : amountValue <= 10000
      ? 10
      : amountValue <= 50000
      ? 25
      : 50;

  async function handleTransfer(pin: string) {
    if (!recipient) return;

    try {
      const response = await sendTransfer({
        recipient_id: recipient.id,
        amount: amountValue,
        pin,
        remark: "Wallet Transfer",
      });

      if (!response) return;

      toast.success("Transfer Successful");

      router.push(
        `/transfer/success?reference=${response.reference}`
      );
    } catch (error) {
      console.error(error);
      toast.error("Transfer failed.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-5xl space-y-6 p-6">

        {/* Header */}
        <TransferHeader />

        {/* Transfer Type */}
        <TransferTypeCard
          value={transferType}
          onChange={setTransferType}
        />

        {/* Beneficiaries */}
        <BeneficiaryList
          beneficiaries={beneficiaries}
          onSelect={(beneficiary) =>
            findRecipient(beneficiary.wallet_number)
          }
        />

        {/* Search Recipient */}
        {!recipient && (
          <RecipientSearch onFound={(foundRecipient) => findRecipient(foundRecipient.wallet_number)} />
        )}

        {/* Recipient Details */}
        {recipient && (
          <RecipientCard
            recipient={recipient}
            onContinue={() => {}}
          />
        )}

        {/* Amount */}
        {recipient && (
          <AmountCard
            amount={amount}
            onChange={setAmount}
            balance={walletBalance}
          />
        )}

        {/* Fee */}
        {recipient && amountValue > 0 && (
          <FeeCard
            amount={amountValue}
            fee={fee}
          />
        )}

        {/* Summary */}
        {recipient && amountValue > 0 && (
          <TransferSummary
            recipient={recipient}
            amount={amountValue}
            fee={fee}
            onContinue={() => setPinOpen(true)}
          />
        )}

        {/* PIN Modal */}
        <PinModal
          open={pinOpen}
          onClose={() => setPinOpen(false)}
          onConfirm={handleTransfer}
        />

      </div>

    </main>
  );
}