import { createRoute } from "@tanstack/react-router";
import { produtosRoute } from "./produtos";
import { TodosProdutos } from "@/pages/private/produtos/todos-produtos/todos-produtos";

export const todosProdutosRoute = createRoute({
  getParentRoute: () => produtosRoute,
  path: "/todos-produtos",
  component: TodosProdutos,
});
