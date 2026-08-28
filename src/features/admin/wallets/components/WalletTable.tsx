"use client";

import Link from "next/link";
import {
  Eye,
  Plus,
  Minus,
  Lock,
  Unlock,
} from "lucide-react";

import { Wallet } from "../types/wallet";
import WalletStatusBadge from "./WalletStatusBadge";

interface Props {
  wallets: Wallet[];
  loading: boolean;
}

export default function WalletTable({
  wallets,
  loading,
}: Props) {
  if (loading) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center">
        Loading wallets...
      </div>
    );
  }

  if (!wallets.length) {
    return (
      <div className="rounded-2xl border bg-white p-16 text-center">
        <h2 className="text-xl font-semibold">
          No wallets found
        </h2>

        <p className="mt-2 text-slate-500">
          Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Wallet
            </th>

            <th className="px-6 py-4 text-left">
              Customer
            </th>

            <th className="px-6 py-4 text-left">
              Currency
            </th>

            <th className="px-6 py-4 text-left">
              Balance
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Created
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {wallets.map((wallet) => (

            <tr
              key={wallet.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4 font-semibold">
                {wallet.wallet_number}
              </td>

              <td className="px-6 py-4">

                <div>

                  <p className="font-medium">

                    {wallet.user.first_name}{" "}
                    {wallet.user.last_name}

                  </p>

                  <p className="text-sm text-slate-500">

                    {wallet.user.email}

                  </p>

                </div>

              </td>

              <td className="px-6 py-4">
                {wallet.currency}
              </td>

              <td className="px-6 py-4 font-bold">
                {Number(wallet.balance).toLocaleString()}
              </td>

              <td className="px-6 py-4">
                <WalletStatusBadge
                  active={wallet.is_active}
                />
              </td>

              <td className="px-6 py-4">
                {new Date(
                  wallet.created_at
                ).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/admin/wallets/${wallet.id}`}
                    className="rounded-lg p-2 hover:bg-blue-100"
                  >
                    <Eye size={18} />
                  </Link>

                  <button className="rounded-lg p-2 hover:bg-green-100">
                    <Plus size={18} />
                  </button>

                  <button className="rounded-lg p-2 hover:bg-yellow-100">
                    <Minus size={18} />
                  </button>

                  {wallet.is_active ? (
                    <button className="rounded-lg p-2 hover:bg-red-100">
                      <Lock size={18} />
                    </button>
                  ) : (
                    <button className="rounded-lg p-2 hover:bg-green-100">
                      <Unlock size={18} />
                    </button>
                  )}

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}