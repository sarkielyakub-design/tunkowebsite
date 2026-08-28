import adminApi from "@/lib/admin-api";

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

class TransactionService {
  /**
   * Transaction List
   */
  async index(filters: TransactionFilters = {}) {
    const { data } = await adminApi.get(
      "/admin/transactions",
      {
        params: filters,
      }
    );

    return data;
  }

  /**
   * Statistics
   */
  async statistics() {
    const { data } = await adminApi.get(
      "/admin/transactions/statistics"
    );

    return data;
  }

  /**
   * Transaction Details
   */
  async show(id: number) {
    const { data } = await adminApi.get(
      `/admin/transactions/${id}`
    );

    return data;
  }

  /**
   * Refund
   */
  async refund(
    id: number,
    payload: {
      amount: number;
      reason: string;
      note?: string;
    }
  ) {
    const { data } = await adminApi.post(
      `/admin/transactions/${id}/refund`,
      payload
    );

    return data;
  }

  /**
   * Update Status
   */
  async updateStatus(
    id: number,
    payload: {
      status: string;
      provider_reference?: string;
      note?: string;
    }
  ) {
    const { data } = await adminApi.put(
      `/admin/transactions/${id}/status`,
      payload
    );

    return data;
  }
}

export default new TransactionService();