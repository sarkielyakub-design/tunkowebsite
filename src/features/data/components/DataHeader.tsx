"use client";

import Link from "next/link";
import { ArrowLeft, Wifi, History } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DataHeader() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 text-white shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <Link href="/dashboard">

            <Button
              size="icon"
              variant="secondary"
              className="mb-6 h-11 w-11 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

          </Link>

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">

              <Wifi className="h-8 w-8" />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                Buy Data
              </h1>

              <p className="mt-1 text-blue-100">
                Purchase mobile data bundles instantly.
              </p>

            </div>

          </div>

        </div>

        <Link href="/data/history">

          <Button
            variant="secondary"
            className="rounded-xl"
          >
            <History className="mr-2 h-5 w-5" />
            History
          </Button>

        </Link>

      </div>

    </div>
  );
}