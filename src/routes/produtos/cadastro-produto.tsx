import { createRoute } from "@tanstack/react-router";
import { produtosRoute } from "./produtos";
import { CadastroProduto } from "@/pages/private/produtos/cadastro-produto/cadastro-produto";

export const cadatroProdutoRoute = createRoute({
  getParentRoute: () => produtosRoute,
  path: "/cadastro-produto",
  component: CadastroProduto,
});
