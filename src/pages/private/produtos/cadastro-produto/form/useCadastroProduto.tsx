import { useForm } from "react-hook-form";
import { CriarProdutoForm, criar_produto_schema } from "./produto.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCadastrarProdutoForm = () => {
  const form = useForm<CriarProdutoForm>({
    resolver: zodResolver(criar_produto_schema),
  });

  return { form };
};
