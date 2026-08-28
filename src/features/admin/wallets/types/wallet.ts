export interface WalletUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface Wallet {
  id: number;
  wallet_number: string;
  balance: number;
  currency: string;
  is_active: boolean;

  user: WalletUser;

  created_at: string;
  updated_at: string;
}

export interface WalletSummary {
  total_wallets: number;
  active_wallets: number;
  frozen_wallets: number;
  total_balance: number;
}

export interface WalletPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface WalletResponse {
  data: Wallet[];

  meta: WalletPagination;
}

export interface WalletSummaryResponse {
  data: WalletSummary;
}