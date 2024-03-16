import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const menuCabecalho = [
  {
    grup: "categoria",
    to: (children: React.ReactNode) => (
      <Link to="/cadastro-categoria">{children}</Link>
    ),
    label: "Todas Categorias",
  },
  {
    grup: "categoria",
    to: (children: React.ReactNode) => (
      <Link to="/cadastro-categoria">{children}</Link>
    ),
    label: "Nova Categoria",
  },
  {
    grup: "categoria",
    to: (children: React.ReactNode) => (
      <Link to="/cadastro-categoria">{children}</Link>
    ),
    label: "Editar Categoria",
  },
];

export function Cabecalho() {
  const routerState = useRouterState();
  const [title, setTitle] = useState<string>();
  const [menu, setMenu] = useState<typeof menuCabecalho>();

  useEffect(() => {
    setTitle(
      `${routerState.location.pathname
        .charAt(1)
        .toUpperCase()}${routerState.location.pathname.substring(2)}`
    );

    const filter = menuCabecalho.filter((opt) =>
      routerState.location.pathname.includes(opt.grup)
    );
    setMenu(filter);
  }, [routerState]);

  return (
    <header className="w-full min-h-16 h-16">
      <div className="flex items-center gap-20 h-full">
        <h3 className="text-3xl pl-6 min-w-[200px]">{title}</h3>

        <div className="flex space-x-10">
          {menu?.map((opt) => (
            <div key={opt.label}>
              {opt.to(<Button className="bg-muted">{opt.label}</Button>)}
            </div>
          ))}
        </div>
      </div>
      <Separator />
    </header>
  );
}
