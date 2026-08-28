"use client";

import { FiDownload, FiPrinter, FiShare2, FiCopy } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useReactToPrint } from "react-to-print";

interface Props {
  receipt: any;
  receiptRef: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
}

export default function ReceiptActions({
  receipt,
  receiptRef,
  children,
}: Props) {
  const handlePrint = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: `Tunko-${receipt?.reference ?? ""}`,
  });

  const copyReference = async () => {
    if (!receipt) return;
    await navigator.clipboard.writeText(receipt.reference);
    toast.success("Reference copied");
  };

  const shareReceipt = async () => {
    if (!receipt) return;
    const url = `${window.location.origin}/receipt/${receipt.reference}`;

    if (navigator.share) {
      await navigator.share({
        title: "Tunko Money Receipt",
        text: "Transaction Receipt",
        url,
      });

      return;
    }

    await navigator.clipboard.writeText(url);
    toast.success("Receipt link copied");
  };

  const downloadReceipt = () => {
    window.print();
  };

  return (
    <>
      {/* Hidden printable content */}

      <div className="hidden">
        <div ref={receiptRef}>
          {children}
        </div>
      </div>

      {/* Action Buttons */}

      <div className="px-6 pb-8">

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={downloadReceipt}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#0047AB] text-white py-3 font-semibold hover:opacity-90 transition"
          >
            <FiDownload />
            Download
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 rounded-xl border border-[#0047AB] text-[#0047AB] py-3 font-semibold"
          >
            <FiPrinter />
            Print
          </button>

          <button
            onClick={shareReceipt}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white py-3 font-semibold"
          >
            <FiShare2 />
            Share
          </button>

          <button
            onClick={copyReference}
            className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 text-gray-700 py-3 font-semibold"
          >
            <FiCopy />
            Copy Ref
          </button>

        </div>

      </div>
    </>
  );
}