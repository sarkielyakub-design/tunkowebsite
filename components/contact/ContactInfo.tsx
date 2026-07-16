import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Phone",
    value: "+234 XXX XXX XXXX",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+234 XXX XXX XXXX",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@tunko.com",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat • 8:00 AM - 6:00 PM",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Get in Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            We're Here to Help
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Whether you have questions about money transfers,
            exchange rates, business partnerships or technical
            support, our team is always ready to assist you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 break-words">
                  {item.value}
                </p>
              </div>
            );
          })}

        </div>

        <div className="mt-14 rounded-3xl bg-blue-600 p-8 text-center text-white">

          <MapPin className="mx-auto mb-5" size={40} />

          <h3 className="text-2xl font-bold">
            Global Presence
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-blue-100">
            Tunko Money Transfer operates across several African countries,
            with branches strategically located to serve individuals,
            families and businesses with secure and reliable financial services.
          </p>

        </div>

      </div>
    </section>
  );
}