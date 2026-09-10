import {
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";

import officeService, {
  OfficeFilters,
} from "../api/office.service";

export function useOffices(
  filters: OfficeFilters = {}
) {
  return useQuery({
    queryKey: ["admin", "offices", filters],
    queryFn: () => officeService.getOffices(filters),
    placeholderData: keepPreviousData,
  });
}