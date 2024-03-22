import { rootRoute } from "./root";
import { loginRoute } from "./login";
import { cadatroCategoriaRoute } from "./categorias/cadastro-categoria";
import { categoriasRoute } from "./categorias/categorias";
import { todasCategoriasRoute } from "./categorias/todas-categorias";
import { todosProdutosRoute } from "./produtos/todos-produtos";
import { cadatroProdutoRoute } from "./produtos/cadastro-produto";
import { produtosRoute } from "./produtos/produtos";

export const routeTree = rootRoute.addChildren([
  loginRoute,
  // rotas categorias
  categoriasRoute,
  cadatroCategoriaRoute,
  todasCategoriasRoute,

  // rotas produtos
  produtosRoute,
  todosProdutosRoute,
  cadatroProdutoRoute,
]);
