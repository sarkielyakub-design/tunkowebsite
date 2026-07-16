"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getTransactions,
  getTransactionStatistics,
  getTransaction,
} from "../api/transactions";

export interface TransactionFilters {
  page?: number;
  search?: string;
  status?: string;
  type?: string;
  currency?: string;
  user?: string;
}

/**
 * Transaction List
 */
export function useTransactions(
  filters: TransactionFilters = {}
) {
  const cleanFilters: TransactionFilters = {};

  if (filters.page) cleanFilters.page = filters.page;

  if (filters.search?.trim()) {
    cleanFilters.search = filters.search.trim();
  }

  if (filters.status?.trim()) {
    cleanFilters.status = filters.status.trim();
  }

  if (filters.type?.trim()) {
    cleanFilters.type = filters.type.trim();
  }

  if (filters.currency?.trim()) {
    cleanFilters.currency = filters.currency.trim();
  }

  if (filters.user?.trim()) {
    cleanFilters.user = filters.user.trim();
  }

  return useQuery({
    queryKey: ["transactions", cleanFilters],

    queryFn: async () => {
      const response = await getTransactions(cleanFilters);
      return response.data;
    },

    staleTime: 60 * 1000,

    retry: 1,
  });
}

/**
 * Transaction Statistics
 */
export function useTransactionStatistics() {
  return useQuery({
    queryKey: ["transaction-statistics"],

    queryFn: async () => {
      const response = await getTransactionStatistics();
      return response.data;
    },

    staleTime: 60 * 1000,
  });
}

/**
 * Transaction Details
 */
export function useTransaction(
  transactionId: number | string
) {
  return useQuery({
    queryKey: ["transaction", transactionId],

    queryFn: async () => {
      const response = await getTransaction(
        transactionId
      );

      return response.data;
    },

    enabled: !!transactionId,

    staleTime: 60 * 1000,
  });
}