"use client";

import { useState } from "react";
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
import CreditWalletModal from "../components/CreditWalletModal";
import DebitWalletModal from "../components/DebitWalletModal";
import FreezeWalletModal from "../components/FreezeWalletModal";

interface Props {
  walletId: string;
}

export default function WalletDetailsPage({
  walletId,
}: Props) {
  const [creditOpen, setCreditOpen] = useState(false);
  const [debitOpen, setDebitOpen] = useState(false);
  const [freezeOpen, setFreezeOpen] = useState(false);

  const walletQuery = useWallet(walletId);

  const transactionsQuery =
    useWalletTransactions(walletId);

  const statementQuery =
    useWalletStatement(walletId);

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

  function refreshWallet() {
    walletQuery.refetch();
    transactionsQuery.refetch();
    statementQuery.refetch();
  }

  function handleStatement() {
    document
      .getElementById("wallet-statement")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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

      {/* Actions */}
      <WalletActionButtons
        wallet={wallet}
        onCredit={() => setCreditOpen(true)}
        onDebit={() => setDebitOpen(true)}
        onFreeze={() => setFreezeOpen(true)}
        onUnfreeze={async () => {
          try {
            const { unfreezeWallet } =
              await import("../api/wallets");

            await unfreezeWallet(wallet.id);

            refreshWallet();
          } catch (error) {
            console.error(
              "Failed to unfreeze wallet:",
              error
            );
          }
        }}
        onStatement={handleStatement}
      />

      {/* Wallet Information */}
      <div className="grid gap-6 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">
          <WalletInfoCard wallet={wallet} />
        </div>

        <div>
          <WalletStats
            summary={{
              total_wallets: 1,
              active_wallets: wallet.is_active ? 1 : 0,
              inactive_wallets: wallet.is_active ? 0 : 1,
              total_balance: wallet.balance,
            }}
          />
        </div>

      </div>

      {/* Transactions */}
      <WalletStatement
        title="Transactions"
        transactions={
          transactionsQuery.data?.data ?? []
        }
        loading={transactionsQuery.isLoading}
      />

      {/* Statement */}
      <div id="wallet-statement">
        <WalletStatement
          title="Wallet Statement"
          transactions={
            statementQuery.data?.data ?? []
          }
          loading={statementQuery.isLoading}
        />
      </div>

      {/* Credit Modal */}
      <CreditWalletModal
        walletId={wallet.id}
        open={creditOpen}
        onClose={() => setCreditOpen(false)}
        onSuccess={refreshWallet}
      />

      {/* Debit Modal */}
      <DebitWalletModal
        walletId={wallet.id}
        balance={wallet.available_balance ?? wallet.balance}
        currency={wallet.currency}
        open={debitOpen}
        onClose={() => setDebitOpen(false)}
        onSuccess={refreshWallet}
      />

      {/* Freeze Modal */}
      <FreezeWalletModal
        walletId={wallet.id}
        open={freezeOpen}
        onClose={() => setFreezeOpen(false)}
        onSuccess={refreshWallet}
      />

    </div>
  );
}