"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import DataHeader from "./components/DataHeader";
import CountryCard from "./components/CountryCard";
import NetworkCard from "./components/NetworkCard";
import BundleCard from "./components/BundleCard";
import PhoneNumberCard from "./components/PhoneNumberCard";
import BeneficiariesCard from "./components/BeneficiariesCard";
import RecentPurchasesCard from "./components/RecentPurchasesCard";
import PaymentSummary from "./components/PaymentSummary";
import PurchasePinModal from "./components/PurchasePinModal";

import { useData } from "./hooks/useData";

export default function DataPage() {
  const router = useRouter();

  const [pinOpen, setPinOpen] = useState(false);

  const {
    loading,

    countries,
    networks,
    bundles,

    beneficiaries,
    recentPurchases,

    selectedCountry,
    setSelectedCountry,

    selectedNetwork,
    setSelectedNetwork,

    selectedBundle,
    setSelectedBundle,

    phone,
    setPhone,

    quote,

    buyData,
  } = useData();

  async function handlePurchase(pin: string) {
    const response = await buyData(pin);

    if (!response) return;

    toast.success("Data purchased successfully.");

    router.push(
      `/data/success?reference=${response.reference}`
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-6xl space-y-6 p-6">

        {/* Header */}

        <DataHeader />

        {/* Recent Beneficiaries */}

        <BeneficiariesCard
          beneficiaries={beneficiaries}
          onSelect={(beneficiary) =>
            setPhone(beneficiary.phone)
          }
        />

        {/* Recent Purchases */}

        <RecentPurchasesCard
          purchases={recentPurchases}
          onRepeat={(purchase) => {
            setPhone(purchase.phone);
          }}
        />

        {/* Country */}

        <CountryCard
          countries={countries}
          value={selectedCountry?.id}
          loading={loading}
          onChange={setSelectedCountry}
        />

        {/* Network */}

        {selectedCountry && (

          <NetworkCard
            networks={networks}
            value={selectedNetwork?.id}
            loading={loading}
            onChange={setSelectedNetwork}
          />

        )}

        {/* Bundle */}

        {selectedNetwork && (

          <BundleCard
            bundles={bundles}
            value={selectedBundle?.id}
            loading={loading}
            onChange={setSelectedBundle}
          />

        )}

        {/* Phone */}

        {selectedBundle && (

          <PhoneNumberCard
            phone={phone}
            onChange={setPhone}
            countryCode={
              selectedCountry?.code ?? "+234"
            }
          />

        )}

        {/* Summary */}

        {selectedBundle &&
          phone &&
          quote && (

            <PaymentSummary
              country={selectedCountry}
              network={selectedNetwork}
              bundle={selectedBundle}
              phone={phone}
              fee={quote.fee}
              walletBalance={250000}
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