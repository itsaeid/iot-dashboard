import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"
import type { Notification } from "@/types/type"

export const useNotifications = () =>
  useQuery<Notification[]>({
    queryKey: ["notifications"],
    queryFn: async () => {
      const { data } = await api.get<Notification[]>("/notifications")
      return data
    }
  })
