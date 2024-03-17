import { z } from "zod";

export const categoria_schema = z.object({
  nome: z.string(),
  descricao: z.string(),
});

export type CategoriaForm = z.infer<typeof categoria_schema>;
