import api from "@/lib/axios";

export async function getBeneficiaries() {
  console.log("Base URL:", api.defaults.baseURL);

  const { data } = await api.get(
    "/beneficiaries"
);

  return data;
}