import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/useAuthStore";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Login } from "./public/login";
import { Toaster } from "@/components/ui/toaster";
import { Cabecalho } from "@/components/cabecalho/cabecalho";
import { Menu } from "@/components/menu/menu";

export function Layout() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <div className="flex h-full w-full ">
          <aside className="w-[300px] flex">
            <Menu />
          </aside>
          <div className="w-full h-full">
            <Cabecalho />

            <ScrollArea className="h-screen">
              <main className="w-full">
                <Outlet />
              </main>
            </ScrollArea>
          </div>
        </div>
      )}
      <Toaster />
      <TanStackRouterDevtools position="top-right" />
    </div>
  );
}
