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
import { useCadastrarCategoriaForm } from "./form/useCadastrarCategoriaForm";
import { CriarCategoriaForm } from "./form/categoria.schema";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeftCircle } from "lucide-react";
import { useCadastroCategoria } from "@/hooks/mutations/cadastro-categoria/useCadastroCategoria";

export const CadastroCategoria = () => {
  const { form } = useCadastrarCategoriaForm();
  const { cadastroProduto } = useCadastroCategoria();
  const { toast } = useToast();
  const navigate = useNavigate();

  const submit = (data: CriarCategoriaForm) => {
    cadastroProduto.mutate(data, {
      onSuccess: (resp) => {
        toast({
          title: "Categoria criada com sucesso.",
          description: `${resp.data.nome}, ${resp.data.descricao}`,
        });
      },
      onError: (err) => {
        toast({
          title: "Erro co cadastrar categoria.",
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
              Cadastre uma nova Categoria
            </div>
          </CardTitle>

          <CardDescription>
            Assim que o cadastro for concluído, a categoria já estará
            disponível.
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
                      <Input placeholder="Descrição da categoria" {...field} />
                    </FormControl>
                    <FormDescription>
                      Adicone um Descrição para esta categoria.
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
