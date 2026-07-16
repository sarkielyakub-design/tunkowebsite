"use client";

import { useEffect, useState } from "react";
import {
  getDashboard,
  DashboardResponse,
} from "@/src/api/dashboard";

export function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const response = await getDashboard();

      if (response.success) {
        setDashboard(response);
      } else {
        setError("Unable to load dashboard.");
      }
    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.message ??
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    dashboard,
    loading,
    error,
    reload: loadDashboard,
  };
}