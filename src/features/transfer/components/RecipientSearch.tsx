"use client";

import { useState } from "react";
import {
  Search,
  UserRound,
  Loader2,
} from "lucide-react";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { searchRecipient } from "@/src/api/transfer";

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
  onFound: (recipient: Recipient) => void;
}

export default function RecipientSearch({
  onFound,
}: Props) {
  const [query, setQuery] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSearch() {
    if (!query.trim()) {
      toast.error("Enter phone, username or wallet number.");
      return;
    }

    try {
      setLoading(true);

      const response =
        await searchRecipient(query);

      if (response.success) {

        onFound(response.recipient);

        toast.success("Recipient found.");

      }

    } catch (error: any) {

      toast.error(
        error.response?.data?.message ??
          "Recipient not found."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Recipient
        </h2>

        <p className="text-sm text-slate-500">
          Search using wallet number,
          username or phone number.
        </p>

      </div>

      <div className="flex gap-3">

        <Input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Wallet / Username / Phone"
          className="h-12 rounded-xl"
        />

        <Button
          onClick={handleSearch}
          disabled={loading}
          className="h-12 rounded-xl"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>

      </div>

      <div className="mt-6 rounded-2xl border border-dashed p-6 text-center">

        <UserRound className="mx-auto h-10 w-10 text-slate-300" />

        <p className="mt-3 text-slate-500">
          Enter a phone number, username or wallet number and press Search.
        </p>

      </div>

    </div>
  );
}