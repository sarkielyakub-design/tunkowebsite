export type VoucherType = "airtime" | "data" | "other" | string;
export type VoucherStatus = "available" | "sold" | "cancelled" | string;

export interface Voucher {
  id: number;
  reference: string;
  type: VoucherType;
  country_code: string;
  network_id?: number | string | null;
  network_name?: string | null;
  product_name?: string | null;
  amount: number | string;
  currency: string;
  status: VoucherStatus;
  provider?: string | null;
  provider_reference?: string | null;
  user_id?: number | null;
  purchase_reference?: string | null;
  sold_at?: string | null;
  expires_at?: string | null;
  remark?: string | null;
  created_at?: string;
}

export interface VoucherFilters {
  type?: string;
  country_code?: string;
  network_id?: string;
  status?: string;
  search?: string;
  page?: number;
  per_page?: number;
}

export interface CreateVoucherPayload {
  reference?: string;
  type: string;
  country_code: string;
  network_id?: number | string | null;
  network_name?: string;
  product_name?: string;
  amount: number;
  currency: string;
  pin: string;
  provider?: string;
  provider_reference?: string;
  expires_at?: string | null;
  remark?: string;
  meta?: Record<string, unknown>;
}

export interface VoucherListResponse {
  success: boolean;
  data: {
    data: Voucher[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}
