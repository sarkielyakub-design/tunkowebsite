import api from "@/lib/axios";

export async function verifyOtp(code: string) {
  const { data } = await api.post("/otp/verify", {
    code,
  });

  return data;
}

export async function resendOtp() {
  const { data } = await api.post("/otp/send");

  return data;
}