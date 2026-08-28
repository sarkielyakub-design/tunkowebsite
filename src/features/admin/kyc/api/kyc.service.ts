import adminApi from "@/lib/admin-api";

import {
  ApiResponse,
  ApproveKycPayload,
  Kyc,
  KycFilters,
  KycStatistics,
  PaginatedResponse,
  RejectKycPayload,
} from "../types/kyc.types";

const BASE_URL = "/admin/kycs";

class KycService {
  /**
   * Get KYC List
   */
  async getKycs(
    filters: KycFilters = {}
  ): Promise<PaginatedResponse<Kyc>> {
    const { data } = await adminApi.get(BASE_URL, {
      params: filters,
    });

    return data;
  }

  /**
   * Get Single KYC
   */
  async getKyc(
    id: number
  ): Promise<ApiResponse<Kyc>> {
    const { data } = await adminApi.get(
      `${BASE_URL}/${id}`
    );

    return data;
  }

  /**
   * Get KYC Statistics
   */
  async getStatistics(): Promise<ApiResponse<KycStatistics>> {
    const { data } = await adminApi.get(
      `${BASE_URL}/statistics`
    );

    return data;
  }

  /**
   * Approve KYC
   */
  async approveKyc(
    id: number,
    payload: ApproveKycPayload
  ): Promise<ApiResponse<Kyc>> {
    const { data } = await adminApi.post(
      `${BASE_URL}/${id}/approve`,
      payload
    );

    return data;
  }

  /**
   * Reject KYC
   */
  async rejectKyc(
    id: number,
    payload: RejectKycPayload
  ): Promise<ApiResponse<Kyc>> {
    const { data } = await adminApi.post(
      `${BASE_URL}/${id}/reject`,
      payload
    );

    return data;
  }
}

export default new KycService();