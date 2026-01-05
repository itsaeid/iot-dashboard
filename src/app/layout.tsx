import { Sidebar } from "@/components/sidebar/Sidebar";
import { TopBar } from "@/components/topbar/top-bar";
import { SidebarProvider } from "@/contexts/sidebar-context";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <SidebarProvider>
      <div className="flex overflow-hidden h-screen justify-between">
        <Sidebar />
        <div className="flex flex-1 sm:px-3 lg:px-10 flex-col items-center justify-center">
          <TopBar />
          <main className="flex-1 scrollbar-smart overflow-y-auto pr-1 w-full bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
