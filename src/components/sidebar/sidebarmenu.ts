import {
  LayoutDashboard,
  Users,
  Wallet,
  ArrowRightLeft,
  Landmark,
  CreditCard,
  ShieldCheck,
  Globe,
  MapPinned,
  Building2,
  Wifi,
  Database,
  FileClock,
  Shield,
  BarChart3,
  Settings,
  UserCog,
  LucideIcon,
} from "lucide-react";

export interface SidebarMenuItem {
  title: string;
  href?: string;
  icon?: LucideIcon;
  permission?: string;
  badge?: number;
  children?: SidebarMenuItem[];
}

export const sidebarMenu: SidebarMenuItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Management",
    children: [
      {
        title: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        title: "Wallets",
        href: "/admin/wallets",
        icon: Wallet,
      },
      {
        title: "Transactions",
        href: "/admin/transactions",
        icon: CreditCard,
      },
    ],
  },

  {
    title: "Money Transfer",
    children: [
      {
        title: "Transfers",
        href: "/admin/transfers",
        icon: ArrowRightLeft,
      },
      {
        title: "Deposits",
        href: "/admin/deposits",
        icon: Landmark,
      },
      {
        title: "Withdrawals",
        href: "/admin/withdrawals",
        icon: CreditCard,
      },
    ],
  },

  {
    title: "Verification",
    children: [
      {
        title: "KYC",
        href: "/admin/kyc",
        icon: ShieldCheck,
      },
    ],
  },

  {
    title: "Configuration",
    children: [
      {
        title: "Exchange Rates",
        href: "/admin/exchange-rates",
        icon: Globe,
      },
      {
        title: "Countries",
        href: "/admin/countries",
        icon: MapPinned,
      },
      {
        title: "Offices",
        href: "/admin/offices",
        icon: Building2,
      },
      {
        title: "Networks",
        href: "/admin/networks",
        icon: Wifi,
      },
      {
        title: "Data Bundles",
        href: "/admin/data-bundles",
        icon: Database,
      },
    ],
  },

  {
    title: "Security",
    children: [
      {
        title: "Audit Logs",
        href: "/admin/audit-logs",
        icon: FileClock,
      },
      {
        title: "Roles & Permissions",
        href: "/admin/roles",
        icon: Shield,
      },
    ],
  },

  {
    title: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },

  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },

  {
    title: "Profile",
    href: "/admin/profile",
    icon: UserCog,
  },
];