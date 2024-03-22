import { useApi } from "@/lib/axios/api";
import { ProdutoValidator } from "@/common/validator/produto/produto-validator";
import { EditarProdutoForm } from "@/forms/editar-produto/editar-produto.schema";
import { useMutation } from "@tanstack/react-query";

export const useEditarProdutoMutation = () => {
  const { api } = useApi();

  const putProduto = async (
    produto: EditarProdutoForm
  ): Promise<ProdutoValidator> => {
    const { data } = await api.put<ProdutoValidator>(`/produto/${produto.id}`);

    return data;
  };

  const editarProduto = useMutation({
    mutationKey: ["editar-produto"],
    mutationFn: putProduto,
  });

  return { editarProduto };
};
