import { z } from "zod";

export const login_form_schema = z.object({
  email: z.string().email("Formato de e-mail inválido."),
  senha: z.string().min(6, "Senhas não devem ser menores que 6 dígitos."),
});

export type LoginForm = z.infer<typeof login_form_schema>;
