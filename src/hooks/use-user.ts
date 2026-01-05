import { getUser } from "@/services/getUser"
import { useQuery } from "@tanstack/react-query"

export const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: getUser
  })
