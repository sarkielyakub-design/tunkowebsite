"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Eye,
  EyeOff,
  ShieldCheck,
  ShieldAlert,
  Wallet,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { getWallet } from "@/src/api/wallet";

import FundWalletModal from "@/src/features/wallet/components/FundWalletModal";
import { useFundWallet } from "@/src/features/wallet/hooks/useFundWallet";

interface WalletData {
  wallet_number: string;
  balance: number;
  currency: string;
  is_active: boolean;
}

interface UserData {
  first_name: string;
  last_name: string;
  is_verified: boolean;
}

export default function WalletCard() {
  const [showBalance, setShowBalance] =
    useState(true);

  const [loading, setLoading] =
    useState(true);

  const [wallet, setWallet] =
    useState<WalletData | null>(null);

  const [user, setUser] =
    useState<UserData | null>(null);

  const [open, setOpen] =
    useState(false);

  const { fundWallet } =
    useFundWallet();

  useEffect(() => {
    loadWallet();
  }, []);

  async function loadWallet() {
    try {
      const response = await getWallet();

      if (response.success) {
        setWallet(response.wallet);
        setUser(response.user);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleFundWallet(
    amount: number,
    paymentMethod: string
  ) {
    await fundWallet(
      amount,
      paymentMethod
    );

    await loadWallet();
  }

  if (loading) {
    return (
      <Card className="rounded-3xl">
        <CardContent className="p-10 text-center">
          Loading wallet...
        </CardContent>
      </Card>
    );
  }

  if (!wallet || !user) {
    return (
      <Card className="rounded-3xl">
        <CardContent className="p-10 text-center text-red-500">
          Unable to load wallet.
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-2xl">

        <CardContent className="p-8">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-lg font-semibold">
                Hello, {user.first_name} 👋
              </p>

              <div className="mt-5 flex items-center gap-2">

                <Wallet className="h-5 w-5" />

                <span className="text-sm opacity-90">
                  Available Balance
                </span>

              </div>

              <div className="mt-4 flex items-center gap-3">

                <h2 className="text-4xl font-bold">

                  {showBalance
                    ? `${wallet.currency} ${Number(
                        wallet.balance
                      ).toLocaleString()}`
                    : "••••••••"}

                </h2>

                <button
                  onClick={() =>
                    setShowBalance(
                      !showBalance
                    )
                  }
                >
                  {showBalance ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>

              </div>

              <div className="mt-6 space-y-2">

                <p className="text-sm opacity-80">
                  Wallet Number
                </p>

                <h3 className="text-xl font-bold">
                  {wallet.wallet_number}
                </h3>

                <div className="flex items-center gap-2">

                  {user.is_verified ? (
                    <>
                      <ShieldCheck className="h-5 w-5 text-green-300" />

                      <span className="text-sm">
                        Verified Account
                      </span>
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="h-5 w-5 text-yellow-300" />

                      <span className="text-sm">
                        Account Not Verified
                      </span>
                    </>
                  )}

                </div>

              </div>

            </div>

            <div className="rounded-full bg-white/20 p-4">

              <Wallet className="h-12 w-12" />

            </div>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <Button
              onClick={() =>
                setOpen(true)
              }
              className="h-12 rounded-xl bg-white text-blue-700 hover:bg-slate-100"
            >
              Fund Wallet
            </Button>

            <Link
              href="/transfer"
              className="w-full"
            >
              <Button
                variant="secondary"
                className="h-12 w-full rounded-xl border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Send Money
              </Button>
            </Link>

          </div>

        </CardContent>

      </Card>

      <FundWalletModal
        open={open}
        onClose={() =>
          setOpen(false)
        }
        onSubmit={handleFundWallet}
      />
    </>
  );
}