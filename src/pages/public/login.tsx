import { ThemeToggle } from "@/components/theme-toggle";
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
import { login_form_schema } from "@/forms/login-form/login.schema";
import { useLoginForm } from "@/forms/login-form/useLoginForm";
import { useLogin } from "@/hooks/mutations/login/useLogin";
import { useAuthStore } from "@/store/useAuthStore";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";

export function Login() {
  const user = useAuthStore((state) => state.user);
  const singin = useAuthStore((state) => state.singin);
  const { form } = useLoginForm();
  const { login } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate({ to: "/cadastrar-produto" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (user) return <Outlet />;

  function onSubmit(data: z.infer<typeof login_form_schema>) {
    login.mutate(data, {
      onSuccess: (resp) => {
        singin(resp.token);
      },
      onError: (err) => {
        console.log("[Err] => ", err);
      },
    });
  }

  return (
    <div className="h-full flex justify-center items-center">
      <div className="absolute top-10 right-10">
        <ThemeToggle />
      </div>

      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Seja Bem Vindo</CardTitle>
          <CardDescription>
            Faça login para acessar a aplicação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="exemplo@email.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Digite seu e-mail para acessar a aplicação.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="******" type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      Digite sua senha para acessar a aplicação.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  type="reset"
                  variant="outline"
                  onClick={() => {
                    form.reset();
                  }}
                >
                  limpar
                </Button>
                <Button type="submit">login</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
