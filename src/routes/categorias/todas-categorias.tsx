import { createRoute } from "@tanstack/react-router";
import { categoriasRoute } from "./categorias";
import { TodasCategorias } from "@/pages/private/categorias/todas-categorias/todas-categorias";

export const todasCategoriasRoute = createRoute({
  getParentRoute: () => categoriasRoute,
  path: "/todas-categorias",
  component: TodasCategorias,
});
