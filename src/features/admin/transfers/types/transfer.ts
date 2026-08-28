export interface TransferSender {
  id: number;

  name: string;

  email: string;

  phone: string;
}export interface TransferRecipient {
  name: string;

  phone: string;

  email: string;

  bank_name: string;

  account_number: string;

  country: string;
}export interface TransferTimeline {
  created?: string;

  processing?: string;

  approved?: string;

  completed?: string;

  failed?: string;

  cancelled?: string;

  [key: string]: any;
}export interface Transfer {
  id: number;

  reference: string;

  sender: TransferSender;

  recipient: TransferRecipient;

  amount: number;

  fee: number;

  total: number;

  exchange_rate: number;

  recipient_amount: number;

  sender_currency: string;

  recipient_currency: string;

  provider: string | null;

  provider_reference: string | null;

  provider_status: string | null;

  compliance_status: string | null;

  risk_score: number | null;

  status: string;

  purpose: string | null;

  source_of_funds: string | null;

  timeline: TransferTimeline | null;

  approved_at: string | null;

  completed_at: string | null;

  created_at: string;

  updated_at: string;
}export interface TransferStatistics {
  total_transfers: number;

  pending: number;

  processing: number;

  completed: number;

  failed: number;

  cancelled: number;

  total_volume: number;

  today_volume: number;
}export interface TransferFilters {
  page?: number;

  per_page?: number;

  search?: string;

  status?: string;

  provider?: string;

  sender_currency?: string;

  recipient_currency?: string;
}export interface Pagination {
  current_page: number;

  last_page: number;

  per_page: number;

  total: number;

  from: number | null;

  to: number | null;
}export interface TransferListResponse {
  success: boolean;

  data: Transfer[];

  pagination: Pagination;

  summary: {
    total_transfers: number;

    current_page: number;
  };
}

export interface TransferResponse {
  success: boolean;

  data: Transfer;
}