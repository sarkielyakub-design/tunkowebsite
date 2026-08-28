"use client";

import { useEffect, useState } from "react";
import { getBeneficiaries } from "@/src/api/beneficiary";

export function useBeneficiaries() {
  const [beneficiaries, setBeneficiaries] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response =
          await getBeneficiaries();

        if (response.success) {
          setBeneficiaries(
            response.data
          );
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    beneficiaries,
    loading,
  };
}