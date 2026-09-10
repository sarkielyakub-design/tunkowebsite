import adminApi from "@/lib/admin-api";

import type {
  WalletResponse,
  WalletSingleResponse,
  WalletSummaryResponse,
  WalletTransactionsResponse,
  WalletStatementResponse,
} from "../types/wallet";

export interface WalletFilters {
  page?: number;
  per_page?: number;
  search?: string;
  status?: "active" | "inactive" | "frozen";
  currency?: string;
  is_active?: boolean;
  min_balance?: number;
  max_balance?: number;
  sort?: "balance" | "wallet_number" | "currency" | "created_at";
  direction?: "asc" | "desc";
}

export interface WalletAmountPayload {
  amount: number;
  reason: string;
  note?: string;
}

export interface FreezeWalletPayload {
  reason?: string;
}

export async function getWallets(
  filters?: WalletFilters
): Promise<WalletResponse> {
  const params = Object.fromEntries(
    Object.entries(filters ?? {}).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
  );

  const { data } = await adminApi.get<WalletResponse>(
    "/admin/wallets",
    { params }
  );

  return data;
}

export async function getWalletSummary(): Promise<WalletSummaryResponse> {
  const { data } =
    await adminApi.get<WalletSummaryResponse>(
      "/admin/wallets/summary"
    );

  return data;
}

export async function getWallet(
  walletId: number | string
): Promise<WalletSingleResponse> {
  const { data } =
    await adminApi.get<WalletSingleResponse>(
      `/admin/wallets/${walletId}`
    );

  return data;
}

export async function creditWallet(
  walletId: number | string,
  payload: WalletAmountPayload
): Promise<WalletSingleResponse> {
  const { data } =
    await adminApi.post<WalletSingleResponse>(
      `/admin/wallets/${walletId}/credit`,
      payload
    );

  return data;
}

export async function debitWallet(
  walletId: number | string,
  payload: WalletAmountPayload
): Promise<WalletSingleResponse> {
  const { data } =
    await adminApi.post<WalletSingleResponse>(
      `/admin/wallets/${walletId}/debit`,
      payload
    );

  return data;
}

export async function freezeWallet(
  walletId: number | string,
  payload?: FreezeWalletPayload
): Promise<WalletSingleResponse> {
  const { data } =
    await adminApi.post<WalletSingleResponse>(
      `/admin/wallets/${walletId}/freeze`,
      payload
    );

  return data;
}

export async function unfreezeWallet(
  walletId: number | string
): Promise<WalletSingleResponse> {
  const { data } =
    await adminApi.post<WalletSingleResponse>(
      `/admin/wallets/${walletId}/unfreeze`
    );

  return data;
}

export async function getWalletStatement(
  walletId: number | string,
  page = 1
): Promise<WalletStatementResponse> {
  const { data } =
    await adminApi.get<WalletStatementResponse>(
      `/admin/wallets/${walletId}/statement`,
      {
        params: { page },
      }
    );

  return data;
}

export async function getWalletTransactions(
  walletId: number | string,
  page = 1
): Promise<WalletTransactionsResponse> {
  const { data } =
    await adminApi.get<WalletTransactionsResponse>(
      `/admin/wallets/${walletId}/transactions`,
      {
        params: { page },
      }
    );

  return data;
}