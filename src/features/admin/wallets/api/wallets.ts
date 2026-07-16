import adminApi from "@/src/lib/admin-api";

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

export interface WalletAmountPayload {
  amount: number;
  narration: string;
}

export interface FreezeWalletPayload {
  reason?: string;
}

/**
 * Wallet List
 * GET /admin/wallets
 */
export async function getWallets(filters?: WalletFilters) {
  const params = Object.fromEntries(
    Object.entries(filters ?? {}).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
  );

  const { data } = await adminApi.get("/admin/wallets", {
    params,
  });

  return data;
}

/**
 * Wallet Summary
 * GET /admin/wallets/summary
 */
export async function getWalletSummary() {
  const { data } = await adminApi.get(
    "/admin/wallets/summary"
  );

  return data;
}

/**
 * Wallet Details
 * GET /admin/wallets/{wallet}
 */
export async function getWallet(
  walletId: number | string
) {
  const { data } = await adminApi.get(
    `/admin/wallets/${walletId}`
  );

  return data;
}

/**
 * Credit Wallet
 * POST /admin/wallets/{wallet}/credit
 */
export async function creditWallet(
  walletId: number | string,
  payload: WalletAmountPayload
) {
  const { data } = await adminApi.post(
    `/admin/wallets/${walletId}/credit`,
    payload
  );

  return data;
}

/**
 * Debit Wallet
 * POST /admin/wallets/{wallet}/debit
 */
export async function debitWallet(
  walletId: number | string,
  payload: WalletAmountPayload
) {
  const { data } = await adminApi.post(
    `/admin/wallets/${walletId}/debit`,
    payload
  );

  return data;
}

/**
 * Freeze Wallet
 * POST /admin/wallets/{wallet}/freeze
 */
export async function freezeWallet(
  walletId: number | string,
  payload?: FreezeWalletPayload
) {
  const { data } = await adminApi.post(
    `/admin/wallets/${walletId}/freeze`,
    payload
  );

  return data;
}

/**
 * Unfreeze Wallet
 * POST /admin/wallets/{wallet}/unfreeze
 */
export async function unfreezeWallet(
  walletId: number | string
) {
  const { data } = await adminApi.post(
    `/admin/wallets/${walletId}/unfreeze`
  );

  return data;
}

/**
 * Wallet Statement
 * GET /admin/wallets/{wallet}/statement
 */
export async function getWalletStatement(
  walletId: number | string,
  page = 1
) {
  const { data } = await adminApi.get(
    `/admin/wallets/${walletId}/statement`,
    {
      params: { page },
    }
  );

  return data;
}

/**
 * Wallet Transactions
 * GET /admin/wallets/{wallet}/transactions
 */
export async function getWalletTransactions(
  walletId: number | string,
  page = 1
) {
  const { data } = await adminApi.get(
    `/admin/wallets/${walletId}/transactions`,
    {
      params: { page },
    }
  );

  return data;
}