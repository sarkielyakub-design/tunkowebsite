"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  Plus,
  Search,
  Pencil,
  Eye,
  Trash2,
  Power,
  PowerOff,
  Crown,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
} from "lucide-react";

import {
  Office,
  OfficeFilters,
  OfficePayload,
} from "../api/office.service";

import { useOffices } from "../hooks/useOffices";

import {
  useActivateOffice,
  useDeactivateOffice,
  useDeleteOffice,
  useMakeHeadOffice,
  useCreateOffice,
  useUpdateOffice,
} from "../hooks/useOfficeMutations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormState {
  name: string;
  country: string;
  state: string;
  city: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  latitude: string;
  longitude: string;
  timezone: string;
  currency: string;
  is_head_office: boolean;
  is_active: boolean;
  sort_order: string;
  meta_title: string;
  meta_description: string;
}

const emptyForm: FormState = {
  name: "",
  country: "",
  state: "",
  city: "",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  latitude: "",
  longitude: "",
  timezone: "",
  currency: "",
  is_head_office: false,
  is_active: true,
  sort_order: "0",
  meta_title: "",
  meta_description: "",
};

export default function OfficePage() {
  const [filters, setFilters] = useState<OfficeFilters>({
    page: 1,
    per_page: 20,
  });

  const [searchInput, setSearchInput] = useState("");

  const [modal, setModal] = useState<
    "create" | "edit" | "view" | null
  >(null);

  const [selectedOffice, setSelectedOffice] =
    useState<Office | null>(null);

  const [form, setForm] = useState<FormState>(emptyForm);

  const [deleteConfirm, setDeleteConfirm] = useState<Office | null>(
    null
  );

  const { data, isLoading, isFetching, isError } =
    useOffices(filters);

  const createMutation = useCreateOffice();
  const updateMutation = useUpdateOffice();
  const deleteMutation = useDeleteOffice();
  const activateMutation = useActivateOffice();
  const deactivateMutation = useDeactivateOffice();
  const headOfficeMutation = useMakeHeadOffice();

  const offices = data?.data ?? [];
  const pagination = data?.pagination;

  const isSaving =
    createMutation.isPending || updateMutation.isPending;

  const isActionLoading =
    deleteMutation.isPending ||
    activateMutation.isPending ||
    deactivateMutation.isPending ||
    headOfficeMutation.isPending;

  const filteredOffices = useMemo(() => {
    return offices;
  }, [offices]);

  function updateForm<K extends keyof FormState>(
    field: K,
    value: FormState[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function openCreate() {
    setSelectedOffice(null);
    setForm(emptyForm);
    setModal("create");
  }

  function openEdit(office: Office) {
    setSelectedOffice(office);

    setForm({
      name: office.name ?? "",
      country: office.country ?? "",
      state: office.state ?? "",
      city: office.city ?? "",
      email: office.email ?? "",
      phone: office.phone ?? "",
      whatsapp: office.whatsapp ?? "",
      address: office.address ?? "",
      latitude:
        office.latitude !== null &&
        office.latitude !== undefined
          ? String(office.latitude)
          : "",
      longitude:
        office.longitude !== null &&
        office.longitude !== undefined
          ? String(office.longitude)
          : "",
      timezone: office.timezone ?? "",
      currency: office.currency ?? "",
      is_head_office: office.is_head_office ?? false,
      is_active: office.is_active ?? true,
      sort_order:
        office.sort_order !== undefined
          ? String(office.sort_order)
          : "0",
      meta_title: office.meta_title ?? "",
      meta_description: office.meta_description ?? "",
    });

    setModal("edit");
  }

  function openView(office: Office) {
    setSelectedOffice(office);
    setModal("view");
  }

  function closeModal() {
    setModal(null);
    setSelectedOffice(null);
    setForm(emptyForm);
  }

  function buildPayload(): OfficePayload {
    const payload: OfficePayload = {
      name: form.name.trim(),
      country: form.country.trim(),
      state: form.state.trim(),
      city: form.city.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      whatsapp: form.whatsapp.trim(),
      address: form.address.trim(),
      timezone: form.timezone.trim(),
      currency: form.currency.trim(),
      is_head_office: form.is_head_office,
      is_active: form.is_active,
      sort_order: Number(form.sort_order || 0),
      meta_title: form.meta_title.trim(),
      meta_description: form.meta_description.trim(),
    };

    if (form.latitude.trim()) {
      payload.latitude = Number(form.latitude);
    }

    if (form.longitude.trim()) {
      payload.longitude = Number(form.longitude);
    }

    return payload;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const payload = buildPayload();

    if (!payload.name || !payload.country || !payload.city) {
      return;
    }

    if (modal === "create") {
      await createMutation.mutateAsync(payload);
      closeModal();
      return;
    }

    if (modal === "edit" && selectedOffice) {
      await updateMutation.mutateAsync({
        id: selectedOffice.id,
        payload,
      });

      closeModal();
    }
  }

  async function handleDelete() {
    if (!deleteConfirm) return;

    await deleteMutation.mutateAsync(deleteConfirm.id);

    setDeleteConfirm(null);
  }

  async function handleToggleStatus(office: Office) {
    if (office.is_active) {
      await deactivateMutation.mutateAsync(office.id);
    } else {
      await activateMutation.mutateAsync(office.id);
    }
  }

  async function handleMakeHeadOffice(office: Office) {
    await headOfficeMutation.mutateAsync(office.id);
  }

  function handleSearch() {
    setFilters({
      ...filters,
      search: searchInput.trim() || undefined,
      page: 1,
    });
  }

  function clearSearch() {
    setSearchInput("");

    setFilters({
      ...filters,
      search: undefined,
      page: 1,
    });
  }

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Building2 className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Offices
              </h1>

              <p className="text-sm text-muted-foreground">
                Manage Tunko offices and locations.
              </p>
            </div>
          </div>
        </div>

        <Button onClick={openCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Add Office
        </Button>
      </div>

      {/* STATISTICS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            Total Offices
          </p>

          <p className="mt-2 text-2xl font-bold">
            {pagination?.total ?? offices.length}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            Active Offices
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {offices.filter((office) => office.is_active).length}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            Inactive Offices
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-500">
            {offices.filter((office) => !office.is_active).length}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            Head Office
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {offices.filter((office) => office.is_head_office).length}
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="rounded-xl border bg-card">
        {/* SEARCH */}
        <div className="border-b p-5">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={searchInput}
                onChange={(event) =>
                  setSearchInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search office name, country or city..."
                className="pl-9"
              />
            </div>

            <Button onClick={handleSearch}>
              Search
            </Button>

            {filters.search && (
              <Button
                variant="outline"
                onClick={clearSearch}
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-12 text-center text-sm text-muted-foreground">
              Loading offices...
            </div>
          ) : isError ? (
            <div className="p-12 text-center">
              <p className="font-medium text-red-600">
                Failed to load offices.
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Please check the backend connection.
              </p>
            </div>
          ) : filteredOffices.length === 0 ? (
            <div className="p-12 text-center">
              <Building2 className="mx-auto h-10 w-10 text-muted-foreground" />

              <p className="mt-4 font-medium">
                No offices found
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Create an office to get started.
              </p>
            </div>
          ) : (
            <table className="w-full min-w-[1000px]">
              <thead className="border-b bg-muted/40">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Office
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Location
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Contact
                  </th>

                  <th className="px-5 py-4 text-center text-sm font-semibold">
                    Staff
                  </th>

                  <th className="px-5 py-4 text-center text-sm font-semibold">
                    Transfers
                  </th>

                  <th className="px-5 py-4 text-center text-sm font-semibold">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {filteredOffices.map((office) => (
                  <tr
                    key={office.id}
                    className="hover:bg-muted/20"
                  >
                    {/* OFFICE */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                          <Building2 className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-semibold">
                            {office.name}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {office.slug}
                          </p>

                          {office.is_head_office && (
                            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                              <Crown className="h-3 w-3" />
                              Head Office
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* LOCATION */}
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />

                        <div>
                          <p className="font-medium">
                            {office.city}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {office.state
                              ? `${office.state}, `
                              : ""}
                            {office.country}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="px-5 py-4">
                      <div className="space-y-1 text-sm">
                        {office.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                            {office.phone}
                          </div>
                        )}

                        {office.email && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3.5 w-3.5" />
                            {office.email}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* STAFF */}
                    <td className="px-5 py-4 text-center">
                      {office.staff_count ?? 0}
                    </td>

                    {/* TRANSFERS */}
                    <td className="px-5 py-4 text-center">
                      {office.destination_transfer_count ?? 0}
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-4 text-center">
                      {office.is_active ? (
                        <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                          Inactive
                        </span>
                      )}
                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          title="View"
                          onClick={() => openView(office)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          title="Edit"
                          onClick={() => openEdit(office)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          title={
                            office.is_active
                              ? "Deactivate"
                              : "Activate"
                          }
                          disabled={isActionLoading}
                          onClick={() =>
                            handleToggleStatus(office)
                          }
                        >
                          {office.is_active ? (
                            <PowerOff className="h-4 w-4 text-orange-600" />
                          ) : (
                            <Power className="h-4 w-4 text-green-600" />
                          )}
                        </Button>

                        {!office.is_head_office && (
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Make Head Office"
                            disabled={isActionLoading}
                            onClick={() =>
                              handleMakeHeadOffice(office)
                            }
                          >
                            <Crown className="h-4 w-4 text-amber-600" />
                          </Button>
                        )}

                        <Button
                          variant="ghost"
                          size="icon"
                          title="Delete"
                          disabled={isActionLoading}
                          onClick={() =>
                            setDeleteConfirm(office)
                          }
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* PAGINATION */}
        {pagination && pagination.total > 0 && (
          <div className="flex flex-col gap-3 border-t p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {pagination.from ?? 0} -{" "}
              {pagination.to ?? 0} of {pagination.total}
            </p>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={
                  pagination.current_page <= 1 ||
                  isFetching
                }
                onClick={() =>
                  setFilters({
                    ...filters,
                    page: pagination.current_page - 1,
                  })
                }
              >
                Previous
              </Button>

              <Button
                variant="outline"
                size="sm"
                disabled={
                  pagination.current_page >=
                    pagination.last_page ||
                  isFetching
                }
                onClick={() =>
                  setFilters({
                    ...filters,
                    page: pagination.current_page + 1,
                  })
                }
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* CREATE / EDIT MODAL */}
      {(modal === "create" || modal === "edit") && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="flex max-h-[95vh] w-full max-w-4xl flex-col rounded-xl bg-background shadow-xl">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold">
                  {modal === "create"
                    ? "Add Office"
                    : "Edit Office"}
                </h2>

                <p className="text-sm text-muted-foreground">
                  {modal === "create"
                    ? "Create a new Tunko office."
                    : "Update office information."}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="overflow-y-auto p-6"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {/* NAME */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">
                    Office Name *
                  </label>

                  <Input
                    value={form.name}
                    onChange={(event) =>
                      updateForm("name", event.target.value)
                    }
                    placeholder="e.g. Abidjan Office"
                    required
                  />
                </div>

                {/* COUNTRY */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Country *
                  </label>

                  <Input
                    value={form.country}
                    onChange={(event) =>
                      updateForm(
                        "country",
                        event.target.value
                      )
                    }
                    placeholder="Country"
                    required
                  />
                </div>

                {/* STATE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    State / Province
                  </label>

                  <Input
                    value={form.state}
                    onChange={(event) =>
                      updateForm("state", event.target.value)
                    }
                    placeholder="State or province"
                  />
                </div>

                {/* CITY */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    City *
                  </label>

                  <Input
                    value={form.city}
                    onChange={(event) =>
                      updateForm("city", event.target.value)
                    }
                    placeholder="City"
                    required
                  />
                </div>

                {/* ADDRESS */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Address
                  </label>

                  <Input
                    value={form.address}
                    onChange={(event) =>
                      updateForm(
                        "address",
                        event.target.value
                      )
                    }
                    placeholder="Office address"
                  />
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Phone
                  </label>

                  <Input
                    value={form.phone}
                    onChange={(event) =>
                      updateForm("phone", event.target.value)
                    }
                    placeholder="Phone number"
                  />
                </div>

                {/* WHATSAPP */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    WhatsApp
                  </label>

                  <Input
                    value={form.whatsapp}
                    onChange={(event) =>
                      updateForm(
                        "whatsapp",
                        event.target.value
                      )
                    }
                    placeholder="WhatsApp number"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email
                  </label>

                  <Input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateForm("email", event.target.value)
                    }
                    placeholder="office@example.com"
                  />
                </div>

                {/* LATITUDE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Latitude
                  </label>

                  <Input
                    type="number"
                    step="any"
                    value={form.latitude}
                    onChange={(event) =>
                      updateForm(
                        "latitude",
                        event.target.value
                      )
                    }
                    placeholder="e.g. 5.3600"
                  />
                </div>

                {/* LONGITUDE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Longitude
                  </label>

                  <Input
                    type="number"
                    step="any"
                    value={form.longitude}
                    onChange={(event) =>
                      updateForm(
                        "longitude",
                        event.target.value
                      )
                    }
                    placeholder="e.g. -4.0083"
                  />
                </div>

                {/* TIMEZONE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Timezone
                  </label>

                  <Input
                    value={form.timezone}
                    onChange={(event) =>
                      updateForm(
                        "timezone",
                        event.target.value
                      )
                    }
                    placeholder="Africa/Abidjan"
                  />
                </div>

                {/* CURRENCY */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Currency
                  </label>

                  <Input
                    value={form.currency}
                    onChange={(event) =>
                      updateForm(
                        "currency",
                        event.target.value
                      )
                    }
                    placeholder="XOF"
                  />
                </div>

                {/* SORT ORDER */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Sort Order
                  </label>

                  <Input
                    type="number"
                    value={form.sort_order}
                    onChange={(event) =>
                      updateForm(
                        "sort_order",
                        event.target.value
                      )
                    }
                  />
                </div>

                {/* META TITLE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Meta Title
                  </label>

                  <Input
                    value={form.meta_title}
                    onChange={(event) =>
                      updateForm(
                        "meta_title",
                        event.target.value
                      )
                    }
                  />
                </div>

                {/* META DESCRIPTION */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">
                    Meta Description
                  </label>

                  <textarea
                    value={form.meta_description}
                    onChange={(event) =>
                      updateForm(
                        "meta_description",
                        event.target.value
                      )
                    }
                    className="min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* OPTIONS */}
                <div className="flex flex-wrap gap-6 md:col-span-2">
                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.is_active}
                      onChange={(event) =>
                        updateForm(
                          "is_active",
                          event.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />

                    Active Office
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.is_head_office}
                      onChange={(event) =>
                        updateForm(
                          "is_head_office",
                          event.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />

                    Head Office
                  </label>
                </div>
              </div>

              {/* FORM ACTIONS */}
              <div className="mt-8 flex justify-end gap-3 border-t pt-5">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeModal}
                  disabled={isSaving}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={isSaving}
                >
                  {isSaving
                    ? "Saving..."
                    : modal === "create"
                      ? "Create Office"
                      : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {modal === "view" && selectedOffice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-background shadow-xl">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold">
                  {selectedOffice.name}
                </h2>

                <p className="text-sm text-muted-foreground">
                  Office details
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <Detail
                icon={<Building2 />}
                label="Office"
                value={selectedOffice.name}
              />

              <Detail
                icon={<Globe />}
                label="Country"
                value={selectedOffice.country}
              />

              <Detail
                icon={<MapPin />}
                label="City"
                value={selectedOffice.city}
              />

              <Detail
                icon={<MapPin />}
                label="Address"
                value={selectedOffice.full_address || selectedOffice.address}
              />

              <Detail
                icon={<Phone />}
                label="Phone"
                value={selectedOffice.phone}
              />

              <Detail
                icon={<MessageCircle />}
                label="WhatsApp"
                value={selectedOffice.whatsapp}
              />

              <Detail
                icon={<Mail />}
                label="Email"
                value={selectedOffice.email}
              />

              <Detail
                icon={<Globe />}
                label="Currency"
                value={selectedOffice.currency}
              />

              <Detail
                label="Timezone"
                value={selectedOffice.timezone}
              />

              <Detail
                label="Staff"
                value={String(selectedOffice.staff_count ?? 0)}
              />

              <Detail
                label="Transfers"
                value={String(
                  selectedOffice.destination_transfer_count ?? 0
                )}
              />

              <Detail
                label="Status"
                value={
                  selectedOffice.is_active
                    ? "Active"
                    : "Inactive"
                }
              />

              <Detail
                label="Head Office"
                value={
                  selectedOffice.is_head_office
                    ? "Yes"
                    : "No"
                }
              />

              {selectedOffice.google_maps_url && (
                <div className="sm:col-span-2">
                  <a
                    href={selectedOffice.google_maps_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Open location in Google Maps
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 border-t px-6 py-4">
              <Button
                variant="outline"
                onClick={() => openEdit(selectedOffice)}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit Office
              </Button>

              <Button onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-red-100 p-3 text-red-600">
                <Trash2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Delete Office?
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Are you sure you want to delete{" "}
                  <strong>{deleteConfirm.name}</strong>?
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setDeleteConfirm(null)}
                disabled={deleteMutation.isPending}
              >
                Cancel
              </Button>

              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending
                  ? "Deleting..."
                  : "Delete Office"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value?: string | null;
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon && (
          <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
            {icon}
          </span>
        )}

        {label}
      </div>

      <p className="mt-1 font-medium">
        {value || "—"}
      </p>
    </div>
  );
}