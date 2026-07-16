"use client";

import { toast } from "sonner";

import { initializeDeposit } from "@/src/api/wallet";

export function useFundWallet() {

  async function fundWallet(amount: number) {

    try {

      const response = await initializeDeposit({
        amount,
      });

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success("Redirecting to payment...");

      window.location.href =
        response.authorization_url;

    } catch (error: any) {

      toast.error(
        error?.response?.data?.message ??
          "Unable to initialize payment."
      );

    }
  }

  return {
    fundWallet,
  };
}