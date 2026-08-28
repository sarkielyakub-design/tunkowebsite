import adminApi from "@/lib/admin-api";
import {
  Withdrawal,
  WithdrawalFilters,
  WithdrawalStatistics,
   PaginatedResponse,
  ApiResponse,
  ApproveWithdrawalPayload,
  RejectWithdrawalPayload,
  CancelWithdrawalPayload,
  RetryWithdrawalPayload,
} from "./types";

class WithdrawalService {
  async getWithdrawals(params?: WithdrawalFilters) {
    const response = await adminApi.get<
      PaginatedResponse<Withdrawal>
    >("/admin/withdrawals", {
      params,
    });

    return response.data;
  }

  async getWithdrawal(id: number | string) {
    const response = await adminApi.get<
      ApiResponse<Withdrawal>
    >(`/admin/withdrawals/${id}`);

    return response.data;
  }

  async getStatistics() {
    const response = await adminApi.get<
      ApiResponse<WithdrawalStatistics>
    >("/admin/withdrawals/statistics");

    return response.data;
  }

  async approveWithdrawal(
    id: number | string,
    payload: ApproveWithdrawalPayload
  ) {
    const response = await adminApi.post<
      ApiResponse<Withdrawal>
    >(`/admin/withdrawals/${id}/approve`, payload);

    return response.data;
  }

  async rejectWithdrawal(
    id: number | string,
    payload: RejectWithdrawalPayload
  ) {
    const response = await adminApi.post<
      ApiResponse<Withdrawal>
    >(`/admin/withdrawals/${id}/reject`, payload);

    return response.data;
  }

  async cancelWithdrawal(
    id: number | string,
    payload: CancelWithdrawalPayload
  ) {
    const response = await adminApi.post<
      ApiResponse<Withdrawal>
    >(`/admin/withdrawals/${id}/cancel`, payload);

    return response.data;
  }

  async retryWithdrawal(
    id: number | string,
    payload: RetryWithdrawalPayload
  ) {
    const response = await adminApi.post<
      ApiResponse<Withdrawal>
    >(`/admin/withdrawals/${id}/retry`, payload);

    return response.data;
  }
  
}

export default new WithdrawalService();
