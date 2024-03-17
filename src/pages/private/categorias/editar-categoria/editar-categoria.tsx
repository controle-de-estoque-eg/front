import { CategoriaValidator } from "@/common/validator/categoria/categoria-validator";
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
// import { useToast } from "@/components/ui/use-toast";
import { useEditarCategoria } from "@/forms/editar-categoria/editar-categoria";
import { EditarCategoriaForm } from "@/forms/editar-categoria/editar-categoria.schema";

export const EditarCategoria = ({ ...props }: CategoriaValidator) => {
  const { form, reset } = useEditarCategoria(props);
  // const { toast } = useToast();

  const submit = (data: EditarCategoriaForm) => {
    console.log("[Form] => ", data);
  };

  return (
    <div className="flex justify-center">
      <Card className="w-6/12 p-4">
        <CardHeader>
          <CardTitle>Editar Categoria</CardTitle>

          <CardDescription>
            Assim que a edição for concluído, a categoria já estará disponível.
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
                    <FormDescription>Nome da categoria.</FormDescription>
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
                    <FormDescription>Descrição da categoria.</FormDescription>
                    <FormMessage />
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
    </div>
  );
};
