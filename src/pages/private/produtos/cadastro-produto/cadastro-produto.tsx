import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeftCircle } from "lucide-react";
import { useCadastrarProdutoForm } from "./form/useCadastroProduto";
import { useTodasCategorias } from "@/hooks/queries/useTodasCategorias";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCadastroProduto } from "@/hooks/mutations/cadastro-produto/useCadastroProduto";
import { CriarProdutoForm } from "./form/produto.schema";
import { toast } from "@/components/ui/use-toast";

export const CadastroProduto = () => {
  const navigate = useNavigate();
  const { form } = useCadastrarProdutoForm();
  const { todasCategorias } = useTodasCategorias();
  const { cadastroProduto } = useCadastroProduto();

  const submit = (data: CriarProdutoForm) => {
    cadastroProduto.mutate(data, {
      onSuccess: (resp) => {
        toast({
          title: "Produto criado com sucesso.",
          description: `${resp.nome}, ${resp.descricao}`,
        });
      },
      onError: (err) => {
        toast({
          title: "Erro co cadastrar produto.",
          description: `${err.message}`,
        });
      },
    });
  };

  return (
    <section className="flex justify-center">
      <Card className="w-6/12 p-4">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="link"
                size="icon"
                onClick={() => navigate({ to: "/" })}
              >
                <ArrowLeftCircle />
              </Button>
              Cadastre um novo Produto
            </div>
          </CardTitle>

          <CardDescription>
            Assim que o cadastro for concluído, o produto já estará disponível.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da categoria" {...field} />
                    </FormControl>
                    <FormDescription>
                      Adicone um Nome para esta categoria.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição *</FormLabel>
                    <FormControl>
                      <Input placeholder="Descrição do Produto" {...field} />
                    </FormControl>
                    <FormDescription>
                      Adicone uma Descrição para o produto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoria_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={`${field.value}`}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categroria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {todasCategorias.data?.map((categoria) => (
                          <SelectItem value={`${categoria.id}`}>
                            {categoria.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Categoria a qual o produto sera atribuido.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="codigo_de_barras"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Codigo de Barras *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Codigo de Barras do Produto"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Adicone um Codigo de Barras para o produto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="valor_custo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custo *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Custo do Produto"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Adicone um Valor de custo para o produto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="valor_venda"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custo de Venda *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Custo de Venda do Produto"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Adicone um Valor de Venda para o produto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between pt-4">
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => form.reset()}
                >
                  limpar
                </Button>
                <Button type="submit">cadastrar</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
