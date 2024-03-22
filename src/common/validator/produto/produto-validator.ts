import { z } from "zod";

export const produto_schema_validator = z.object({
  id: z.number(),
  nome: z.string(),
  descricao: z.string(),
  categoria_id: z.number(),
  imagem: z.string().url().nullable(),
  valor_custo: z.coerce.number(),
  valor_venda: z.coerce.number(),
  quantidade_estoque: z.number(),
  codigo_de_barras: z.number(),
  disponivel: z.boolean(),
});

export type ProdutoValidator = z.infer<typeof produto_schema_validator>;
