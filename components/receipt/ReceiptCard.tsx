"use client";

import { useEffect, useRef, useState } from "react";

import { getReceipt } from "@/lib/receipt";
import { Receipt } from "@/types/receipt";

import ReceiptHeader from "./ReceiptHeader";
import ReceiptStatus from "./ReceiptStatus";
import ReceiptDetails from "./ReceiptDetails";
import ReceiptQRCode from "./ReceiptQRCode";
import ReceiptActions from "./ReceiptActions";
import ReceiptSkeleton from "./ReceiptSkeleton";

interface Props {
  reference: string;
}

export default function ReceiptCard({ reference }: Props) {
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [loading, setLoading] =useState(true);
  const [error, setError] = useState(false);

  const receiptRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const loadReceipt = async () => {
      try {
        setLoading(true);

        const data = await getReceipt(reference);

        setReceipt(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadReceipt();
  }, [reference]);

  if (loading) {
    return <ReceiptSkeleton />;
  }

  if (error || !receipt) {
    return (
      <div className="mx-auto max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <h2 className="text-center text-xl font-semibold text-red-600">
          Receipt Not Found
        </h2>

        <p className="mt-3 text-center text-gray-500">
          The receipt you're looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={receiptRef}
      className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-xl"
    >
      <ReceiptHeader />

      <ReceiptStatus status={receipt.status} />

      <ReceiptDetails receipt={receipt} />

      <ReceiptQRCode receipt={receipt} />

      <ReceiptActions
        receipt={receipt}
        receiptRef={receiptRef}
      />
    </div>
  );
}