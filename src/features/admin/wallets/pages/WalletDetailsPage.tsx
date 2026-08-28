"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import {
  useWallet,
  useWalletTransactions,
  useWalletStatement,
} from "../hooks/useWallets";

import WalletHeader from "../components/WalletHeader";
import WalletInfoCard from "../components/WalletInfoCard";
import WalletStats from "../components/WalletStats";
import WalletActionButtons from "../components/WalletActionButtons";
import WalletStatement from "../components/WalletStatement";

interface Props {
  walletId: string;
}

export default function WalletDetailsPage({
  walletId,
}: Props) {
  const walletQuery = useWallet(walletId);

  const transactionsQuery = useWalletTransactions(walletId);

  const statementQuery = useWalletStatement(walletId);

  if (walletQuery.isLoading) {
    return (
      <div className="rounded-2xl border bg-white p-10">
        Loading wallet...
      </div>
    );
  }

  if (walletQuery.error) {
    return (
      <div className="rounded-2xl border bg-red-50 p-10 text-red-700">
        Failed to load wallet.
      </div>
    );
  }

  const wallet = walletQuery.data?.data;

  if (!wallet) {
    return (
      <div className="rounded-2xl border bg-white p-10">
        Wallet not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Back */}

      <Link
        href="/admin/wallets"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Wallets
      </Link>

      {/* Header */}

      <WalletHeader wallet={wallet} />

      {/* Action Buttons */}

      <WalletActionButtons wallet={wallet} />

      {/* Wallet Information */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">

          <WalletInfoCard wallet={wallet} />

        </div>

        <div>

          <WalletStats summary={wallet} />

        </div>

      </div>

      {/* Transactions */}

      <WalletStatement
        title="Transactions"
        transactions={transactionsQuery.data?.data ?? []}
        loading={transactionsQuery.isLoading}
      />

      {/* Statement */}

      <WalletStatement
        title="Wallet Statement"
        transactions={statementQuery.data?.data ?? []}
        loading={statementQuery.isLoading}
      />

    </div>
  );
}