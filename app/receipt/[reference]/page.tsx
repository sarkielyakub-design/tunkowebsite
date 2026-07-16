import ReceiptCard from "@/components/receipt/ReceiptCard";

export default async function ReceiptPage({
    params,
}: {
    params: Promise<{ reference: string }>;
}) {
    const { reference } = await params;

    return (
        <main className="min-h-screen bg-[#F7F8FC] py-10">
            <ReceiptCard reference={reference} />
        </main>
    );
}