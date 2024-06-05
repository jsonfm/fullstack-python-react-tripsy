import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export type ILoginFormSchema = z.infer<typeof LoginFormSchema>;
