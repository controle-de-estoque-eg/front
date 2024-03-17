import { z } from "zod";

export const criar_categoria_schema = z.object({
  nome: z.string(),
  descricao: z.string(),
});

export type CriarCategoriaForm = z.infer<typeof criar_categoria_schema>;
