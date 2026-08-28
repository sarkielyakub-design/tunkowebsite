"use client";

import { Search, RotateCcw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DepositFilters as DepositFiltersType } from "../types/deposit";interface Props {
  filters: DepositFiltersType;

  onChange: (
    filters: DepositFiltersType
  ) => void;
}export default function DepositFilters({
  filters,
  onChange,
}: Props) {
  return (
    <div className="grid gap-4 rounded-lg border bg-background p-4 md:grid-cols-2 xl:grid-cols-8">     
          <div className="relative xl:col-span-2">

        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search reference, customer..."
          className="pl-10"
          value={filters.search ?? ""}
          onChange={(e) =>
            onChange({
              ...filters,
              search: e.target.value,
              page: 1,
            })
          }
        />

      </div>      <Select
        value={filters.status ?? "all"}
        onValueChange={(value) =>
          onChange({
            ...filters,
            status:
              value && value !== "all"
                ? value
                : undefined,
            page: 1,
          })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>

          <SelectItem value="all">
            All Status
          </SelectItem>

          <SelectItem value="pending">
            Pending
          </SelectItem>

          <SelectItem value="completed">
            Completed
          </SelectItem>

          <SelectItem value="failed">
            Failed
          </SelectItem>

          <SelectItem value="cancelled">
            Cancelled
          </SelectItem>

          <SelectItem value="rejected">
            Rejected
          </SelectItem>

        </SelectContent>
      </Select> <div className="relative xl:col-span-2">

        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search reference, customer..."
          className="pl-10"
          value={filters.search ?? ""}
          onChange={(e) =>
            onChange({
              ...filters,
              search: e.target.value,
              page: 1,
            })
          }
        />

      </div>      <Input
        placeholder="Gateway"
        value={filters.gateway ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            gateway: e.target.value,
            page: 1,
          })
        }
      />      <Input
        placeholder="Payment Method"
        value={filters.payment_method ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            payment_method: e.target.value,
            page: 1,
          })
        }
      />      <Input
        placeholder="Currency"
        value={filters.currency ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            currency: e.target.value,
            page: 1,
          })
        }
      />      <Input
        type="number"
        placeholder="Min Amount"
        value={filters.min_amount ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            min_amount: e.target.value
              ? Number(e.target.value)
              : undefined,
            page: 1,
          })
        }
      />      <Input
        type="number"
        placeholder="Max Amount"
        value={filters.max_amount ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            max_amount: e.target.value
              ? Number(e.target.value)
              : undefined,
            page: 1,
          })
        }
      />      <Button
        variant="outline"
        onClick={() =>
          onChange({
            page: 1,
            per_page: filters.per_page,
          })
        }
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset
      </Button>

    </div>
  );
}