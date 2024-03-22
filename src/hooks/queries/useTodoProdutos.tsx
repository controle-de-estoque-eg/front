import {
  ProdutoValidator,
  produto_schema_validator,
} from "@/common/validator/produto/produto-validator";
import { useApi } from "@/lib/axios/api";
import { useQuery } from "@tanstack/react-query";

export const useTodosProdutos = () => {
  const { api } = useApi();

  const getTodosProdutos = async (): Promise<ProdutoValidator[]> => {
    const { data } = await api.get<ProdutoValidator[]>("/produto");

    const filter: ProdutoValidator[] = data.filter((produto) => {
      if (produto_schema_validator.safeParse(produto).success) {
        return produto;
      }
    });

    return filter;
  };

  const todosProdutos = useQuery({
    queryKey: ["todos-produtos"],
    queryFn: getTodosProdutos,
  });

  return { todosProdutos };
};
