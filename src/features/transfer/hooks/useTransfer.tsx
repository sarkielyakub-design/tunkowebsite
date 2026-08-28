"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  searchRecipient,
  transferMoney,
} from "@/src/api/transfer";

export function useTransfer() {
  const [loading, setLoading] =
    useState(false);

  const [recipient, setRecipient] =
    useState<any>(null);

  const [reference, setReference] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [transferType, setTransferType] =
    useState("wallet");

  /**
   * Search Recipient
   */
  async function findRecipient(
    query: string
  ) {
    try {
      setLoading(true);

      const response =
        await searchRecipient(query);

      if (response.success) {
        setRecipient(
          response.recipient
        );

        toast.success(
          "Recipient found"
        );

        return response.recipient;
      }
    } catch (error: any) {
      toast.error(
        error.response?.data
          ?.message ??
          "Recipient not found."
      );

      setRecipient(null);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Transfer Money
   */
  async function sendTransfer(
    payload: {
      recipient_id: number;
      amount: number;
      pin: string;
      remark?: string;
    }
  ) {
    try {
      setLoading(true);

      const response =
        await transferMoney(
          payload
        );

      if (response.success) {
        setReference(
          response.data.reference
        );

        toast.success(
          response.message
        );

        return response.data;
      }

      return null;
    } catch (error: any) {
      toast.error(
        error.response?.data
          ?.message ??
          "Transfer failed."
      );

      return null;
    } finally {
      setLoading(false);
    }
  }

  /**
   * Reset Form
   */
  function resetTransfer() {
    setRecipient(null);
    setAmount("");
    setTransferType("wallet");
    setReference("");
  }

  return {
    loading,

    recipient,
    setRecipient,

    amount,
    setAmount,

    transferType,
    setTransferType,

    reference,

    findRecipient,

    sendTransfer,

    resetTransfer,
  };
}