interface Merchant {
  account: number;
  apiKey: string;
  group: string;
  isActive: boolean;
  merchant: string;
  outlets: Outlet[];
  transactionLimit: number;
  transactionMinimum: number;
}
