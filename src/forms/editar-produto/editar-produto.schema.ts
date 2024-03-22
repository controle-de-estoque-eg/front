import { z } from "zod";

export const editar_produto_schema = z.object({
  id: z.number(),
  nome: z.string(),
  descricao: z.string(),
  categoria_id: z.coerce.number(),
  valor_custo: z.coerce.number(),
  valor_venda: z.coerce.number(),
  quantidade_estoque: z.coerce.number(),
  codigo_de_barras: z.coerce.number(),
  disponivel: z.coerce.boolean(),
});

export type EditarProdutoForm = z.infer<typeof editar_produto_schema>;
