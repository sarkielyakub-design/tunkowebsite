
"use client";

import {
  ShieldCheck,
  ShieldAlert,
  Wallet,
  Phone,
  Globe,
  ArrowRight,
  BadgeCheck,
  Copy,
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
  const fullName = recipient.full_name?.trim() || "Unknown recipient";
  const username = recipient.username?.trim() || "—";
  const phone = recipient.phone?.trim() || "Not provided";
  const walletNumber = recipient.wallet_number?.trim() || "";
  const country = recipient.country?.trim() || "Not provided";
  const currency = recipient.currency?.trim()?.toUpperCase() || "";

  const initials = fullName
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase() || "U";

  const canContinue =
    Number.isFinite(recipient.id) &&
    recipient.id > 0 &&
    walletNumber.length > 0 &&
    currency.length > 0;

  const copyWalletNumber = async () => {
    if (!walletNumber || !navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(walletNumber);
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      {/* Recipient header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-6 text-white sm:p-8">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl font-bold ring-2 ring-white/30 sm:h-20 sm:w-20 sm:text-2xl">
            {initials}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="break-words text-xl font-bold sm:text-2xl">
                {fullName}
              </h2>

              {recipient.is_verified && (
                <BadgeCheck
                  className="h-6 w-6 shrink-0 text-green-300"
                  aria-label="Verified recipient"
                />
              )}
            </div>

            <p className="mt-1 break-words text-sm text-blue-100 sm:text-base">
              @{username}
            </p>

            <p className="mt-2 text-xs text-blue-100">
              Recipient ID: {recipient.id}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-8">
        {/* Wallet details */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <Wallet className="h-6 w-6 text-blue-700" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-500">Wallet Number</p>
              <h3 className="break-all font-semibold text-slate-900">
                {walletNumber || "Not available"}
              </h3>
            </div>

            {walletNumber && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
                onClick={copyWalletNumber}
                aria-label="Copy wallet number"
                title="Copy wallet number"
              >
                <Copy className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-blue-100 pt-4">
            <span className="text-sm text-slate-500">
              Wallet currency
            </span>

            <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              {currency || "Not available"}
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-4 sm:p-5">
          <div className="rounded-xl bg-green-100 p-3">
            <Phone className="h-6 w-6 text-green-700" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-slate-500">Phone Number</p>
            <h3 className="break-words font-semibold text-slate-900">
              {phone}
            </h3>
          </div>
        </div>

        {/* Country */}
        <div className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-4 sm:p-5">
          <div className="rounded-xl bg-purple-100 p-3">
            <Globe className="h-6 w-6 text-purple-700" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-slate-500">Country</p>
            <h3 className="break-words font-semibold text-slate-900">
              {country}
            </h3>
          </div>
        </div>

        {/* Verification status */}
        <div
          className={`rounded-2xl border p-4 sm:p-5 ${
            recipient.is_verified
              ? "border-green-200 bg-green-50"
              : "border-amber-200 bg-amber-50"
          }`}
        >
          <div className="flex items-start gap-3">
            {recipient.is_verified ? (
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />
            ) : (
              <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            )}

            <div>
              <h4
                className={`font-semibold ${
                  recipient.is_verified
                    ? "text-green-800"
                    : "text-amber-800"
                }`}
              >
                {recipient.is_verified
                  ? "Verified Recipient"
                  : "Verification Not Confirmed"}
              </h4>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {recipient.is_verified
                  ? "Review the recipient's details carefully before continuing. Verification does not replace checking the wallet number."
                  : "The recipient's verification has not been confirmed. Check the recipient details before proceeding."}
              </p>
            </div>
          </div>
        </div>

        {/* Continue transfer */}
        <Button
          type="button"
          onClick={onContinue}
          disabled={!canContinue}
          className="h-14 w-full rounded-2xl bg-blue-700 text-base font-semibold hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue Transfer
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        {!canContinue && (
          <p className="text-center text-sm text-amber-700">
            Recipient wallet details are incomplete. Please select a valid recipient.
          </p>
        )}

        <p className="text-center text-xs leading-5 text-slate-500">
          Confirm the recipient and wallet details before authorizing a transfer.
        </p>
      </div>
    </div>
  );
}
