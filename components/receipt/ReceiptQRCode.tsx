"use client";

import QRCode from "react-qr-code";
import { Receipt } from "@/types/receipt";

interface Props {
  receipt: Receipt;
}

export default function ReceiptQRCode({ receipt }: Props) {
  const verifyUrl =
    receipt.qr_code ??
    `${process.env.NEXT_PUBLIC_APP_URL}/receipt/${receipt.reference}`;

  return (
    <div className="px-6 pb-8">

      <div className="border border-gray-200 rounded-2xl p-6 bg-white">

        <h3 className="text-center text-lg font-bold text-[#0047AB]">
          Verify Receipt
        </h3>

        <p className="text-center text-gray-500 text-sm mt-2">
          Scan this QR Code to verify this transaction.
        </p>

        <div className="flex justify-center my-6">

          <div className="bg-white p-4 rounded-xl shadow-sm">

            <QRCode
              value={verifyUrl}
              size={180}
              bgColor="#FFFFFF"
              fgColor="#000000"
            />

          </div>

        </div>

        <div className="text-center">

          <p className="text-xs text-gray-500">
            Reference Number
          </p>

          <p className="font-bold text-[#0047AB] mt-2 break-all">
            {receipt.reference}
          </p>

        </div>

      </div>

    </div>
  );
}