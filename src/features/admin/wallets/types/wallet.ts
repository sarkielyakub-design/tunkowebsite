export interface WalletUser {
  id: number;
  name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  country?: string | null;
  is_verified?: boolean;
  is_active?: boolean;
}

export interface Wallet {
  id: number;
  wallet_number: string;
  currency: string;

  balance: number;
  available_balance: number;
  locked_balance: number;
  pending_balance: number;

  is_active: boolean;
  is_frozen: boolean;
  freeze_reason?: string | null;

  transactions_count?: number;

  user: WalletUser;

  created_at: string;
  updated_at: string;
}

export interface WalletSummary {
  total_wallets: number;
  active_wallets: number;
  inactive_wallets: number;
  frozen_wallets: number;
  total_balance: number;
}

export interface WalletPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from?: number | null;
  to?: number | null;
}

export interface WalletResponse {
  success: boolean;
  data: Wallet[];
  pagination: WalletPagination;
  summary?: {
    wallets: number;
  };
}

export interface WalletSingleResponse {
  success: boolean;
  data: Wallet;
  message?: string;
}

export interface WalletSummaryResponse {
  success: boolean;
  data: WalletSummary;
}

export interface WalletTransaction {
  id: number;
  reference?: string | null;
  type?: string | null;
  amount?: number | string | null;
  fee?: number | string | null;
  total?: number | string | null;
  currency?: string | null;
  status?: string | null;
  description?: string | null;
  created_at?: string | null;
  completed_at?: string | null;
  meta?: Record<string, unknown> | null;
}

export interface WalletTransactionsResponse {
  success: boolean;
  data: WalletTransaction[];
  pagination?: WalletPagination;
}

export interface WalletStatementResponse {
  success: boolean;
  data: WalletTransaction[];
  pagination?: WalletPagination;
}