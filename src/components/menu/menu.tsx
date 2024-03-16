import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
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
    to: "/categorias",
    title: "Categorias",
    description: "Categorias",
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

  return (
    <menu className="w-full space-y-6 relative pt-6 border-r-2">
      {menuOp.map((op) => (
        <Link
          key={op.description}
          to={op.to}
          className="flex flex-col w-full hover:underline font-semibold text-lg"
        >
          <p
            className={cn("py-2 pl-6 mx-4 rounded-lg", {
              "bg-secondary": routerState.location.href === op.to,
            })}
          >
            {op.title}
          </p>
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
