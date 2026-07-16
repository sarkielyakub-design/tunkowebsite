import {
  Headphones,
  PhoneCall,
  MessageCircle,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

export default function SupportSection() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Customer Support
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            We're Always Here to Help
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Whether you're sending money, tracking a transfer,
            checking exchange rates or making a business enquiry,
            our dedicated support team is available to assist you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <PhoneCall className="mb-5 h-10 w-10 text-yellow-300" />

            <h3 className="text-xl font-bold">
              Call Us
            </h3>

            <p className="mt-3 text-blue-100">
              Speak directly with our customer support team.
            </p>

            <p className="mt-6 font-semibold">
              +234 XXX XXX XXXX
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <MessageCircle className="mb-5 h-10 w-10 text-green-300" />

            <h3 className="text-xl font-bold">
              WhatsApp
            </h3>

            <p className="mt-3 text-blue-100">
              Chat with our support team instantly.
            </p>

            <p className="mt-6 font-semibold">
              +234 XXX XXX XXXX
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <Mail className="mb-5 h-10 w-10 text-red-300" />

            <h3 className="text-xl font-bold">
              Email
            </h3>

            <p className="mt-3 text-blue-100">
              Send us your enquiries anytime.
            </p>

            <p className="mt-6 font-semibold break-all">
              support@tunko.com
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <Headphones className="mb-5 h-10 w-10 text-cyan-300" />

            <h3 className="text-xl font-bold">
              24/7 Support
            </h3>

            <p className="mt-3 text-blue-100">
              Reliable assistance whenever you need it.
            </p>

            <p className="mt-6 font-semibold">
              Always Available
            </p>
          </div>

        </div>

        <div className="mt-20 rounded-3xl bg-white p-10 text-center text-gray-900 shadow-2xl">

          <Download className="mx-auto h-14 w-14 text-blue-600" />

          <h3 className="mt-6 text-3xl font-bold">
            Download the Tunko App
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Send money, track transfers, manage your wallet and
            enjoy fast international transactions directly from
            your mobile device.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800">
              Download for iPhone
            </button>

            <button className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
              Download for Android
            </button>

          </div>

          <button className="mx-auto mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Contact Our Team
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}