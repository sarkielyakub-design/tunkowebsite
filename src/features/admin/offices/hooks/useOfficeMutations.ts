import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import officeService, {
  OfficePayload,
} from "../api/office.service";

export function useCreateOffice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: OfficePayload) =>
      officeService.createOffice(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "offices"],
      });
    },
  });
}

export function useUpdateOffice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: Partial<OfficePayload>;
    }) =>
      officeService.updateOffice(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "offices"],
      });
    },
  });
}

export function useDeleteOffice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      officeService.deleteOffice(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "offices"],
      });
    },
  });
}

export function useActivateOffice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      officeService.activateOffice(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "offices"],
      });
    },
  });
}

export function useDeactivateOffice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      officeService.deactivateOffice(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "offices"],
      });
    },
  });
}

export function useMakeHeadOffice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      officeService.makeHeadOffice(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "offices"],
      });
    },
  });
}