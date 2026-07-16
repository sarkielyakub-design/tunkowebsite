export interface DashboardStats {
  totalUsers: number;

  totalWallets: number;

  totalBalance: number;

  totalTransfers: number;

  totalDeposits: number;

  totalWithdrawals: number;

  pendingKyc: number;

  pendingTransfers: number;

  pendingWithdrawals: number;
}

export interface DashboardResponse {
  success: boolean;

  data: {
    statistics: {
      users: {
        total: number;
        verified: number;
        active: number;
      };

      wallet: {
        total_balance: number;
      };

      transactions: {
        total: number;
      };

      transfers: {
        total: number;
      };

      airtime: {
        total: number;
      };

      data: {
        total: number;
      };

      kyc: {
        pending: number;
      };
    };

    recent_users: any[];

    recent_transactions: any[];
  };
}