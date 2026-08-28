import adminApi from "@/lib/admin-api";

/**
 * Transaction List
 * GET /admin/transactions
 */
export async function getTransactions(params?: {
  page?: number;
  search?: string;
  status?: string;
  type?: string;
  currency?: string;
  user?: string;
}) {
  const query: Record<string, any> = {};

  if (params?.page) query.page = params.page;
  if (params?.search?.trim()) query.search = params.search.trim();
  if (params?.status?.trim()) query.status = params.status.trim();
  if (params?.type?.trim()) query.type = params.type.trim();
  if (params?.currency?.trim()) query.currency = params.currency.trim();
  if (params?.user?.trim()) query.user = params.user.trim();

  const { data } = await adminApi.get(
    "/admin/transactions",
    {
      params: query,
    }
  );

  return data;
}

/**
 * Transaction Statistics
 * GET /admin/transactions/statistics
 */
export async function getTransactionStatistics() {
  const { data } = await adminApi.get(
    "/admin/transactions/statistics"
  );

  return data;
}

/**
 * Transaction Details
 * GET /admin/transactions/{transaction}
 */
export async function getTransaction(
  transactionId: number | string
) {
  const { data } = await adminApi.get(
    `/admin/transactions/${transactionId}`
  );

  return data;
}

/**
 * Refund Transaction
 * POST /admin/transactions/{transaction}/refund
 */
export async function refundTransaction(
  transactionId: number | string
) {
  const { data } = await adminApi.post(
    `/admin/transactions/${transactionId}/refund`
  );

  return data;
}

/**
 * Update Transaction Status
 * POST /admin/transactions/{transaction}/status
 */
export async function updateTransactionStatus(
  transactionId: number | string,
  payload: {
    status: string;
  }
) {
  const { data } = await adminApi.post(
    `/admin/transactions/${transactionId}/status`,
    payload
  );

  return data;
}