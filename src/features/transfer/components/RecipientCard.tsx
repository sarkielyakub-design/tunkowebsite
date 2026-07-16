"use client";

import {
  ShieldCheck,
  ShieldAlert,
  Wallet,
  Phone,
  User,
  Globe,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Recipient {
  id: number;
  full_name: string;
  username: string;
  phone: string;
  wallet_number: string;
  country: string;
  currency: string;
  is_verified: boolean;
}

interface Props {
  recipient: Recipient;
  onContinue: () => void;
}

export default function RecipientCard({
  recipient,
  onContinue,
}: Props) {
  const initials = recipient.full_name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 text-white">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">

            {initials}

          </div>

          <div className="flex-1">

            <div className="flex items-center gap-2">

              <h2 className="text-2xl font-bold">

                {recipient.full_name}

              </h2>

              {recipient.is_verified && (

                <BadgeCheck className="h-6 w-6 text-green-300" />

              )}

            </div>

            <p className="mt-1 text-blue-100">

              @{recipient.username}

            </p>

          </div>

        </div>

      </div>

      <div className="space-y-5 p-8">

        {/* Wallet */}

        <div className="rounded-2xl border bg-slate-50 p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Wallet className="h-6 w-6 text-blue-600" />

              <div>

                <p className="text-sm text-slate-500">

                  Wallet Number

                </p>

                <h3 className="font-semibold">

                  {recipient.wallet_number}

                </h3>

              </div>

            </div>

            <div className="rounded-xl bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

              {recipient.currency}

            </div>

          </div>

        </div>

        {/* Phone */}

        <div className="rounded-2xl border bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Phone className="h-6 w-6 text-green-600" />

            <div>

              <p className="text-sm text-slate-500">

                Phone Number

              </p>

              <h3 className="font-semibold">

                {recipient.phone}

              </h3>

            </div>

          </div>

        </div>

        {/* Country */}

        <div className="rounded-2xl border bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Globe className="h-6 w-6 text-purple-600" />

            <div>

              <p className="text-sm text-slate-500">

                Country

              </p>

              <h3 className="font-semibold">

                {recipient.country}

              </h3>

            </div>

          </div>

        </div>

        {/* Verification */}

        <div
          className={`rounded-2xl border p-5 ${
            recipient.is_verified
              ? "border-green-200 bg-green-50"
              : "border-yellow-200 bg-yellow-50"
          }`}
        >
          <div className="flex items-start gap-3">

            {recipient.is_verified ? (

              <ShieldCheck className="mt-1 h-6 w-6 text-green-600" />

            ) : (

              <ShieldAlert className="mt-1 h-6 w-6 text-yellow-600" />

            )}

            <div>

              <h4
                className={`font-semibold ${
                  recipient.is_verified
                    ? "text-green-700"
                    : "text-yellow-700"
                }`}
              >
                {recipient.is_verified
                  ? "Verified Recipient"
                  : "Unverified Recipient"}
              </h4>

              <p className="mt-1 text-sm text-slate-600">

                {recipient.is_verified
                  ? "This account has successfully completed identity verification. Transfers can be made securely."
                  : "This account has not completed verification. Please confirm the recipient details before proceeding."}

              </p>

            </div>

          </div>

        </div>

        {/* Continue */}

        <Button
          onClick={onContinue}
          className="h-14 w-full rounded-2xl text-base font-semibold"
        >

          Continue Transfer

          <ArrowRight className="ml-2 h-5 w-5" />

        </Button>

      </div>

    </div>
  );
}