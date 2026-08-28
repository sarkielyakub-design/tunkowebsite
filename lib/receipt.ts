import axios from "axios";
import { Receipt } from "@/types/receipt";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function getReceipt(reference: string): Promise<Receipt> {
    const { data } = await axios.get(
        `${API}/transactions/receipt/${reference}`
    );

    return data.data;
}