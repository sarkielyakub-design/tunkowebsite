"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import AirtimeHeader from "./components/AirtimeHeader";
import CountryCard from "./components/CountryCard";
import NetworkCard from "./components/NetworkCard";
import PhoneNumberCard from "./components/PhoneNumberCard";
import AmountCard from "./components/AmountCard";
import BeneficiariesCard from "./components/BeneficiariesCard";
import RecentPurchasesCard from "./components/RecentPurchasesCard";
import PaymentSummary from "./components/PaymentSummary";
import PurchasePinModal from "./components/PurchasePinModal";

import { useAirtime } from "./hooks/useAirtime";

export default function AirtimePage() {
  const router = useRouter();

  const {
    loading,

    countries,
    networks,

    beneficiaries,
    history,

    selectedCountry,
    setSelectedCountry,

    selectedNetwork,
    setSelectedNetwork,

    phone,
    setPhone,

    amount,
    setAmount,

    quote,

    buyAirtime,
  } = useAirtime();

  const [pinOpen, setPinOpen] =
    useState(false);

  /**
   * Replace with dashboard API later
   */
  const walletBalance = 250000;

  async function handlePurchase(
    pin: string
  ) {
    const response =
      await buyAirtime(pin);

    if (!response) return;

    toast.success(
      "Airtime purchased successfully."
    );

    router.push(
      `/airtime/success?reference=${response.reference}`
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-5xl space-y-6 p-6">

        <AirtimeHeader />

        {/* Beneficiaries */}

        <BeneficiariesCard
          beneficiaries={beneficiaries}
          onSelect={(item) => {
            setPhone(item.phone);
          }}
        />

        {/* History */}

        <RecentPurchasesCard
          purchases={history}
        />

        {/* Country */}

        <CountryCard
          countries={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
        />

        {/* Network */}

        {selectedCountry && (

          <NetworkCard
            networks={networks}
            value={selectedNetwork}
            onChange={setSelectedNetwork}
          />

        )}

        {/* Phone */}

        {selectedNetwork && (

          <PhoneNumberCard
            phone={phone}
            onChange={setPhone}
          />

        )}

        {/* Amount */}

        {phone && (

          <AmountCard
            amount={amount}
            onChange={setAmount}
          />

        )}

        {/* Summary */}

        {quote && (

          <PaymentSummary
            country={selectedCountry}
            network={selectedNetwork}
            phone={phone}
            quote={quote}
            onContinue={() =>
              setPinOpen(true)
            }
          />

        )}

        {/* PIN */}

        <PurchasePinModal
          open={pinOpen}
          onClose={() =>
            setPinOpen(false)
          }
          onConfirm={handlePurchase}
        />

      </div>

    </main>
  );
}