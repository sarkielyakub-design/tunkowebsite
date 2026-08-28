import adminApi from "@/lib/admin-api";
import {
  DepositFilters,
  DepositListResponse,
  DepositResponse,
  DepositStatistics,
} from "../types/deposit";

class DepositService {
  async getDeposits(
    filters: DepositFilters
  ): Promise<DepositListResponse> {
    const { data } = await adminApi.get(
      "/admin/deposits",
      {
        params: filters,
      }
    );

    return data;
  }

  async getDeposit(
    id: number | string
  ): Promise<DepositResponse> {
    const { data } = await adminApi.get(
      `/admin/deposits/${id}`
    );

    return data;
  }

  async getStatistics(): Promise<{
    success: boolean;
    data: DepositStatistics;
  }> {
    const { data } = await adminApi.get(
      "/admin/deposits/statistics"
    );

    return data;
  }

  async approveDeposit(
    id: number | string,
    payload: {
      gateway_reference: string;
      provider_status: string;
      provider_response?: string;
      note?: string;
    }
  ) {
    const { data } = await adminApi.post(
      `/admin/deposits/${id}/approve`,
      payload
    );

    return data;
  }

  async rejectDeposit(
    id: number | string,
    payload: {
      reason: string;
      reject_code: string;
      provider_response?: string;
      note?: string;
    }
  ) {
    const { data } = await adminApi.post(
      `/admin/deposits/${id}/reject`,
      payload
    );

    return data;
  }

  async cancelDeposit(
    id: number | string,
    payload: {
      reason: string;
      cancel_code: string;
      note?: string;
    }
  ) {
    const { data } = await adminApi.post(
      `/admin/deposits/${id}/cancel`,
      payload
    );

    return data;
  }
}

export default new DepositService();