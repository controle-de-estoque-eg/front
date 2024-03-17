import { zodResolver } from "@hookform/resolvers/zod";
import { CriarCategoriaForm, criar_categoria_schema } from "./categoria.schema";
import { useForm } from "react-hook-form";

export const useCadastrarCategoriaForm = () => {
  const form = useForm<CriarCategoriaForm>({
    resolver: zodResolver(criar_categoria_schema),
  });

  return { form };
};
