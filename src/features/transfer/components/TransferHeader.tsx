"use client";

import { ArrowLeft, SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface TransferHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function TransferHeader({
  title = "Send Money",
  subtitle = "Transfer money securely to Tunko users, bank accounts or mobile money.",
}: TransferHeaderProps) {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-xl">

      <div className="flex items-start justify-between p-8">

        <div className="flex items-start gap-4">

          <Button
            size="icon"
            variant="secondary"
            onClick={() => router.back()}
            className="rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-white/20 p-3">

                <SendHorizontal className="h-7 w-7" />

              </div>

              <div>

                <h1 className="text-3xl font-bold">
                  {title}
                </h1>

                <p className="mt-1 max-w-md text-sm text-blue-100">
                  {subtitle}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-3 border-t border-white/10 bg-white/10">

        <div className="p-5 text-center">

          <p className="text-xs uppercase tracking-wide text-blue-100">
            Fast
          </p>

          <h3 className="mt-1 font-semibold">
            Instant
          </h3>

        </div>

        <div className="border-x border-white/10 p-5 text-center">

          <p className="text-xs uppercase tracking-wide text-blue-100">
            Security
          </p>

          <h3 className="mt-1 font-semibold">
            Encrypted
          </h3>

        </div>

        <div className="p-5 text-center">

          <p className="text-xs uppercase tracking-wide text-blue-100">
            Fee
          </p>

          <h3 className="mt-1 font-semibold">
            Low Cost
          </h3>

        </div>

      </div>

    </div>
  );
}