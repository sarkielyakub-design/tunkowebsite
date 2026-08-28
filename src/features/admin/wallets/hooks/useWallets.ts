"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getWallets,
  getWalletSummary,
  getWallet,
  getWalletTransactions,
  getWalletStatement,
} from "../api/wallets";

export interface WalletFilters {
  page?: number;
  per_page?: number;
  search?: string;
  status?: string;
  currency?: string;
  country?: string;
  sort?: "balance" | "wallet_number" | "currency" | "created_at";
  direction?: "asc" | "desc";
}

/*
|--------------------------------------------------------------------------
| Wallet List
|--------------------------------------------------------------------------
*/

export function useWallets(filters: WalletFilters = {}) {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
  );

  return useQuery({
    queryKey: ["wallets", cleanFilters],

    queryFn: async () => {
      return await getWallets(cleanFilters);
    },

    staleTime: 60 * 1000,

    retry: 1,
  });
}

/*
|--------------------------------------------------------------------------
| Wallet Summary
|--------------------------------------------------------------------------
*/

export function useWalletSummary() {
  return useQuery({
    queryKey: ["wallet-summary"],

    queryFn: getWalletSummary,

    staleTime: 60 * 1000,

    retry: 1,
  });
}

/*
|--------------------------------------------------------------------------
| Wallet Details
|--------------------------------------------------------------------------
*/

export function useWallet(walletId?: number | string) {
  return useQuery({
    queryKey: ["wallet", walletId],

    queryFn: () => getWallet(walletId as string),

    enabled: !!walletId,

    staleTime: 60 * 1000,

    retry: 1,
  });
}

/*
|--------------------------------------------------------------------------
| Wallet Transactions
|--------------------------------------------------------------------------
*/

export function useWalletTransactions(
  walletId?: number | string,
  page = 1
) {
  return useQuery({
    queryKey: [
      "wallet-transactions",
      walletId,
      page,
    ],

    queryFn: () =>
      getWalletTransactions(
        walletId as string,
        page
      ),

    enabled: !!walletId,

    staleTime: 60 * 1000,

    retry: 1,
  });
}

/*
|--------------------------------------------------------------------------
| Wallet Statement
|--------------------------------------------------------------------------
*/

export function useWalletStatement(
  walletId?: number | string,
  page = 1
) {
  return useQuery({
    queryKey: [
      "wallet-statement",
      walletId,
      page,
    ],

    queryFn: () =>
      getWalletStatement(
        walletId as string,
        page
      ),

    enabled: !!walletId,

    staleTime: 60 * 1000,

    retry: 1,
  });
}