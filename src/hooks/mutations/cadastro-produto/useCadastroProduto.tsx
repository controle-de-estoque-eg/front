import { ProdutoValidator } from "@/common/validator/produto/produto-validator";
import { useApi } from "@/lib/axios/api";
import { CriarProdutoForm } from "@/pages/private/produtos/cadastro-produto/form/produto.schema";

import { useMutation } from "@tanstack/react-query";

export const useCadastroProduto = () => {
  const { api } = useApi();

  const postProduto = async (
    produto: CriarProdutoForm
  ): Promise<ProdutoValidator> => {
    const { data } = await api.post<ProdutoValidator>("/produto", produto);

    return data;
  };

  const cadastroProduto = useMutation({
    mutationKey: ["cadastro-produto"],
    mutationFn: postProduto,
  });

  return { cadastroProduto };
};
