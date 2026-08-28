export interface DepositUser {
  id: number;

  name: string;

  email: string;

  phone: string;
}export interface DepositWallet {
  id: number;

  balance: number;

  currency: string;
}export interface Deposit {
  id: number;

  reference: string;

  user: DepositUser;

  wallet: DepositWallet;

  amount: number;

  fee: number;

  total: number;

  currency: string;

  gateway: string | null;

  gateway_reference: string | null;

  payment_method: string | null;

  provider_status: string | null;

  provider_response: string | null;

  status: string;

  admin_note: string | null;

  approved_at: string | null;

  completed_at: string | null;

  created_at: string;

  updated_at: string;
}export interface DepositStatistics {
  total_deposits: number;

  pending: number;

  completed: number;

  failed: number;

  cancelled: number;

  total_volume: number;

  today_volume: number;
}export interface DepositFilters {
  page?: number;

  per_page?: number;

  search?: string;

  status?: string;

  gateway?: string;

  payment_method?: string;

  currency?: string;

  user_id?: number;

  min_amount?: number;

  max_amount?: number;
}export interface Pagination {
  current_page: number;

  last_page: number;

  per_page: number;

  total: number;

  from: number | null;

  to: number | null;
}export interface DepositListResponse {
  success: boolean;

  data: Deposit[];

  pagination: Pagination;

  summary: {
    total_deposits: number;

    current_page: number;
  };
}

export interface DepositResponse {
  success: boolean;

  data: Deposit;
}