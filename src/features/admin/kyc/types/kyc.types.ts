export interface KycUser {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  country: string | null;
  is_verified: boolean;
}

export interface KycReviewer {
  id: number | null;
  name: string | null;
}

export interface Kyc {
  id: number;

  user: KycUser;

  first_name: string;
  last_name: string;
  middle_name: string | null;

  date_of_birth: string | null;
  gender: string | null;
  marital_status: string | null;
  nationality: string | null;

  occupation: string | null;
  source_of_income: string | null;

  level: number;

  status:
    | "pending"
    | "under_review"
    | "approved"
    | "rejected"
    | "expired";

  is_verified: boolean;

  document_type: string | null;
  document_country: string | null;

  id_type: string | null;
  id_number: string | null;

  id_front: string | null;
  id_back: string | null;
  selfie: string | null;

  verification_provider: string | null;
  provider_reference: string | null;

  reviewed_by: KycReviewer | null;

  admin_note: string | null;
  rejection_reason: string | null;
  reject_code: string | null;

  reviewed_at: string | null;
  approved_at: string | null;
  rejected_at: string | null;

  created_at: string;
  updated_at: string;
}

export interface KycStatistics {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  under_review: number;
}

export interface KycFilters {
  search?: string;

  status?: string;

  level?: number;

  country?: string;

  document_type?: string;

  page?: number;

  per_page?: number;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  has_more_pages: boolean;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: PaginationMeta;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApproveKycPayload {
  kyc_level: number;

  verification_provider?: string;

  provider_reference?: string;

  note?: string;

  notify_user?: boolean;

  update_transaction_limits?: boolean;
}

export interface RejectKycPayload {
  reason: string;

  reject_code: string;

  note?: string;

  notify_user?: boolean;

  allow_resubmission?: boolean;
}