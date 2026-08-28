import api from "@/lib/axios";

/*
|--------------------------------------------------------------------------
| Countries
|--------------------------------------------------------------------------
*/

export async function getCountries() {
  const { data } = await api.get(
    "/airtime/countries"
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
    `/airtime/networks/${countryId}`
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
    amount: number;
  }
) {
  const { data } = await api.post(
    "/airtime/quote",
    payload
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| Purchase
|--------------------------------------------------------------------------
*/

export async function purchaseAirtime(
  payload: {
    country_id: number;
    country: string;
    network: string;
    phone: string;
    amount: number;
    pin: string;
  }
) {
  const { data } = await api.post(
    "/airtime/purchase",
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
    "/airtime/beneficiaries"
  );

  return data;
}

/*
|--------------------------------------------------------------------------
| History
|--------------------------------------------------------------------------
*/

export async function getHistory() {
  const { data } = await api.get(
    "/airtime/history"
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
    `/airtime/${reference}`
  );

  return data;
}