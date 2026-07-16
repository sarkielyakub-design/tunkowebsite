"use client";

import WalletStatusBadge from "./WalletStatusBadge";

interface Props {
  wallet: any;
}

function money(
  amount: number | string,
  currency: string
) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount || 0)) + ` ${currency}`;
}

export default function WalletInfoCard({
  wallet,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white">

      <div className="border-b p-6">

        <h2 className="text-xl font-semibold">
          Wallet Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Complete wallet information.
        </p>

      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">

        <Item
          label="Wallet Number"
          value={wallet.wallet_number}
        />

        <Item
          label="Account Name"
          value={wallet.user?.full_name}
        />

        <Item
          label="Email"
          value={wallet.user?.email}
        />

        <Item
          label="Phone Number"
          value={wallet.user?.phone}
        />

        <Item
          label="Country"
          value={wallet.user?.country?.name}
        />

        <Item
          label="Currency"
          value={wallet.currency}
        />

        <Item
          label="Current Balance"
          value={money(
            wallet.balance,
            wallet.currency
          )}
        />

        <Item
          label="Available Balance"
          value={money(
            wallet.available_balance,
            wallet.currency
          )}
        />

        <Item
          label="Ledger Balance"
          value={money(
            wallet.ledger_balance,
            wallet.currency
          )}
        />

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Status
          </p>

          <div className="mt-2">
            <WalletStatusBadge
              status={wallet.status}
            />
          </div>

        </div>

        <Item
          label="Created"
          value={
            wallet.created_at
              ? new Date(
                  wallet.created_at
                ).toLocaleString()
              : "-"
          }
        />

        <Item
          label="Updated"
          value={
            wallet.updated_at
              ? new Date(
                  wallet.updated_at
                ).toLocaleString()
              : "-"
          }
        />

      </div>

    </div>
  );
}

function Item({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div>

      <p className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-base font-semibold break-all">
        {value ?? "-"}
      </p>

    </div>
  );
}