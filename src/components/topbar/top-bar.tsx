import { Bell, Moon, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNotifications } from "@/hooks/use-notification";
import { useTheme } from "@/contexts/theme-context";
import { useUser } from "@/hooks/use-user";

export function TopBar() {
  const { toggleTheme, theme } = useTheme();
  const { data: user } = useUser();
  const { data: notifications = [] } = useNotifications();

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="flex ui-card mt-4 w-full h-16 items-center justify-end px-4">
      <div className="flex items-center gap-4">
        {/* Theme Switch */}
        <button
          onClick={toggleTheme}
          className="flex cursor-pointer items-center gap-2"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} /> }
        </button>

        {/* Notifications */}
        <Dialog>
          <DialogTrigger className="relative z-10 cursor-pointer">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge
                className="absolute -right-2 -top-2 h-5 min-w-5 justify-center rounded-full p-0"
                variant="destructive"
              >
                {unreadCount}
              </Badge>
            )}
          </DialogTrigger>

          <DialogContent className="z-1000 top-50 max-w-md">
            <DialogHeader>
              <DialogTitle>System Notifications</DialogTitle>
            </DialogHeader>

            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.id} className="rounded-md border p-3 text-sm">
                  {n.message}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* User */}
        {user ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-600">
              {user.name}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <User className="bg-background p-2 w-10 h-10 rounded-full" />
            <span className="font-medium text-sm text-gray-600">User Name</span>
          </div>
        )}
      </div>
    </header>
  );
}
