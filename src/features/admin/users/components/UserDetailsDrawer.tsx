"use client";

import {
  X,
  Mail,
  Phone,
  Globe,
  Wallet,
  ShieldCheck,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  user: any;
}

export default function UserDetailsDrawer({
  open,
  onClose,
  user,
}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50">

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">

            User Details

          </h2>

          <button onClick={onClose}>

            <X />

          </button>

        </div>

        <div className="space-y-6 p-6">

          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">

              {user.first_name?.charAt(0)}
              {user.last_name?.charAt(0)}

            </div>

            <div>

              <h2 className="text-2xl font-bold">

                {user.first_name} {user.last_name}

              </h2>

              <p className="text-slate-500">

                Customer

              </p>

            </div>

          </div>

          <div className="space-y-4">

            <InfoRow
              icon={<Mail size={18} />}
              label="Email"
              value={user.email}
            />

            <InfoRow
              icon={<Phone size={18} />}
              label="Phone"
              value={user.phone}
            />

            <InfoRow
              icon={<Globe size={18} />}
              label="Country"
              value={user.country?.name}
            />

            <InfoRow
              icon={<Wallet size={18} />}
              label="Wallet"
              value={`₦${Number(
                user.wallet?.balance ?? 0
              ).toLocaleString()}`}
            />

            <InfoRow
              icon={<ShieldCheck size={18} />}
              label="KYC"
              value={
                user.is_verified
                  ? "Verified"
                  : "Pending"
              }
            />

          </div>

        </div>

      </div>

    </div>

  );
}

function InfoRow({
  icon,
  label,
  value,
}: any) {

  return (

    <div className="flex items-center justify-between rounded-xl border p-4">

      <div className="flex items-center gap-3">

        {icon}

        <span className="font-medium">

          {label}

        </span>

      </div>

      <span className="text-slate-600">

        {value ?? "-"}

      </span>

    </div>

  );

}