"use client";

import { useState } from "react";
import { toast } from "sonner";

import { createPin } from "@/src/api/pin";

export function usePin() {
  const [loading, setLoading] =
    useState(false);

  async function savePin(
    pin: string,
    confirmPin: string
  ) {
    try {
      setLoading(true);

      const response =
        await createPin(
          pin,
          confirmPin
        );

      toast.success(response.message);

      return true;

    } catch (error: any) {

      toast.error(
        error.response?.data?.message ??
        "Unable to create PIN."
      );

      return false;

    } finally {

      setLoading(false);

    }
  }

  return {

    loading,

    savePin,

  };
}