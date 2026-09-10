import adminApi from "@/lib/admin-api";

export interface Office {
  id: number;
  name: string;
  slug: string;
  country: string;
  state?: string | null;
  city: string;
  email?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  timezone?: string | null;
  currency?: string | null;
  is_head_office: boolean;
  is_active: boolean;
  sort_order?: number;
  meta_title?: string | null;
  meta_description?: string | null;
  full_address?: string | null;
  google_maps_url?: string | null;
  staff_count?: number;
  destination_transfer_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface OfficeListResponse {
  success: boolean;
  data: Office[];
  pagination?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
  };
}

export interface OfficeResponse {
  success: boolean;
  data: Office;
  message?: string;
}

export interface OfficePayload {
  name: string;
  country: string;
  state?: string;
  city: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  currency?: string;
  is_head_office?: boolean;
  is_active?: boolean;
  sort_order?: number;
  meta_title?: string;
  meta_description?: string;
}

export interface OfficeFilters {
  search?: string;
  country?: string;
  city?: string;
  is_active?: boolean | string;
  page?: number;
  per_page?: number;
}

class OfficeService {
  async getOffices(
    filters: OfficeFilters = {}
  ): Promise<OfficeListResponse> {
    const { data } = await adminApi.get("/admin/offices", {
      params: filters,
    });

    return data;
  }

  async getOffice(id: number | string): Promise<OfficeResponse> {
    const { data } = await adminApi.get(`/admin/offices/${id}`);

    return data;
  }

  async createOffice(
    payload: OfficePayload
  ): Promise<OfficeResponse> {
    const { data } = await adminApi.post(
      "/admin/offices",
      payload
    );

    return data;
  }

  async updateOffice(
    id: number | string,
    payload: Partial<OfficePayload>
  ): Promise<OfficeResponse> {
    const { data } = await adminApi.put(
      `/admin/offices/${id}`,
      payload
    );

    return data;
  }

  async deleteOffice(
    id: number | string
  ): Promise<{ success: boolean; message?: string }> {
    const { data } = await adminApi.delete(
      `/admin/offices/${id}`
    );

    return data;
  }

  async activateOffice(
    id: number | string
  ): Promise<OfficeResponse> {
    const { data } = await adminApi.post(
      `/admin/offices/${id}/activate`
    );

    return data;
  }

  async deactivateOffice(
    id: number | string
  ): Promise<OfficeResponse> {
    const { data } = await adminApi.post(
      `/admin/offices/${id}/deactivate`
    );

    return data;
  }

  async makeHeadOffice(
    id: number | string
  ): Promise<OfficeResponse> {
    const { data } = await adminApi.post(
      `/admin/offices/${id}/head-office`
    );

    return data;
  }
}

export default new OfficeService();