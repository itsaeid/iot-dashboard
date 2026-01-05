import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import type { Sensor, SensorStatus } from "@/types/type";
import { FolderCog, MapPinned } from "lucide-react";
import { ZoneToggle } from "./ZoneToggle";

interface Props {
  sensors: Sensor[];
  filters: Record<SensorStatus, boolean>;
  onToggleFilter: (status: SensorStatus) => void;
}

const getMarkerIcon = (status: SensorStatus) => {
  const color =
    status === "online"
      ? "#22c55e"
      : status === "offline"
      ? "#facc15"
      : "#ef4444";

  return L.divIcon({
    className: "",
    html: `<div style="
      width:12px;
      height:12px;
      border-radius:50%;
      background:${color};
      border:2px solid white;
    "></div>`,
  });
};

export function SensorMap({ sensors }: Props) {
  const [filters, setFilters] = useState<Record<SensorStatus, boolean>>({
    online: true,
    offline: true,
    error: true,
  });

  const toggleFilter = (status: SensorStatus) => {
    setFilters((prev) => ({ ...prev, [status]: !prev[status] }));
  };

  const visibleSensors = sensors.filter((sensor) => filters[sensor.status]);

  return (
    <div className="rounded-2xl flex flex-col h-full overflow-hidden p-4 ui-card">
      <div className=" mb-4 flex items-center justify-between">
        {/* Header  */}
        <div className="flex gap-3 items-center">
          <MapPinned />
          <h3 className="text-base font-semibold">Sensor Locations</h3>
        </div>
        <button className="rounded-lg flex gap-2 bg-secondary border px-3 py-2 text-sm">
          <FolderCog />
          Manage Zones
        </button>
      </div>

      <div className="h-90 overflow-hidden rounded-xl">
        <MapContainer center={[20, 0]} zoom={2} className="h-full w-full z-0">
          <TileLayer
            className="z-0"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {visibleSensors.map((sensor) => (
            <Marker
              key={sensor.id}
              position={[sensor.location.lat, sensor.location.lng]}
              icon={getMarkerIcon(sensor.status)}
            />
          ))}
        </MapContainer>
      </div>

      <div className="mt-4 shrink-0 space-y-3">
        <ZoneToggle
          label="Restricted Area"
          color="bg-red-500"
          checked={filters.error}
          onChange={() => toggleFilter("error")}
        />
        <ZoneToggle
          label="Alarm Zone"
          color="bg-yellow-400"
          checked={filters.offline}
          onChange={() => toggleFilter("offline")}
        />
        <ZoneToggle
          label="Safe Zone"
          color="bg-green-500"
          checked={filters.online}
          onChange={() =>  toggleFilter("online")}
        />
      </div>
    </div>
  );
}
