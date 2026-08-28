import adminApi from "@/lib/admin-api";
import {
  Transfer,
  TransferFilters,
  TransferListResponse,
  TransferStatistics,
} from "../types/transfer";

interface TransferResponse {
  success: boolean;
  data: Transfer;
}

interface StatisticsResponse {
  success: boolean;
  data: TransferStatistics;
}

class TransferService {  async getTransfers(
    filters: TransferFilters = {}
  ): Promise<TransferListResponse> {
    const { data } = await adminApi.get("/admin/transfers", {
      params: filters,
    });

    return data;
  }  async getTransfer(
    id: number | string
  ): Promise<TransferResponse> {
    const { data } = await adminApi.get(
      `/admin/transfers/${id}`
    );

    return data;
  }  async getStatistics(): Promise<StatisticsResponse> {
    const { data } = await adminApi.get(
      "/admin/transfers/statistics"
    );

    return data;
  }  async approveTransfer(
    id: number | string,
    payload: {
      provider: string;
      provider_reference?: string;
      exchange_rate: number;
      recipient_amount: number;
      note?: string;
    }
  ): Promise<TransferResponse> {
    const { data } = await adminApi.post(
      `/admin/transfers/${id}/approve`,
      payload
    );

    return data;
  }  
  async rejectTransfer(
    id: number | string,
    payload: {
      reason: string;
      reject_code: string;
      refund_wallet: boolean;
      note?: string;
    }
  ): Promise<TransferResponse> {
    const { data } = await adminApi.post(
      `/admin/transfers/${id}/reject`,
      payload
    );

    return data;
  }  
  async cancelTransfer(
    id: number | string,
    payload: {
      reason: string;
      refund_wallet: boolean;
      note?: string;
    }
  ): Promise<TransferResponse> {
    const { data } = await adminApi.post(
      `/admin/transfers/${id}/cancel`,
      payload
    );

    return data;
  }  async retryTransfer(
    id: number | string,
    payload: {
      provider?: string;
      note?: string;
    }
  ): Promise<TransferResponse> {
    const { data } = await adminApi.post(
      `/admin/transfers/${id}/retry`,
      payload
    );

    return data;
  }
}export default new TransferService();