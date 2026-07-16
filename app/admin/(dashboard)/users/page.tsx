"use client";

import { useState } from "react";

import UserTable from "@/src/features/admin/users/components/UserTable";
import UserStatistics from "@/src/features/admin/users/components/UserStatistics";
import UserFilters from "@/src/features/admin/users/components/UserFilters";

import { useUsers } from "@/src/features/admin/users/hooks/useUsers";

export default function UsersPage() {

  const [search, setSearch] = useState("");

  const {
    data,
    isLoading,
  } = useUsers({
    search,
  });

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">

          Users Management

        </h1>

        <p className="mt-2 text-slate-500">

          Manage all registered Tunko users.

        </p>

      </div>

      <UserStatistics
        statistics={
          data?.statistics ?? {
            total: 0,
            active: 0,
            verified: 0,
            frozen: 0,
            today: 0,
          }
        }
      />

      <UserFilters
        search={search}
        onSearch={setSearch}
      />

      <UserTable
        users={data?.data ?? []}
        loading={isLoading}
      />

    </div>
  );
}