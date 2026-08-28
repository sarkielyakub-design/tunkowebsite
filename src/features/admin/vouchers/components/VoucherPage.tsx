"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Ban, Eye, Plus, RefreshCcw, Search, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/src/i18n/I18nProvider";
import { cancelVoucher, createVoucher, deleteVoucher } from "../api/voucher.service";
import { useVouchers } from "../hooks/useVouchers";
import type { Voucher, CreateVoucherPayload } from "../types/voucher";

const initialForm: CreateVoucherPayload = {
  type: "airtime",
  country_code: "NE",
  network_name: "",
  product_name: "",
  amount: 0,
  currency: "XOF",
  pin: "",
  provider: "manual",
  provider_reference: "",
  expires_at: null,
  remark: "",
};

export default function VoucherPage() {
  const { t } = useI18n();
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState({ search: "", type: "", country_code: "", status: "" });
  const [showCreate, setShowCreate] = useState(false);
  const [selected, setSelected] = useState<Voucher | null>(null);
  const [form, setForm] = useState<CreateVoucherPayload>(initialForm);

  const query = useVouchers(filters);

  const refresh = () => queryClient.invalidateQueries({ queryKey: ["admin-vouchers"] });

  const createMutation = useMutation({
    mutationFn: createVoucher,
    onSuccess: () => {
      toast.success(t("Voucher added successfully."));
      setShowCreate(false);
      setForm(initialForm);
      refresh();
    },
    onError: (error: any) => toast.error(error?.response?.data?.message || t("Unable to add voucher.")),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteVoucher,
    onSuccess: () => { toast.success(t("Voucher deleted successfully.")); refresh(); },
    onError: (error: any) => toast.error(error?.response?.data?.message || t("Unable to delete voucher.")),
  });

  const cancelMutation = useMutation({
    mutationFn: cancelVoucher,
    onSuccess: () => { toast.success(t("Voucher cancelled successfully.")); refresh(); },
    onError: (error: any) => toast.error(error?.response?.data?.message || t("Unable to cancel voucher.")),
  });

  const submit = (event: FormEvent) => {
    event.preventDefault();
    createMutation.mutate({
      ...form,
      country_code: form.country_code.trim().toUpperCase(),
      currency: form.currency.trim().toUpperCase(),
      amount: Number(form.amount),
      expires_at: form.expires_at || null,
    });
  };

  const vouchers = query.data?.data?.data ?? [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t("Vouchers")}</h1>
          <p className="mt-1 text-slate-500">{t("Manage physical airtime and data vouchers.")}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => refresh()} className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50">
            <RefreshCcw className="h-4 w-4" /> {t("Refresh")}
          </button>
          <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" /> {t("Add Voucher")}
          </button>
        </div>
      </div>

      <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-5">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input value={filters.search} onChange={e => setFilters(v => ({ ...v, search: e.target.value }))} placeholder={t("Search reference, network or product")} className="w-full rounded-xl border px-10 py-2.5 outline-none focus:border-blue-500" />
        </div>
        <select value={filters.type} onChange={e => setFilters(v => ({ ...v, type: e.target.value }))} className="rounded-xl border px-3 py-2.5">
          <option value="">{t("All Types")}</option><option value="airtime">{t("Airtime")}</option><option value="data">{t("Data")}</option>
        </select>
        <select value={filters.country_code} onChange={e => setFilters(v => ({ ...v, country_code: e.target.value }))} className="rounded-xl border px-3 py-2.5">
          <option value="">{t("All Countries")}</option><option value="NE">Niger</option><option value="TD">Chad</option>
        </select>
        <select value={filters.status} onChange={e => setFilters(v => ({ ...v, status: e.target.value }))} className="rounded-xl border px-3 py-2.5">
          <option value="">{t("All Statuses")}</option><option value="available">{t("Available")}</option><option value="sold">{t("Sold")}</option><option value="cancelled">{t("Cancelled")}</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50"><tr>{["Reference","Type","Country","Network","Product","Amount","Status","Created","Actions"].map(h => <th key={h} className="whitespace-nowrap px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">{t(h)}</th>)}</tr></thead>
            <tbody>
              {query.isLoading ? <tr><td colSpan={9} className="px-5 py-12 text-center text-slate-500">{t("Loading...")}</td></tr> : vouchers.length === 0 ? <tr><td colSpan={9} className="px-5 py-12 text-center text-slate-500">{t("No vouchers found.")}</td></tr> : vouchers.map(v => (
                <tr key={v.id} className="border-t hover:bg-slate-50">
                  <td className="px-5 py-4 font-medium">{v.reference}</td>
                  <td className="px-5 py-4 capitalize">{t(v.type)}</td>
                  <td className="px-5 py-4">{v.country_code}</td>
                  <td className="px-5 py-4">{v.network_name || "—"}</td>
                  <td className="px-5 py-4">{v.product_name || "—"}</td>
                  <td className="px-5 py-4 font-semibold">{Number(v.amount).toLocaleString()} {v.currency}</td>
                  <td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${v.status === "available" ? "bg-green-100 text-green-700" : v.status === "sold" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>{t(v.status)}</span></td>
                  <td className="px-5 py-4 text-sm text-slate-500">{v.created_at ? new Date(v.created_at).toLocaleDateString() : "—"}</td>
                  <td className="px-5 py-4"><div className="flex gap-1">
                    <button title={t("View")} onClick={() => setSelected(v)} className="rounded-lg p-2 hover:bg-slate-100"><Eye className="h-4 w-4" /></button>
                    {v.status === "available" && <><button title={t("Cancel")} disabled={cancelMutation.isPending} onClick={() => cancelMutation.mutate(v.id)} className="rounded-lg p-2 text-orange-600 hover:bg-orange-50"><Ban className="h-4 w-4" /></button><button title={t("Delete")} disabled={deleteMutation.isPending} onClick={() => { if (window.confirm(t("Delete this voucher?"))) deleteMutation.mutate(v.id); }} className="rounded-lg p-2 text-red-600 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button></>}
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showCreate && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><form onSubmit={submit} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between"><h2 className="text-xl font-bold">{t("Add Voucher")}</h2><button type="button" onClick={() => setShowCreate(false)}><X /></button></div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label={t("Type")}><select required value={form.type} onChange={e => setForm(v => ({ ...v, type: e.target.value }))} className="input"><option value="airtime">{t("Airtime")}</option><option value="data">{t("Data")}</option></select></Field>
          <Field label={t("Country Code")}><select required value={form.country_code} onChange={e => setForm(v => ({ ...v, country_code: e.target.value }))} className="input"><option value="NE">Niger (NE)</option><option value="TD">Chad (TD)</option></select></Field>
          <Field label={t("Network Name")}><input value={form.network_name} onChange={e => setForm(v => ({ ...v, network_name: e.target.value }))} className="input" /></Field>
          <Field label={t("Product Name")}><input value={form.product_name} onChange={e => setForm(v => ({ ...v, product_name: e.target.value }))} className="input" /></Field>
          <Field label={t("Amount")}><input required min="0" step="0.01" type="number" value={form.amount} onChange={e => setForm(v => ({ ...v, amount: Number(e.target.value) }))} className="input" /></Field>
          <Field label={t("Currency")}><input required value={form.currency} onChange={e => setForm(v => ({ ...v, currency: e.target.value }))} className="input" /></Field>
          <Field label={t("PIN")}><input required value={form.pin} onChange={e => setForm(v => ({ ...v, pin: e.target.value }))} className="input" /></Field>
          <Field label={t("Provider")}><input value={form.provider} onChange={e => setForm(v => ({ ...v, provider: e.target.value }))} className="input" /></Field>
          <Field label={t("Provider Reference")}><input value={form.provider_reference} onChange={e => setForm(v => ({ ...v, provider_reference: e.target.value }))} className="input" /></Field>
          <Field label={t("Expires At")}><input type="datetime-local" value={form.expires_at || ""} onChange={e => setForm(v => ({ ...v, expires_at: e.target.value || null }))} className="input" /></Field>
          <Field label={t("Reference")}><input value={form.reference || ""} onChange={e => setForm(v => ({ ...v, reference: e.target.value }))} placeholder={t("Optional; generated automatically")} className="input" /></Field>
          <Field label={t("Remark")}><input value={form.remark} onChange={e => setForm(v => ({ ...v, remark: e.target.value }))} className="input" /></Field>
        </div>
        <div className="mt-6 flex justify-end gap-3"><button type="button" onClick={() => setShowCreate(false)} className="rounded-xl border px-5 py-3">{t("Cancel")}</button><button disabled={createMutation.isPending} className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-50">{createMutation.isPending ? t("Saving...") : t("Save Voucher")}</button></div>
      </form></div>}

      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold">{t("Voucher Details")}</h2><button onClick={() => setSelected(null)}><X /></button></div><div className="grid grid-cols-2 gap-4 text-sm">{Object.entries(selected).filter(([k]) => k !== "pin").map(([key,value]) => <div key={key}><p className="text-slate-500">{t(key)}</p><p className="mt-1 break-words font-medium">{value === null || value === undefined || value === "" ? "—" : String(value)}</p></div>)}</div></div></div>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>{children}</label>;
}
