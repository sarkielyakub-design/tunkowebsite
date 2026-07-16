"use client";

import {
  Users,
  Wallet,
  ArrowRightLeft,
  Smartphone,
  Wifi,
  DollarSign,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatsCard
        title="Total Users"
        value="2,450"
        icon={Users}
      />

      <StatsCard
        title="Wallet Balance"
        value="$1,250,000"
        icon={Wallet}
      />

      <StatsCard
        title="Transfers"
        value="8,931"
        icon={ArrowRightLeft}
      />

      <StatsCard
        title="Airtime"
        value="5,210"
        icon={Smartphone}
      />

      <StatsCard
        title="Data"
        value="3,721"
        icon={Wifi}
      />

      <StatsCard
        title="Revenue"
        value="$32,450"
        icon={DollarSign}
      />

    </div>
  );
}