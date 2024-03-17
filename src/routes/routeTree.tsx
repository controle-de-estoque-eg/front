import { rootRoute } from "./root";
import { loginRoute } from "./login";
import { cadatroCategoriaRoute } from "./categorias/cadastro-categoria";
import { categoriasRoute } from "./categorias/categorias";
import { todasCategoriasRoute } from "./categorias/todas-categorias";

export const routeTree = rootRoute.addChildren([
  loginRoute,
  categoriasRoute,
  cadatroCategoriaRoute,
  todasCategoriasRoute,
]);
