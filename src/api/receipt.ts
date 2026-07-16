import api from "@/lib/axios";

export async function getReceipt(
    reference: string
) {
    const { data } = await api.get(
        `/receipt/${reference}`
    );

    return data;
}