"use client";

import {
  CheckCircle2,
  AlertTriangle,
  Database,
  Server,
  Mail,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    name: "Laravel API",
    status: "Online",
    healthy: true,
    icon: Server,
  },
  {
    name: "Database",
    status: "Connected",
    healthy: true,
    icon: Database,
  },
  {
    name: "Payment Gateway",
    status: "Healthy",
    healthy: true,
    icon: CreditCard,
  },
  {
    name: "Email Server",
    status: "Healthy",
    healthy: true,
    icon: Mail,
  },
  {
    name: "Security",
    status: "Protected",
    healthy: true,
    icon: ShieldCheck,
  },
  {
    name: "SMS Gateway",
    status: "Offline",
    healthy: false,
    icon: AlertTriangle,
  },
];

export default function SystemStatus() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          System Status
        </h2>

        <p className="text-sm text-slate-500">
          Monitor all connected services.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.name}
              className="rounded-2xl border p-5 transition hover:shadow-md"
            >

              <div className="mb-4 flex items-center justify-between">

                <div className="rounded-xl bg-slate-100 p-3">

                  <Icon className="h-6 w-6 text-blue-600" />

                </div>

                {service.healthy ? (

                  <CheckCircle2 className="h-6 w-6 text-green-600" />

                ) : (

                  <AlertTriangle className="h-6 w-6 text-red-500" />

                )}

              </div>

              <h3 className="font-semibold">
                {service.name}
              </h3>

              <p
                className={`mt-2 text-sm font-medium ${
                  service.healthy
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {service.status}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}