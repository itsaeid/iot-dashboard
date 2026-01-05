import { api } from "@/lib/axios"
import type { User } from "@/types/type"

export const getUser = async (): Promise<User> => {
  const { data } = await api.get("/user")
  return data
}
