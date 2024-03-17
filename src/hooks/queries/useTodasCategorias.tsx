import {
  CategoriaValidator,
  categoria_schema_validator,
} from "@/common/validator/categoria/categoria-validator";
import { useApi } from "@/lib/axios/api";
import { useQuery } from "@tanstack/react-query";

export const useTodasCategorias = () => {
  const { api } = useApi();

  const getTodasCategorias = async (): Promise<CategoriaValidator[]> => {
    const { data } = await api.get<CategoriaValidator[]>("/categoria");

    const filter: CategoriaValidator[] = data.filter(
      (categoria) => categoria_schema_validator.safeParse(categoria).success
    );

    return filter;
  };

  const todasCategorias = useQuery({
    queryKey: ["todas-categorias"],
    queryFn: getTodasCategorias,
  });

  return { todasCategorias };
};
