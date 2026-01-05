import { useSidebar } from "@/contexts/sidebar-context";
import { cn } from "@/lib/utils";
import {
  Activity,
  ChevronUp,
  CpuIcon,
  LayoutDashboardIcon,
  Menu,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

export const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    path: "/",
  },
  {
    label: "Sensors",
    icon: CpuIcon,
    path: "/sensors",
  },
  {
    label: "Activity",
    icon: Activity,
    path: "/activity",
  },
];

export function Sidebar() {
  const { open, toggle } = useSidebar();
  
  return (
    <aside
      className={cn(
        "h-screen bg-primary relative transition-all duration-300 rounded-r-2xl overflow-hidden justify-between flex flex-col",
        open ? "w-54" : "w-18",
      )}
    >
      <div>
        {/* Header  */}
        <div className="flex mt-4 border-b border-secondary items-center justify-between p-4">
          {open && <span className="font-semibold text-secondary">IOT Panel</span>}
          <Button onClick={toggle}>
            <Menu className={open ? "w-16 h-16" : "w-20 h-20"} />
          </Button>
        </div>
        {/* Menu  */}
        <nav className="mt-4 space-y-1 px-2 flex flex-col gap-1">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <Button
                  key={item.label}
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    isActive ? "text-primary" : "text-secondary",
                    !open && "justify-center px-0"
                  )}
                >
                  <item.icon
                    className={cn(
                      "transition-all",
                      open ? "w-4 h-4" : "w-6 h-6"
                    )}
                  />
                  {open && <span>{item.label}</span>}
                </Button>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
          {/* profile  */}
      <div className="mt-4 mb-4 border-t border-secondary space-y-1 px-2 flex flex-col gap-1">
        <Button
          className={cn(
            "w-full justify-start gap-3",
            !open && "justify-center px-0"
          )}
        >
          <User className="w-20 h-20" />
          {open && (
            <span className="flex gap-2 items-center">
              {" "}
              Profile <ChevronUp />
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
}
