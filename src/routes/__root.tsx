import { NotPageFound } from "@/pages/NotPageFound";
import { Layout } from "@/pages/layout";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotPageFound,
});
