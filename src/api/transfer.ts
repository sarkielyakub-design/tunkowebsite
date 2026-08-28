import api from "@/lib/axios";

/*
|--------------------------------------------------------------------------
| Search Recipient
|--------------------------------------------------------------------------
*/

export async function searchRecipient(query: string) {
  const { data } = await api.post("/transfer/search", {
    query,
  });

  return data;
}

/*
|--------------------------------------------------------------------------
| Verify Recipient
|--------------------------------------------------------------------------
*/

export async function verifyRecipient(query: string) {
  const { data } = await api.post("/transfer/verify", {
    query,
  });

  return data;
}

/*
|--------------------------------------------------------------------------
| Transfer Quote
|--------------------------------------------------------------------------
*/

export async function getTransferQuote(
  countryId: number,
  amount: number
) {
  const { data } = await api.post("/transfer/quote", {
    country_id: countryId,
    amount,
  });

  return data;
}

/*
|--------------------------------------------------------------------------
| Send Money
|--------------------------------------------------------------------------
*/

export interface TransferPayload {
  recipient_id: number;
  amount: number;
  pin: string;
  remark?: string;
}

export async function transferMoney(
  payload: TransferPayload
) {
  const { data } = await api.post(
    "/transfer",
    payload
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| History
|--------------------------------------------------------------------------
*/

export async function getTransferHistory(
  page = 1
) {
  const { data } = await api.get(
    `/transfer/history?page=${page}`
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Receipt
|--------------------------------------------------------------------------
*/

export async function getTransferReceipt(
  reference: string
) {
  const { data } = await api.get(
    `/transfer/receipt/${reference}`
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Countries
|--------------------------------------------------------------------------
*/

export async function getCountries() {
  const { data } = await api.get(
    "/transfer/countries"
  );

  return data;
}