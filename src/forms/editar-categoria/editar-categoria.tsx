import { CategoriaValidator } from "@/common/validator/categoria/categoria-validator";
import { useForm } from "react-hook-form";
import {
  EditarCategoriaForm,
  editar_categoria_schema,
} from "./editar-categoria.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export const useEditarCategoria = ({ ...props }: CategoriaValidator) => {
  const form = useForm<EditarCategoriaForm>({
    resolver: zodResolver(editar_categoria_schema),
  });

  useEffect(() => {
    form.setValue("id", props.id);
    form.setValue("nome", props.nome);
    form.setValue("descricao", props.descricao);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const reset = () => {
    form.setValue("id", props.id);
    form.setValue("nome", props.nome);
    form.setValue("descricao", props.descricao);
  };

  return { form, reset };
};
