"use client";

import {
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Kyc } from "../types/kyc.types";
import StatusBadge from "./StatusBadge";

interface Props {
  data: Kyc[];

  loading?: boolean;

  onView: (kyc: Kyc) => void;

  onApprove: (kyc: Kyc) => void;

  onReject: (kyc: Kyc) => void;
}

export default function KycTable({
  data,
  loading,
  onView,
  onApprove,
  onReject,
}: Props) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white">
        <div className="divide-y">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="h-16 animate-pulse bg-gray-100"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="rounded-xl border bg-white py-20 text-center">
        <p className="text-gray-500">
          No KYC records found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="min-w-full text-sm">

        <thead className="bg-gray-50">
          <tr>

            <th className="px-5 py-3 text-left font-semibold">
              User
            </th>

            <th className="px-5 py-3 text-left font-semibold">
              Document
            </th>

            <th className="px-5 py-3 text-left font-semibold">
              Level
            </th>

            <th className="px-5 py-3 text-left font-semibold">
              Status
            </th>

            <th className="px-5 py-3 text-left font-semibold">
              Submitted
            </th>

            <th className="px-5 py-3 text-right font-semibold">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {data.map((kyc) => (
            <tr
              key={kyc.id}
              className="border-t hover:bg-gray-50"
            >

              {/* User */}

              <td className="px-5 py-4">

                <div className="font-semibold">
                  {kyc.user.name}
                </div>

                <div className="text-xs text-gray-500">
                  {kyc.user.email}
                </div>

                <div className="text-xs text-gray-500">
                  {kyc.user.phone}
                </div>

              </td>

              {/* Document */}

              <td className="px-5 py-4">

                <div>
                  {kyc.document_type ?? "-"}
                </div>

                <div className="text-xs text-gray-500">
                  {kyc.id_number}
                </div>

              </td>

              {/* Level */}

              <td className="px-5 py-4">
                Level {kyc.level}
              </td>

              {/* Status */}

              <td className="px-5 py-4">
                <StatusBadge
                  status={kyc.status}
                />
              </td>

              {/* Date */}

              <td className="px-5 py-4">
                {new Date(
                  kyc.created_at
                ).toLocaleDateString()}
              </td>

              {/* Actions */}

              <td className="px-5 py-4">

                <div className="flex justify-end gap-2">

                  <button
                    onClick={() => onView(kyc)}
                    className="rounded-lg border p-2 hover:bg-gray-100"
                    title="View"
                  >
                    <Eye size={18} />
                  </button>

                  {kyc.status !== "approved" && (
                    <button
                      onClick={() => onApprove(kyc)}
                      className="rounded-lg border border-green-200 p-2 text-green-600 hover:bg-green-50"
                      title="Approve"
                    >
                      <CheckCircle2 size={18} />
                    </button>
                  )}

                  {kyc.status !== "rejected" && (
                    <button
                      onClick={() => onReject(kyc)}
                      className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
                      title="Reject"
                    >
                      <XCircle size={18} />
                    </button>
                  )}

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}