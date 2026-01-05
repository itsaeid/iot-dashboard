import { getDashboardStats } from "@/services/getDashboardStats "
import { useQuery } from "@tanstack/react-query"

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
    
  })
}
