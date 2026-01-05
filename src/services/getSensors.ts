import { api } from "../lib/axios";
import type {  Sensor } from "../types/type";

export const getSensors = async(): Promise<Sensor[]> =>{
    const res = await api.get("/sensors")
    return res.data
}