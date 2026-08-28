"use client";

import { useQuery } from "@tanstack/react-query";
import { getVouchers } from "../api/voucher.service";
import type { VoucherFilters } from "../types/voucher";

export function useVouchers(filters: VoucherFilters = {}) {
  return useQuery({
    queryKey: ["admin-vouchers", filters],
    queryFn: () => getVouchers(filters),
    staleTime: 15_000,
  });
}
