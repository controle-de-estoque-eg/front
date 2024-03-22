import { ProdutoValidator } from "@/common/validator/produto/produto-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  EditarProdutoForm,
  editar_produto_schema,
} from "./editar-produto.schema";

export const useEditarProduto = ({ ...props }: ProdutoValidator) => {
  const form = useForm<EditarProdutoForm>({
    resolver: zodResolver(editar_produto_schema),
  });

  useEffect(() => {
    form.setValue("id", props.id);
    form.setValue("nome", props.nome);
    form.setValue("descricao", props.descricao);
    form.setValue("categoria_id", props.categoria_id);
    form.setValue("codigo_de_barras", props.codigo_de_barras);
    form.setValue("valor_custo", props.valor_custo);
    form.setValue("valor_venda", props.valor_venda);

    form.setValue("quantidade_estoque", props.quantidade_estoque);
    form.setValue("disponivel", props.disponivel);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const reset = () => {
    form.setValue("id", props.id);
    form.setValue("nome", props.nome);
    form.setValue("descricao", props.descricao);
    form.setValue("categoria_id", props.categoria_id);
    form.setValue("valor_custo", props.valor_custo);
    form.setValue("valor_venda", props.valor_venda);
    form.setValue("quantidade_estoque", props.quantidade_estoque);
    form.setValue("codigo_de_barras", props.codigo_de_barras);
    form.setValue("disponivel", props.disponivel);
  };

  return { form, reset };
};
