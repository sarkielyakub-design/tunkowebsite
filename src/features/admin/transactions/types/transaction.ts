export interface TransactionUser {
  id: number;

  first_name?: string;

  last_name?: string;

  name: string;

  email: string;

  phone?: string;
}

export interface TransactionAdmin {
  id?: number;

  name?: string;

  updated_by?: number;
}

export interface RefundInformation {
  original_transaction?: number;

  refunded_at?: string;
}

export interface TransactionMeta {
  original_transaction?: number;

  admin_id?: number;

  admin_name?: string;

  updated_by?: number;

  refunded_at?: string;

  note?: string;

  admin_note?: string;

  [key: string]: any;
}

export interface Transaction {
  id: number;
  reference: string;
  gateway_reference?: string | null;

  user: TransactionUser;

  type: string;
  status: string;

  payment_gateway?: string;

  amount: number;
  fee: number;
  total: number;

  currency: string;

  description?: string;

  meta: TransactionMeta;

  admin: TransactionAdmin;

  refund: RefundInformation;

  completed_at?: string | null;

  created_at: string;
  updated_at: string;

  is_success: boolean;
  is_pending: boolean;
  is_failed: boolean;
  is_refunded: boolean;

  can_refund: boolean;

  // Add this if your backend supports updating status
  can_update_status?: boolean;
}
export interface Pagination {
  current_page: number;

  last_page: number;

  per_page: number;

  total: number;

  from: number | null;

  to: number | null;

  has_more_pages: boolean;
}

export interface PaginationLinks {
  first: string | null;

  last: string | null;

  previous: string | null;

  next: string | null;
}

export interface TransactionFilters {
  page?: number;

  per_page?: number;

  search?: string;

  status?: string;

  type?: string;

  payment_gateway?: string;

  currency?: string;

  user_id?: number;

  min_amount?: number;

  max_amount?: number;

  from_date?: string;

  to_date?: string;

  sort?: string;

  direction?: "asc" | "desc";
}

export interface TransactionStatistics {
  total_transactions: number;

  successful_transactions: number;

  pending_transactions: number;

  processing_transactions: number;

  failed_transactions: number;

  refunded_transactions: number;

  cancelled_transactions: number;

  total_volume: number;

  today_volume: number;

  week_volume: number;

  month_volume: number;

  total_fees: number;

  average_transaction: number;

  today_transactions: number;

  today_successful: number;
}

export interface TransactionResponse {
  success: boolean;

  data: Transaction;
}

export interface TransactionListResponse {
  success: boolean;

  data: Transaction[];

  pagination: Pagination;

  links: PaginationLinks;

  filters: TransactionFilters;
}