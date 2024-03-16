import { z } from "zod";

export const auth_user_schema = z.object({
  id: z.number(),
  nome: z.string(),
  email: z.string(),
  roles: z.string(),
});

export type User = z.infer<typeof auth_user_schema>;
