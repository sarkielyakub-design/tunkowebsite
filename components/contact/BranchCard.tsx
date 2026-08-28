import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";

interface BranchCardProps {
  branchName: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  mapsUrl?: string;
}

export default function BranchCard({
  branchName,
  address,
  phone,
  whatsapp,
  email,
  hours,
  mapsUrl,
}: BranchCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <h3 className="text-2xl font-bold text-gray-900">
        {branchName}
      </h3>

      <div className="mt-6 space-y-4">

        <div className="flex items-start gap-3">
          <MapPin className="mt-1 text-blue-600" size={20} />
          <p className="text-gray-600">
            {address}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-green-600" size={20} />
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <MessageCircle className="text-green-500" size={20} />
          <span>{whatsapp}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-red-500" size={20} />
          <span>{email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="text-yellow-500" size={20} />
          <span>{hours}</span>
        </div>

      </div>

      {mapsUrl && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Navigation size={18} />
          View on Google Maps
        </a>
      )}
    </div>
  );
}