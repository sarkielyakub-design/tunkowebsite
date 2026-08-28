export default function MapSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Find Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Visit Our Offices
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Tunko Money Transfer operates across multiple African countries.
            Locate the nearest branch or visit our headquarters for assistance.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">

          <iframe
            src="https://www.google.com/maps?q=Niamey,Niger&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

      </div>
    </section>
  );
}