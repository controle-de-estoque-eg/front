import { Link, useRouterState } from "@tanstack/react-router";
import { Separator } from "../ui/separator";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const menuOp = [
  {
    title: "Vendas",
    to: "/vendas",
    description: "vendas",
  },
  {
    to: "/produtos",
    title: "Produtos",
    description: "Produtos",
  },
  {
    to: "/estoque",
    title: "Estoque",
    description: "Estoque",
  },
  {
    to: "/realtorios",
    title: "Relatorios",
    description: "Relatorios",
  },
];

export function Menu() {
  const singout = useAuthStore((state) => state.singout);
  const routerState = useRouterState();
  useEffect(() => {
    console.log("[routerState] => ", routerState);
  }, [routerState]);

  return (
    <menu className="w-full space-y-2 relative pt-6 border-r-2">
      {menuOp.map((op) => (
        <Link key={op.description} to={op.to} className="flex flex-col w-full">
          <div
            className={cn("py-3 pl-6 mb-2 mx-4 rounded-2xl", {
              "bg-secondary": routerState.location.href === op.to,
            })}
          >
            {op.title}
          </div>
          <Separator />
        </Link>
      ))}

      <div className="absolute bottom-3 flex justify-between w-full space-x-4 px-4">
        <ThemeToggle />
        <Button size="icon" onClick={() => singout()}>
          <LogOut size={16} />
        </Button>
      </div>
    </menu>
  );
}
