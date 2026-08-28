"use client";

const testimonials = [
  {
    name: "Ahmed Hassan",
    country: "chad",
    message:
      "Tunko made sending money to my family incredibly fast and secure. The exchange rates are excellent and the process is very smooth.",
  },
  {
    name: "Fatima Ali",
    country: "Niger",
    message:
      "I use Tunko every month. Transactions arrive quickly and I always receive updates throughout the transfer.",
  },
  {
    name: "Mohammed Ibrahim",
    country: "mali",
    message:
      "The best money transfer service I have used. Reliable, affordable, and very easy to navigate.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Trusted by Thousands Worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our customers trust Tunko for fast, secure, and reliable
            international money transfers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-7 text-gray-600">
                "{item.message}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}