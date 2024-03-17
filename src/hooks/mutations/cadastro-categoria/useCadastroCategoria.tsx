import { CategoriaValidator } from "@/common/validator/categoria/categoria-validator";
import { useApi } from "@/lib/axios/api";
import { CriarCategoriaForm } from "@/pages/private/categorias/cadastro-categoria/form/categoria.schema";

import { useMutation } from "@tanstack/react-query";

export const useCadastroCategoria = () => {
  const { api } = useApi();

  const postCategoria = async (categoria: CriarCategoriaForm) => {
    const { data } = await api.post<CategoriaValidator>(
      "/categoria",
      categoria
    );

    return { data };
  };

  const cadastroProduto = useMutation({
    mutationKey: ["cadastro-produto"],
    mutationFn: postCategoria,
  });

  return { cadastroProduto };
};
