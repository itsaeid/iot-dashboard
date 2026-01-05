import { SensorsPanel } from "@/components/dashboard/addSensor/SensorPanel";
import { StatCard } from "@/components/dashboard/statCard";
import { SensorMap } from "@/components/dashboard/map/sensorMap";
import { useDashboardStats } from "@/hooks/use-dashboardStats";
import { useSensors } from "@/hooks/use-sensors";
import type { Sensor, SensorStatus } from "@/types/type";
import { AlertTriangle, Cpu, Wifi, WifiOff } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function DashboardPage() {
  const { data: stats, isLoading } = useDashboardStats(); //چرا اینجا data: stats نوشتم
  const { data: apiSensors } = useSensors();

  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    if (apiSensors) {
      setSensors(apiSensors);
    }
  }, [apiSensors]);

  const [filters, setFilters] = useState<Record<SensorStatus, boolean>>({
    online: true,
    offline: true,
    error: true,
  });

  const visibleSensors = useMemo(() => {
    return sensors.filter((sensor) => filters[sensor.status]);
  }, [sensors, filters]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!stats) return null;

  return (
    <div>
      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-6 xl:grid-cols-4">
        <StatCard
          title="Total Sensors"
          value={stats.total}
          icon={<Cpu className="h-6 w-6" />}
        />
        <StatCard
          title="Online"
          value={stats.online}
          icon={<Wifi className="h-6 w-6" />}
        />
        <StatCard
          title="Offline"
          value={stats.offline}
          icon={<WifiOff className="h-6 w-6" />}
        />
        <StatCard
          title="Errors"
          value={stats.error}
          icon={<AlertTriangle className="h-6 w-6" />}
        />
      </div>

      {/* Map + Sensors */}
      <div className="mt-4 mb-4 h-full grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SensorMap
            sensors={visibleSensors}
            filters={filters}
            onToggleFilter={(status) =>
              setFilters((prev) => ({
                ...prev,
                [status]: !prev[status],
              }))
            }
          />
          <SensorsPanel sensors={sensors} setSensors={setSensors} />
        
      </div>
    </div>
  );
}
