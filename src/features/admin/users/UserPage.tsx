"use client";

import UserStats from "./components/UserStatistics";
import UserFilters from "./components/UserFilters";
import UserTable from "./components/UserTable";

export default function UsersPage() {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            User Management
          </h1>

          <p className="mt-2 text-slate-500">
            Manage all registered users.
          </p>

        </div>

      </div>

      <UserStats />

      <UserFilters />

      <UserTable />

    </div>
  );
}