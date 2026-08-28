import api from "@/lib/axios";

export interface DashboardUser {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  phone: string;
  is_verified: boolean;
}

export interface DashboardWallet {
  wallet_number: string;
  balance: number;
  currency: string;
  is_active: boolean;
}

export interface DashboardStats {
  total_sent: number;
  total_received: number;
  transactions: number;
  beneficiaries: number;
}

export interface DashboardResponse {
  success: boolean;

  user: DashboardUser;

  wallet: DashboardWallet;

  stats: DashboardStats;

  recent_transactions: any[];

  exchange_rates: any[];

  notifications: number;

  kyc_status: string;
}

export async function getDashboard(): Promise<DashboardResponse> {
  const { data } = await api.get("/dashboard");

  return data;
}