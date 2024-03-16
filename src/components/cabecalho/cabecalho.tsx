import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Cabecalho() {
  const routerState = useRouterState();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    setTitle(
      `${routerState.location.pathname
        .charAt(1)
        .toUpperCase()}${routerState.location.pathname.substring(2)}`
    );
  }, [routerState]);

  return (
    <header className="w-full min-h-16 h-16">
      <div className="flex items-center gap-48 h-full">
        <h3 className="text-3xl pl-6">{title}</h3>

        <div className="space-x-20">
          <Button className="bg-muted">Nova Venda</Button>
          <Button className="bg-muted">Historico de Vendas</Button>
          <Button className="bg-muted">Vendas do Dia</Button>
        </div>
      </div>
      <Separator />
    </header>
  );
}
