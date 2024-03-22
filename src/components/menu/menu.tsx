import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";

type Menu = {
  id: string;
  to: (children: React.ReactNode) => JSX.Element;
  title: string;
  description: string;
}[];

const menuOp: Menu = [
  {
    id: "vendas",
    to: (children: React.ReactNode) => <Link to="/">{children}</Link>,
    title: "Vendas",
    description: "vendas",
  },
  {
    id: "produtos",
    to: (children: React.ReactNode) => (
      <Link to="/produtos/todos-produtos">{children}</Link>
    ),
    title: "Produtos",
    description: "Produtos",
  },
  {
    id: "categorias",
    to: (children: React.ReactNode) => (
      <Link to="/categorias/todas-categorias">{children}</Link>
    ),
    title: "Categorias",
    description: "Categorias",
  },
  {
    id: "estoque",
    to: (children: React.ReactNode) => <Link to="/">{children}</Link>,
    title: "Estoque",
    description: "Estoque",
  },
  {
    id: "/relatorios",
    to: (children: React.ReactNode) => <Link to="/">{children}</Link>,
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
        <div
          key={op.id}
          className="flex flex-col w-full hover:underline font-semibold text-lg"
        >
          {op.to(
            <p
              className={cn("py-2 pl-6 mx-4 rounded-lg", {
                "bg-secondary": routerState.location.href.includes(op.id),
              })}
            >
              {op.title}
            </p>
          )}
        </div>
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
