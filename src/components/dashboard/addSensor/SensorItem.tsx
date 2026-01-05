import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Sensor } from "@/types/type";
import { BatteryFull, MoreVertical } from "lucide-react";
import { sensorIcons } from "./sensor-icon";
import { cn } from "@/lib/utils";

interface Props {
  sensor: Sensor;
  onEdit: () => void;
  onDelete: () => void;
}

export function SensorItem({ sensor, onEdit, onDelete }: Props) {
  const Icon =
    sensorIcons.find((i) => i.value === sensor.type)?.icon ??
    sensorIcons[0].icon;

  return (
    <div className="flex items-center justify-between rounded-xl bg-muted p-4">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <div>
          <p className="text-sm font-medium">{sensor.name}</p>
          <p className="text-xs text-muted-foreground">
            {sensor.zone}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <BatteryFull className="h-4 w-4" />
          <p className="text-xs text-muted-foreground">{sensor.battery}%</p>
        </div>
        <div
          className={cn(
            "px-3 py-1 text-xs rounded-full",
            sensor.status === "online" && "bg-green-500/10 text-green-600",
            sensor.status === "offline" && "bg-gray-600/20 text-muted-foreground",
            sensor.status === "error" && "bg-red-500/10 text-red-600"
          )}
        >
          {sensor.status}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500" onClick={onDelete}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
