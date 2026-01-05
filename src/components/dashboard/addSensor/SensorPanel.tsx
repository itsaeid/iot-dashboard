import { Button } from "@/components/ui/button";
import { Cpu, Plus } from "lucide-react";
import { useState } from "react";
import { SensorItem } from "./SensorItem";
import { SensorFormModal } from "./SensorFormModal";
import type { Sensor } from "@/types/type";

interface Props {
  sensors: Sensor[];
  setSensors: React.Dispatch<React.SetStateAction<Sensor[]>>;
}

export function SensorsPanel({ sensors, setSensors }: Props) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Sensor | null>(null);

  const handleAdd = (sensor: Sensor) => {
    setSensors((prev) => [sensor, ...prev]);
  };

  const handleDelete = (id: string) => {
    setSensors((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="flex h-[88vh] w-full flex-col rounded-2xl ui-card">
      {/* Header  */}
      <div className="shrink-0 flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-3">
          <Cpu />
          <h3 className="font-semibold">Your sensors</h3>
        </div>
        <Button
          size="sm"
          className="bg-blue-700 hover:bg-blue-800 "
          onClick={() => setOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4 text-white" />
          <span className="text-white">Add Sensor</span>
        </Button>
      </div>

      {/* List*/}
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {sensors.map((sensor) => (
          <SensorItem
            key={sensor.id}
            sensor={sensor}
            onEdit={() => {
              setEditing(sensor);
              setOpen(true);
            }}
            onDelete={() => handleDelete(sensor.id)}
          />
        ))}
      </div>

      <SensorFormModal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditing(null);
        }}
        initialData={editing ?? undefined}
        onSubmit={handleAdd}
      />
    </div>
  );
}
