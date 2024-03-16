import { z } from "zod";

export const login_response_schema = z.object({
  token: z.string(),
});

export type Login_Response = z.infer<typeof login_response_schema>;
