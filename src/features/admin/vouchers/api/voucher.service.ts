import adminApi from "@/lib/admin-api";
import type {
  CreateVoucherPayload,
  VoucherFilters,
  VoucherListResponse,
} from "../types/voucher";

export async function getVouchers(filters: VoucherFilters = {}) {
  const response = await adminApi.get<VoucherListResponse>(
    "/admin/vouchers",
    {
      params: Object.fromEntries(
        Object.entries(filters).filter(
          ([, value]) =>
            value !== undefined &&
            value !== ""
        )
      ),
    }
  );

  return response.data;
}

export async function createVoucher(
  payload: CreateVoucherPayload
) {
  const response = await adminApi.post(
    "/admin/vouchers",
    payload
  );

  return response.data;
}

export async function deleteVoucher(
  id: number
) {
  const response = await adminApi.delete(
    `/admin/vouchers/${id}`
  );

  return response.data;
}

export async function cancelVoucher(
  id: number
) {
  const response = await adminApi.post(
    `/admin/vouchers/${id}/cancel`
  );

  return response.data;
}

export async function getVoucher(
  id: number
) {
  const response = await adminApi.get(
    `/admin/vouchers/${id}`
  );

  return response.data;
}