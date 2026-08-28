import api from "@/lib/axios";

export interface WalletResponse {
  success: boolean;
  wallet: {
    wallet_number: string;
    balance: number;
    currency: string;
    is_active: boolean;
  };
  user: {
    first_name: string;
    last_name: string;
    is_verified: boolean;
  };
}

export async function getWallet(): Promise<WalletResponse> {
  const { data } = await api.get("/wallet");

  return data;
  
}


export interface InitializeDepositRequest {
  amount: number;
}

export interface InitializeDepositResponse {
  success: boolean;
  message: string;
  authorization_url: string;
  reference: string;
}

export async function initializeDeposit(
  payload: InitializeDepositRequest
): Promise<InitializeDepositResponse> {

  const { data } = await api.post(
    "/wallet/deposit/initialize",
    payload
  );

  return data;
}

export interface VerifyDepositRequest {
  reference: string;
}

export interface VerifyDepositResponse {
  success: boolean;
  message: string;
  balance: number;
}

export async function verifyDeposit(
  payload: VerifyDepositRequest
): Promise<VerifyDepositResponse> {

  const { data } = await api.post(
    "/wallet/deposit/verify",
    payload
  );

  return data;
}