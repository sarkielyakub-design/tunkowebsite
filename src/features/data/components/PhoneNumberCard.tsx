"use client";

import {
  Phone,
  Contact,
  CheckCircle2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  phone: string;
  onChange: (value: string) => void;
  countryCode: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function PhoneNumberCard({
  phone,
  onChange,
  countryCode,
  placeholder = "Enter phone number",
  disabled = false,
}: Props) {
  const valid = phone.length >= 10;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-emerald-100 p-3">

          <Phone className="h-6 w-6 text-emerald-600" />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            Recipient Number
          </h2>

          <p className="text-sm text-slate-500">
            Enter the phone number that will receive the data bundle.
          </p>

        </div>

      </div>

      <div className="flex gap-3">

        <div className="flex h-12 min-w-[90px] items-center justify-center rounded-xl border bg-slate-50 px-4 font-semibold">

          {countryCode}

        </div>

        <Input
          value={phone}
          disabled={disabled}
          inputMode="numeric"
          placeholder={placeholder}
          onChange={(e) =>
            onChange(
              e.target.value.replace(/\D/g, "")
            )
          }
          className="h-12 rounded-xl"
        />

        <Button
          type="button"
          variant="outline"
          className="h-12 rounded-xl"
        >
          <Contact className="h-5 w-5" />
        </Button>

      </div>

      {valid && (

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-green-50 p-4">

          <CheckCircle2 className="h-5 w-5 text-green-600" />

          <p className="text-sm font-medium text-green-700">
            Valid phone number.
          </p>

        </div>

      )}

    </div>
  );
}