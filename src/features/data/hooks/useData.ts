"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  getCountries,
  getNetworks,
  getBundles,
  getQuote,
  purchaseData,
  getBeneficiaries,
  getRecentPurchases,
} from "@/src/api/data";

export function useData() {
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<any[]>([]);
  const [networks, setNetworks] = useState<any[]>([]);
  const [bundles, setBundles] = useState<any[]>([]);

  const [beneficiaries, setBeneficiaries] = useState<any[]>([]);
  const [recentPurchases, setRecentPurchases] = useState<any[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<any>(null);
  const [selectedBundle, setSelectedBundle] = useState<any>(null);

  const [phone, setPhone] = useState("");

  const [quote, setQuote] = useState<any>(null);

  const [reference, setReference] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Countries
  |--------------------------------------------------------------------------
  */

  async function loadCountries() {
    try {
      setLoading(true);

      const response = await getCountries();

      if (response.success) {
        setCountries(response.data);
      }
    } catch {
      toast.error("Unable to load countries.");
    } finally {
      setLoading(false);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Networks
  |--------------------------------------------------------------------------
  */

  async function loadNetworks(countryId: number) {
    try {
      setLoading(true);

      const response = await getNetworks(countryId);

      if (response.success) {
        setNetworks(response.data);
      }
    } catch {
      toast.error("Unable to load networks.");
    } finally {
      setLoading(false);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Bundles
  |--------------------------------------------------------------------------
  */

  async function loadBundles(networkId: number) {
    try {
      setLoading(true);

      const response = await getBundles(networkId);

      if (response.success) {
        setBundles(response.data);
      }
    } catch {
      toast.error("Unable to load bundles.");
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
    if (!selectedBundle || !phone) return;

    try {
      const response = await getQuote({
        bundle_id: selectedBundle.id,
        phone,
      });

      if (response.success) {
        setQuote(response.data);
      }
    } catch {
      toast.error("Unable to load quote.");
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Beneficiaries
  |--------------------------------------------------------------------------
  */

  async function loadBeneficiaries() {
    try {
      const response = await getBeneficiaries();

      if (response.success) {
        setBeneficiaries(response.data);
      }
    } catch {}
  }

  /*
  |--------------------------------------------------------------------------
  | Recent Purchases
  |--------------------------------------------------------------------------
  */

  async function loadHistory() {
    try {
      const response = await getRecentPurchases();

      if (response.success) {
        setRecentPurchases(response.data);
      }
    } catch {}
  }

  /*
  |--------------------------------------------------------------------------
  | Purchase
  |--------------------------------------------------------------------------
  */

  async function buyData(pin: string) {
    if (!selectedBundle) return null;

    try {
      setLoading(true);

      const response = await purchaseData({
        bundle_id: selectedBundle.id,
        phone,
        pin,
      });

      if (response.success) {
        setReference(response.data.reference);

        toast.success(response.message);

        return response.data;
      }

      return null;
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
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
    setSelectedBundle(null);
    setPhone("");
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
      loadNetworks(selectedCountry.id);

      setSelectedNetwork(null);
      setSelectedBundle(null);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedNetwork) {
      loadBundles(selectedNetwork.id);

      setSelectedBundle(null);
    }
  }, [selectedNetwork]);

  useEffect(() => {
    loadQuote();
  }, [selectedBundle, phone]);

  return {
    loading,

    countries,
    networks,
    bundles,

    beneficiaries,
    recentPurchases,

    selectedCountry,
    setSelectedCountry,

    selectedNetwork,
    setSelectedNetwork,

    selectedBundle,
    setSelectedBundle,

    phone,
    setPhone,

    quote,

    reference,

    buyData,

    reset,
  };
}