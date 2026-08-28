export interface Receipt {
  id: number;
  reference: string;

  amount: number;
  fee: number;
  total: number;
  currency: string;

  sender_first_name: string;
  sender_last_name: string;
  sender_phone: string;

  receiver_first_name: string;
  receiver_last_name: string;
  receiver_phone: string;

  destination_country: string;
  destination_city: string;

  payment_method: string;

  status: string;

  created_at: string;

  qr_code?: string;
}