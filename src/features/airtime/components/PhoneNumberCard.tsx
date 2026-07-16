"use client";

import {
  Phone,
} from "lucide-react";

import { Input } from "@/components/ui/input";

interface Props {
  phone: string;
  onChange: (value: string) => void;
}

export default function PhoneNumberCard({
  phone,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Phone Number
      </h2>

      <div className="relative">

        <Phone className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

        <Input
          value={phone}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Enter phone number"
          className="h-14 rounded-2xl pl-12"
        />

      </div>

    </div>
  );
}