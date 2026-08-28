import api from "@/lib/axios";

export async function createPin(
  pin: string,
  pin_confirmation: string
) {
  const { data } = await api.post(
    "/pin/create",
    {
      pin,
      pin_confirmation,
    }
  );

  return data;
}