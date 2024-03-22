import { z } from "zod";

export const criar_produto_schema = z.object({
  nome: z.string(),
  descricao: z.string(),
  categoria_id: z.coerce.number(),
  codigo_de_barras: z.coerce.number(),
  valor_custo: z.coerce.number(),
  valor_venda: z.coerce.number(),
});

export type CriarProdutoForm = z.infer<typeof criar_produto_schema>;
