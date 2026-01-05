import { useQuery } from "@tanstack/react-query"
import { getSensors } from "../services/getSensors"
import type { Sensor } from "@/types/type"

export const useSensors = ()=> {
    return useQuery<Sensor[]>({
        queryKey: ["sensors"],
        queryFn: getSensors
    })
}