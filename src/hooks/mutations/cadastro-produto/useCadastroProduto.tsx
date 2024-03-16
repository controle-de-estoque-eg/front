import { CategoriaValidator } from "@/common/validator/categoria/categoria-validator";
import { useApi } from "@/lib/axios/api";
import { CategoriaForm } from "@/pages/private/categorias/CadastroCategoria/form/categoria.schema";
import { useMutation } from "@tanstack/react-query";

export const useCadastroProduto = () => {
  const { api } = useApi();

  const postCategoria = async (categoria: CategoriaForm) => {
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
