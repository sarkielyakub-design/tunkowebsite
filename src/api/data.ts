import api from "@/lib/axios";

/*
|--------------------------------------------------------------------------
| Countries
|--------------------------------------------------------------------------
*/

export async function getCountries() {
  const { data } = await api.get(
    "/data/countries"
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Networks
|--------------------------------------------------------------------------
*/

export async function getNetworks(
  countryId: number
) {
  const { data } = await api.get(
    `/data/networks/${countryId}`
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Bundles
|--------------------------------------------------------------------------
*/

export async function getBundles(
  networkId: number
) {
  const { data } = await api.get(
    `/data/bundles/${networkId}`
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Quote
|--------------------------------------------------------------------------
*/

export async function getQuote(
  payload: {
    bundle_id: number;
    phone: string;
  }
) {
  const { data } = await api.post(
    "/data/quote",
    payload
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Purchase
|--------------------------------------------------------------------------
*/

export async function purchaseData(
  payload: {
    bundle_id: number;
    phone: string;
    pin: string;
  }
) {
  const { data } = await api.post(
    "/data/purchase",
    payload
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Beneficiaries
|--------------------------------------------------------------------------
*/

export async function getBeneficiaries() {
  const { data } = await api.get(
    "/data/beneficiaries"
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Recent Purchases
|--------------------------------------------------------------------------
*/

export async function getRecentPurchases() {
  const { data } = await api.get(
    "/data/history"
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Receipt
|--------------------------------------------------------------------------
*/

export async function getReceipt(
  reference: string
) {
  const { data } = await api.get(
    `/data/receipt/${reference}`
  );

  return data;
}