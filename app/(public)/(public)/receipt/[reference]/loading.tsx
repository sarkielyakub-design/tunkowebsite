export default function LoadingReceipt() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 animate-pulse">
      <div className="mx-auto max-w-xl">

        {/* Receipt Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-[#0047AB] px-6 py-8 text-center">

            <div className="w-20 h-20 rounded-full bg-blue-300 mx-auto"></div>

            <div className="h-6 w-40 bg-blue-300 rounded mx-auto mt-5"></div>

            <div className="h-4 w-28 bg-blue-200 rounded mx-auto mt-3"></div>

          </div>

          {/* Status */}
          <div className="flex flex-col items-center py-8">

            <div className="w-20 h-20 rounded-full bg-green-100"></div>

            <div className="h-6 w-40 rounded bg-gray-200 mt-5"></div>

            <div className="h-4 w-52 rounded bg-gray-100 mt-3"></div>

          </div>

          {/* Amount Card */}
          <div className="mx-6 rounded-2xl border p-5">

            <div className="h-5 w-32 bg-gray-200 rounded mb-5"></div>

            <div className="space-y-4">

              <div className="flex justify-between">
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>

              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>

              <div className="border-t"></div>

              <div className="flex justify-between">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <div className="h-6 w-28 bg-gray-300 rounded"></div>
              </div>

            </div>

          </div>

          {/* Sender */}
          <div className="px-6 mt-8">

            <div className="h-5 w-44 bg-gray-300 rounded mb-4"></div>

            <div className="rounded-xl border p-4 space-y-4">

              {[1,2,3].map((i)=>(
                <div
                  key={i}
                  className="flex justify-between"
                >
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
              ))}

            </div>

          </div>

          {/* Receiver */}
          <div className="px-6 mt-8">

            <div className="h-5 w-44 bg-gray-300 rounded mb-4"></div>

            <div className="rounded-xl border p-4 space-y-4">

              {[1,2,3].map((i)=>(
                <div
                  key={i}
                  className="flex justify-between"
                >
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
              ))}

            </div>

          </div>

          {/* Transaction */}
          <div className="px-6 mt-8">

            <div className="h-5 w-52 bg-gray-300 rounded mb-4"></div>

            <div className="rounded-xl border p-4 space-y-4">

              {[1,2,3,4,5].map((i)=>(
                <div
                  key={i}
                  className="flex justify-between"
                >
                  <div className="h-4 w-28 bg-gray-200 rounded"></div>
                  <div className="h-4 w-36 bg-gray-200 rounded"></div>
                </div>
              ))}

            </div>

          </div>

          {/* QR */}
          <div className="flex flex-col items-center py-10">

            <div className="w-44 h-44 bg-gray-200 rounded-xl"></div>

            <div className="h-4 w-48 bg-gray-200 rounded mt-6"></div>

          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 p-6">

            <div className="h-12 rounded-xl bg-gray-200"></div>

            <div className="h-12 rounded-xl bg-gray-200"></div>

            <div className="h-12 rounded-xl bg-gray-200"></div>

            <div className="h-12 rounded-xl bg-gray-200"></div>

          </div>

        </div>
      </div>
    </main>
  );
}