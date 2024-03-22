import { ProdutoValidator } from "@/common/validator/produto/produto-validator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { useEditarProduto } from "@/forms/editar-produto/editar-produto";
import { EditarProdutoForm } from "@/forms/editar-produto/editar-produto.schema";
import { useEditarProdutoMutation } from "@/hooks/mutations/editar-produto/useEditarProduto";
import { useTodasCategorias } from "@/hooks/queries/useTodasCategorias";

export const EditarProduto = ({ ...props }: ProdutoValidator) => {
  const { form, reset } = useEditarProduto({ ...props });
  const { todasCategorias } = useTodasCategorias();
  const { editarProduto } = useEditarProdutoMutation();

  const submit = (data: EditarProdutoForm) => {
    console.log(data);
    editarProduto.mutate(data, {
      onSuccess: (resp) => {
        toast({
          title: "Produto atualizado com sucesso.",
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
      <Card className="w-10/12 p-4">
        <CardHeader>
          <CardTitle>Editar Produto</CardTitle>

          <CardDescription>
            Assim que a edição for concluído, o produto já estará disponível.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
              <FormField
                name="nome"
                control={form.control}
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
                name="descricao"
                control={form.control}
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
                name="categoria_id"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        todasCategorias.data?.find(
                          (categoria) => categoria.id === field.value
                        )?.nome
                      }
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
                name="codigo_de_barras"
                control={form.control}
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
                name="valor_custo"
                control={form.control}
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
                name="valor_venda"
                control={form.control}
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

              <FormField
                name="quantidade_estoque"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantidade em Estoque *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        step={1}
                        placeholder="Quantidade em Estoque"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Quantidade disponivel em Estoque.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="disponivel"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Disponivel</FormLabel>
                      <FormDescription>
                        Produto disponivel para venda.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-between pt-4">
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => reset()}
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
