import api from "./axios";

export const login = async (
  email: string,
  password: string
) => {
  const { data } = await api.post("/login", {
    email,
    password,
  });

  return data;
};

export const register = async (
  payload: unknown
) => {
  const { data } = await api.post(
    "/register",
    payload
  );

  return data;
};

export const forgotPassword = async (
  email: string
) => {
  const { data } = await api.post(
    "/password/forgot",
    {
      email,
    }
  );

  return data;
};

export const resetPassword = async (
  payload: unknown
) => {
  const { data } = await api.post(
    "/password/reset",
    payload
  );

  return data;
};

export const logout = async () => {
  const { data } = await api.post("/logout");

  return data;
};