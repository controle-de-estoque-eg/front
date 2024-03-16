import { zodResolver } from "@hookform/resolvers/zod";
import { CategoriaForm, categoria_schema } from "./categoria.schema";
import { useForm } from "react-hook-form";

export const useCadastrarCategoriaForm = () => {
  const form = useForm<CategoriaForm>({
    resolver: zodResolver(categoria_schema),
  });

  return { form };
};
