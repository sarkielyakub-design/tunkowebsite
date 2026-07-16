import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/users";

export const useUsers = (params: any) =>
  useQuery({
    queryKey: [
      "admin-users",
      params,
    ],

    queryFn: () => getUsers(params),

    keepPreviousData: true,
  });