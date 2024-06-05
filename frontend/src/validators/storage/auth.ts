import { z } from "zod";

export const AuthTokensSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});

export type IAuthTokensSchema = z.infer<typeof AuthTokensSchema>;
