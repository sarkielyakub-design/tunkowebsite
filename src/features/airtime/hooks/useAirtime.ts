"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  getCountries,
  getNetworks,
  getQuote,
  purchaseAirtime,
  getBeneficiaries,
  getHistory,
} from "@/src/api/airtime";

export function useAirtime() {
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<any[]>([]);
  const [networks, setNetworks] = useState<any[]>([]);

  const [beneficiaries, setBeneficiaries] =
    useState<any[]>([]);

  const [history, setHistory] =
    useState<any[]>([]);

  const [selectedCountry, setSelectedCountry] =
    useState<any>(null);

  const [selectedNetwork, setSelectedNetwork] =
    useState<any>(null);

  const [phone, setPhone] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [quote, setQuote] =
    useState<any>(null);

  const [reference, setReference] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | Countries
  |--------------------------------------------------------------------------
  */

  async function loadCountries() {
    try {

      setLoading(true);

      const response =
        await getCountries();

      if (response.success) {

        setCountries(response.data);

      }

    } catch {

      toast.error(
        "Unable to load countries."
      );

    } finally {

      setLoading(false);

    }
  }

  /*
  |--------------------------------------------------------------------------
  | Networks
  |--------------------------------------------------------------------------
  */

  async function loadNetworks(
    countryId: number
  ) {
    try {

      setLoading(true);

      const response =
        await getNetworks(countryId);

      if (response.success) {

        setNetworks(response.data);

      }

    } catch {

      toast.error(
        "Unable to load networks."
      );

    } finally {

      setLoading(false);

    }
  }

  /*
  |--------------------------------------------------------------------------
  | Quote
  |--------------------------------------------------------------------------
  */

  async function loadQuote() {
    if (!amount) return;

    try {

      const response =
        await getQuote({

          amount: Number(amount),

        });

      if (response.success) {

        setQuote(response.data);

      }

    } catch {}
  }

  /*
  |--------------------------------------------------------------------------
  | Beneficiaries
  |--------------------------------------------------------------------------
  */

  async function loadBeneficiaries() {
    try {

      const response =
        await getBeneficiaries();

      if (response.success) {

        setBeneficiaries(
          response.data
        );

      }

    } catch {}
  }

  /*
  |--------------------------------------------------------------------------
  | History
  |--------------------------------------------------------------------------
  */

  async function loadHistory() {
    try {

      const response =
        await getHistory();

      if (response.success) {

        setHistory(
          response.data
        );

      }

    } catch {}
  }

  /*
  |--------------------------------------------------------------------------
  | Purchase
  |--------------------------------------------------------------------------
  */

  async function buyAirtime(
    pin: string
  ) {
    if (
      !selectedCountry ||
      !selectedNetwork ||
      !phone ||
      !amount
    ) {

      toast.error(
        "Complete all required fields."
      );

      return null;
    }

    try {

      setLoading(true);

      const response =
        await purchaseAirtime({

          country_id:
            selectedCountry.id,

          country:
            selectedCountry.name,

          network:
            selectedNetwork.name,

          phone,

          amount:
            Number(amount),

          pin,

        });

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

        "Purchase failed."

      );

      return null;

    } finally {

      setLoading(false);

    }
  }

  /*
  |--------------------------------------------------------------------------
  | Reset
  |--------------------------------------------------------------------------
  */

  function reset() {

    setSelectedCountry(null);

    setSelectedNetwork(null);

    setPhone("");

    setAmount("");

    setQuote(null);

    setReference("");

  }

  /*
  |--------------------------------------------------------------------------
  | Effects
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    loadCountries();

    loadBeneficiaries();

    loadHistory();

  }, []);

  useEffect(() => {

    if (selectedCountry) {

      loadNetworks(
        selectedCountry.id
      );

      setSelectedNetwork(null);

    }

  }, [selectedCountry]);

  useEffect(() => {

    loadQuote();

  }, [amount]);

  return {

    loading,

    countries,
    networks,

    beneficiaries,
    history,

    selectedCountry,
    setSelectedCountry,

    selectedNetwork,
    setSelectedNetwork,

    phone,
    setPhone,

    amount,
    setAmount,

    quote,

    reference,

    buyAirtime,

    reset,

  };
}