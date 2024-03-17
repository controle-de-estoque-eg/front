import { createRoute } from "@tanstack/react-router";
import { categoriasRoute } from "./categorias";
import { CadastroCategoria } from "@/pages/private/categorias/cadastro-categoria/cadastro-categoria";

export const cadatroCategoriaRoute = createRoute({
  getParentRoute: () => categoriasRoute,
  path: "/cadastro-categoria",
  component: CadastroCategoria,
});
