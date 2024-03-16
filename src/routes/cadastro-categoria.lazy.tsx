import { CadastroCategoria } from "@/pages/private/categorias/CadastroCategoria/cadastro-categoria";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cadastro-categoria")({
  component: CadastroCategoria,
});
