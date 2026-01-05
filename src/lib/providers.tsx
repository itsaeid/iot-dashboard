import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query";
import { ThemeProvider } from "../contexts/theme-context";
import { SidebarProvider } from "@/contexts/sidebar-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
