"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeeCardProps {
  amount: number;
  fee: number;
}

export default function FeeCard({ amount, fee }: FeeCardProps) {
  const total = amount + fee;

  return (
    <Card className="border-0 bg-white shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-gray-800">
          Transaction Fee
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Amount</span>
          <span className="font-medium text-gray-900">
            ₦{amount.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between border-t pt-3">
          <span className="text-sm text-gray-600">Fee</span>
          <span className="font-medium text-gray-900">
            ₦{fee.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between border-t pt-3">
          <span className="font-semibold text-gray-800">Total</span>
          <span className="font-semibold text-blue-600">
            ₦{total.toLocaleString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}