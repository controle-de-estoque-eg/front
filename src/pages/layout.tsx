import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/useAuthStore";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Login } from "./public/login";
import { Toaster } from "@/components/ui/toaster";

export function Layout() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      {!user ? (
        <Login />
      ) : (
        <ScrollArea className="h-screen">
          <Outlet />
        </ScrollArea>
      )}
      <Toaster />
      <TanStackRouterDevtools />
    </div>
  );
}
