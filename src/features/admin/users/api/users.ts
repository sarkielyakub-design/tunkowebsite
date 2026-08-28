import adminApi from "@/lib/admin-api";

export const getUsers = async (params?: any) => {
  const { data } = await adminApi.get("/admin/users", {
    params,
  });

  return data;
};

export const getUser = async (id: number) => {
  const { data } = await adminApi.get(`/admin/users/${id}`);

  return data;
};

export const getUserDetails = async (id: number) => {
  const { data } = await adminApi.get(
    `/admin/users/${id}/details`
  );

  return data;
};

export const freezeUser = async (id: number) => {
  const { data } = await adminApi.post(
    `/admin/users/${id}/freeze`
  );

  return data;
};

export const unfreezeUser = async (id: number) => {
  const { data } = await adminApi.post(
    `/admin/users/${id}/unfreeze`
  );

  return data;
};

export const resetPassword = async (id: number) => {
  const { data } = await adminApi.post(
    `/admin/users/${id}/reset-password`
  );

  return data;
};

export const resetPin = async (id: number) => {
  const { data } = await adminApi.post(
    `/admin/users/${id}/reset-pin`
  );

  return data;
};

export const creditWallet = async (
  id: number,
  payload: {
    amount: number;
    note: string;
  }
) => {
  const { data } = await adminApi.post(
    `/admin/users/${id}/credit`,
    payload
  );

  return data;
};

export const debitWallet = async (
  id: number,
  payload: {
    amount: number;
    note: string;
  }
) => {
  const { data } = await adminApi.post(
    `/admin/users/${id}/debit`,
    payload
  );

  return data;
};