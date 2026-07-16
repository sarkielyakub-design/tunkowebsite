import api from "@/lib/axios";

export interface Transaction {
  id: number;
  type: string;
  description: string;
  amount: number;
  status: string;
  created_at: string;
}

export interface TransactionResponse {
  success: boolean;
  transactions: Transaction[];
}

export async function getTransactions(): Promise<TransactionResponse> {
  const { data } = await api.get("/transactions");

  return data;
}