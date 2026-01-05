//Theme types //

export type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

//side bar
export interface SidebarContextValue {
  open: boolean;
  toggle: () => void;
}

//user
export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
}

//ِDashboard stats
export type DashboardStats = {
  total: number;
  online: number;
  offline: number;
  error: number;
};

export type StatCardProps = {
  title: string;
  value: number;
  icon: any;
};

//map monitoring components types
export type SensorStatus = "online" | "offline" | "error";

export type SensorZone = "safe" | "alarm" | "restricted";

export interface Sensor {
  id: string;
  name: string;
  type: string;
  status: SensorStatus;
  battery: number;
  zone: SensorZone;
  location: {
    lat: number;
    lng: number;
  };
}
