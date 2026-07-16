export default function ReceiptSkeleton() {
  return (
    <div className="mx-auto max-w-xl animate-pulse">

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* Header */}
        <div className="bg-[#0047AB] px-6 py-8">

          <div className="mx-auto h-16 w-16 rounded-full bg-blue-300" />

          <div className="mx-auto mt-5 h-5 w-40 rounded bg-blue-300" />

          <div className="mx-auto mt-3 h-4 w-24 rounded bg-blue-200" />

        </div>

        {/* Status */}
        <div className="flex flex-col items-center py-8">

          <div className="h-20 w-20 rounded-full bg-green-100" />

          <div className="mt-5 h-6 w-40 rounded bg-gray-200" />

          <div className="mt-3 h-4 w-56 rounded bg-gray-100" />

        </div>

        {/* Amount Card */}
        <div className="mx-6 rounded-2xl border border-gray-200 p-5">

          <div className="mb-4 h-5 w-36 rounded bg-gray-200" />

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="mb-4 flex justify-between"
            >
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-4 w-24 rounded bg-gray-200" />
            </div>
          ))}

        </div>

        {/* Sender */}
        <div className="px-6 pt-8">

          <div className="mb-4 h-5 w-40 rounded bg-gray-300" />

          <div className="rounded-xl border p-4">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="mb-4 flex justify-between"
              >
                <div className="h-4 w-28 rounded bg-gray-200" />
                <div className="h-4 w-36 rounded bg-gray-200" />
              </div>
            ))}

          </div>

        </div>

        {/* Receiver */}
        <div className="px-6 pt-8">

          <div className="mb-4 h-5 w-44 rounded bg-gray-300" />

          <div className="rounded-xl border p-4">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="mb-4 flex justify-between"
              >
                <div className="h-4 w-28 rounded bg-gray-200" />
                <div className="h-4 w-36 rounded bg-gray-200" />
              </div>
            ))}

          </div>

        </div>

        {/* Transaction */}
        <div className="px-6 pt-8">

          <div className="mb-4 h-5 w-44 rounded bg-gray-300" />

          <div className="rounded-xl border p-4">

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="mb-4 flex justify-between"
              >
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="h-4 w-40 rounded bg-gray-200" />
              </div>
            ))}

          </div>

        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center py-10">

          <div className="h-40 w-40 rounded-xl bg-gray-200" />

          <div className="mt-6 h-4 w-44 rounded bg-gray-200" />

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 p-6">

          <div className="h-12 rounded-xl bg-gray-200" />
          <div className="h-12 rounded-xl bg-gray-200" />
          <div className="h-12 rounded-xl bg-gray-200" />
          <div className="h-12 rounded-xl bg-gray-200" />

        </div>

      </div>

    </div>
  );
}