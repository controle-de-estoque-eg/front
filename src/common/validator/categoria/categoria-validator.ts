import { z } from "zod";

export const categoria_schema_validator = z.object({
  id: z.number(),
  nome: z.string(),
  descricao: z.string(),
  create_at: z.string().datetime(),
  delete_at: z.string().datetime().nullable(),
  update_at: z.string().datetime().nullable(),
  soft_delete: z.boolean(),
});

export type CategoriaValidator = z.infer<typeof categoria_schema_validator>;
