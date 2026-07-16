"use client";

import StatusBadge from "../../../../components/ui/StatusBadge";

interface Props {
    title: string;
    transactions: any[];
    loading?: boolean;
}

export default function WalletStatement({
    title,
    transactions,
    loading = false,
}: Props) {
    if (loading) {
        return (
            <div className="rounded-2xl border bg-white p-6">
                Loading {title.toLowerCase()}...
            </div>
        );
    }

    return (
        <div className="rounded-2xl border bg-white">
            <div className="border-b p-6">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b bg-slate-50">
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Reference</th>
                            <th className="p-4 text-left">Type</th>
                            <th className="p-4 text-right">Amount</th>
                            <th className="p-4 text-right">Balance</th>
                            <th className="p-4 text-center">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="p-4">
                                    {new Date(item.created_at).toLocaleString()}
                                </td>
                                <td className="p-4">{item.reference}</td>
                                <td className="p-4 capitalize">{item.type}</td>
                                <td
                                    className={`p-4 text-right font-semibold ${
                                        item.type === "credit"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {item.type === "credit" ? "+" : "-"}
                                    {Number(item.amount).toLocaleString()}
                                </td>
                                <td className="p-4 text-right">
                                    {Number(item.balance_after).toLocaleString()}
                                </td>
                                <td className="p-4 text-center">
                                    <StatusBadge status={item.status as any} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
