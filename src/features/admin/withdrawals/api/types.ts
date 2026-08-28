export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
}

export interface Wallet {
  id: number;
  account_number?: string;
  currency: string;
  balance: number;
}

export interface Withdrawal {
  id: number;
  reference: string;

  user_id: number;
  wallet_id: number;

  amount: number;
  fee: number;
  total: number;

  currency: string;

  provider?: string;
  provider_reference?: string;
  provider_status?: string;
  provider_response?: string;

  status:
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "rejected"
    | "cancelled";

  reject_reason?: string;
  reject_code?: string;

  cancel_reason?: string;
  cancel_code?: string;

  approved_by?: number;
  approved_at?: string;

  cancelled_at?: string;

  retry_count?: number;
  last_retry_at?: string;

  admin_note?: string;
  remark?: string;

  created_at: string;
  updated_at: string;

  user?: User;
  wallet?: Wallet;
}

export interface WithdrawalStatistics {
  total_withdrawals: number;
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  rejected: number;
  cancelled: number;
  total_volume: number;
  today_volume: number;
}

export interface WithdrawalListResponse {
  success: boolean;
  message?: string;
  data: {
    current_page: number;
    data: Withdrawal[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
  };
}

export interface WithdrawalResponse {
  success: boolean;
  message?: string;
  data: Withdrawal;
}

export interface StatisticsResponse {
  success: boolean;
  data: WithdrawalStatistics;
}

export interface ApproveWithdrawalPayload {
  provider: string;
  provider_reference?: string;
  provider_status: string;
  provider_response?: string;
  debit_wallet: boolean;
  note?: string;
}

export interface RejectWithdrawalPayload {
  reason: string;
  reject_code: string;
  refund_wallet: boolean;
  note?: string;
}

export interface CancelWithdrawalPayload {
  reason: string;
  cancel_code: string;
  refund_wallet: boolean;
  note?: string;
}

export interface RetryWithdrawalPayload {
  provider?: string;
  note?: string;
}
export interface WithdrawalFilters {
  page?: number;
  per_page?: number;

  search?: string;

  status?: string;

  provider?: string;

  currency?: string;

  user_id?: number;

  from_date?: string;

  to_date?: string;

  sort_by?: string;

  sort_order?: "asc" | "desc";
}
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}
export interface PaginatedResponse<T> {
  success: boolean;
  message?: string;
  data: PaginationMeta & {
    data: T[];
  };
}export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  per_page: number;
  to: number | null;
  total: number;

  first_page_url?: string;
  last_page_url?: string;
  next_page_url?: string | null;
  prev_page_url?: string | null;
  path?: string;

  links?: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}
export interface WithdrawalFilters {
  page?: number;
  per_page?: number;

  search?: string;

  status?: string;
  provider?: string;
  currency?: string;

  user_id?: number;

  from_date?: string;
  to_date?: string;

  sort_by?: string;
  sort_order?: "asc" | "desc";
}