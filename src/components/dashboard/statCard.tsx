import type {  StatCardProps } from "@/types/type";
import { Radio } from "lucide-react";


export function StatCard({title, value, icon, }: StatCardProps){
    return(
        <div className="ui-card flex items-center justify-between p-5">
            <div>
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="mt-2 text-3xl font-bold">{value}</p>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Radio className="w-4 h-4" />                   
                    <span>Live Monitoring</span>
                </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                {icon}
            </div>
           
        </div>
    )
}