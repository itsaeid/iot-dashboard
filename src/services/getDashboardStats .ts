import { api } from "@/lib/axios"
import type { DashboardStats } from "@/types/type"

export const getDashboardStats = async (): Promise<DashboardStats> => {
  const res = await api.get("/stats")
  return res.data
}






















