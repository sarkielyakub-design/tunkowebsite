import { Receipt } from "@/types/receipt";

interface Props {
  receipt: Receipt;
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-gray-100">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="text-sm font-semibold text-right text-gray-900 max-w-[55%] break-words">
        {value}
      </p>
    </div>
  );
}

export default function ReceiptDetails({
  receipt,
}: Props) {
  return (
    <div className="px-6 pb-6">

      {/* Amount Summary */}
      <div className="rounded-2xl bg-[#F8FAFC] border border-gray-200 p-5 mb-6">

        <div className="flex justify-between mb-3">

          <span className="text-gray-500">
            Transaction Amount
          </span>

          <span className="font-bold text-lg">
            {receipt.amount.toLocaleString()} {receipt.currency}
          </span>

        </div>

        <div className="flex justify-between mb-3">

          <span className="text-gray-500">
            Transfer Fee
          </span>

          <span>
            {receipt.fee.toLocaleString()} {receipt.currency}
          </span>

        </div>

        <div className="border-t my-3"></div>

        <div className="flex justify-between">

          <span className="font-semibold">
            Total Amount
          </span>

          <span className="text-xl font-bold text-[#0047AB]">
            {receipt.total.toLocaleString()} {receipt.currency}
          </span>

        </div>

      </div>

      {/* Sender */}
      <h3 className="font-bold text-[#0047AB] mb-2">
        Sender Information
      </h3>

      <div className="bg-white rounded-xl border border-gray-200 px-4">

        <Row
          label="First Name"
          value={receipt.sender_first_name}
        />

        <Row
          label="Last Name"
          value={receipt.sender_last_name}
        />

        <Row
          label="Phone Number"
          value={receipt.sender_phone}
        />

      </div>

      {/* Receiver */}

      <h3 className="font-bold text-[#0047AB] mt-6 mb-2">
        Receiver Information
      </h3>

      <div className="bg-white rounded-xl border border-gray-200 px-4">

        <Row
          label="First Name"
          value={receipt.receiver_first_name}
        />

        <Row
          label="Last Name"
          value={receipt.receiver_last_name}
        />

        <Row
          label="Phone Number"
          value={receipt.receiver_phone}
        />

      </div>

      {/* Transaction */}

      <h3 className="font-bold text-[#0047AB] mt-6 mb-2">
        Transaction Details
      </h3>

      <div className="bg-white rounded-xl border border-gray-200 px-4">

        <Row
          label="Destination Country"
          value={receipt.destination_country}
        />

        <Row
          label="Destination City"
          value={receipt.destination_city}
        />

        <Row
          label="Payment Method"
          value={receipt.payment_method}
        />

        <Row
          label="Reference"
          value={receipt.reference}
        />

        <Row
          label="Transaction Date"
          value={receipt.created_at}
        />

      </div>

    </div>
  );
}