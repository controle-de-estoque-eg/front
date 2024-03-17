import { z } from "zod";

export const editar_categoria_schema = z.object({
  id: z.coerce.number(),
  nome: z.string(),
  descricao: z.string(),
});
export type EditarCategoriaForm = z.infer<typeof editar_categoria_schema>;
