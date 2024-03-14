import { CadastrarProduto } from "@/pages/private/produtos/cadastrar-produto";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cadastrar-produto")({
  component: CadastrarProduto,
});
