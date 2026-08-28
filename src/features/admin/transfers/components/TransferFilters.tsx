"use client";

import { Search, RotateCcw } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import type { TransferFilters } from "../types/transfer";

interface Props {
  filters: TransferFilters;

  onChange: (
    filters: TransferFilters
  ) => void;
}export default function TransferFilters({
  filters,
  onChange,
}: Props) {  return (
    <div className="grid gap-4 rounded-lg border bg-background p-4 md:grid-cols-2 xl:grid-cols-6">

      <div className="relative xl:col-span-2">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search reference, sender..."
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
              value === "all" || value == null
                ? undefined
                : value,
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

          <SelectItem value="processing">
            Processing
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
      </Select>      <Select
        value={filters.provider ?? "all"}
        onValueChange={(value) =>
          onChange({
            ...filters,
            provider:
              value === "all" || value == null
                ? undefined
                : value,
            page: 1,
          })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Provider" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Providers
          </SelectItem>

          <SelectItem value="thunes">
            Thunes
          </SelectItem>

          <SelectItem value="manual">
            Manual
          </SelectItem>
        </SelectContent>
      </Select>      <Input
        placeholder="Sender Currency"
        value={filters.sender_currency ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            sender_currency: e.target.value,
            page: 1,
          })
        }
      />      <Input
        placeholder="Recipient Currency"
        value={filters.recipient_currency ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            recipient_currency: e.target.value,
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