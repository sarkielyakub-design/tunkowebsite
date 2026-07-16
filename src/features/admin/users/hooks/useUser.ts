import { useQuery } from "@tanstack/react-query";
import {
  getUser,
  getUserDetails,
} from "../api/users";

export const useUser = (id: number) =>
  useQuery({
    queryKey: ["admin-user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });

export const useUserDetails = (id: number) =>
  useQuery({
    queryKey: ["admin-user-details", id],
    queryFn: () => getUserDetails(id),
    enabled: !!id,
  });