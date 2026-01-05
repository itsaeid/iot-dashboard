import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import type { Sensor } from "@/types/type";
import { sensorIcons } from "./sensor-icon";
import { Switch } from "@/components/ui/switch";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (sensor: Sensor) => void;
  initialData?: Sensor;
  onChange: (checked: boolean) => void;
}

export function SensorFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
  onChange: onchange,
  
}: Props) {
  const [name, setName] = useState(initialData?.name ?? "");
  const [type, setType] = useState(initialData?.type ?? "camera");

  const onChangeHandler = (checked: boolean) => {
    setOnline(checked);
    onchange(checked);
  }

  const handleSubmit = () => {
    const newSensor: Sensor = {
      id: crypto.randomUUID(),
      name,
      type,
      status: "online",
      battery: 100,
      zone: "safe",
      location: {
        lat: 0,
        lng: 0,
      },
    };

    onSubmit(newSensor);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Sensor" : "Add Sensor"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Sensor name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Switch onCheckedChange={onChangeHandler} checked={checked} /> 

          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Select icon" />
            </SelectTrigger>
            <SelectContent>
              {sensorIcons.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white" onClick={handleSubmit}>
            {initialData ? "Save changes" : "Add sensor"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
