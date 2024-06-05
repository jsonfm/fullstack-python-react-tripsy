/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useAuth } from "@/context/auth";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

// zod
import { zodResolver } from "@hookform/resolvers/zod";

// types
import type { ILoginFormSchema } from "@/validators/forms/login/login";
import { LoginFormSchema } from "@/validators/forms/login/login";

// toast
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = async ({ email, password }: ILoginFormSchema) => {
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = (error?.response?.data?.error ||
        error?.message) as string;

      toast.error(message);
    }
    setLoading(false);
  };
  return (
    <div className="h-screen flex items-center justify-center container-md">
      <form
        onSubmit={handleSubmit(signIn)}
        className="min-w-[330px] max-w-[400px] flex flex-col gap-8"
      >
        <Link to="/" type="button" className="mb-0">
          <h2 className="text-2xl text-primary md:text-4xl text-center hover:font-bold hover:scale-105 duration-200">
            Tripsy
          </h2>
        </Link>
        <p className="text-gray-500 text-center -mt-6 mb-6">Wecolme</p>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="email"
              label="Email"
              placeholder="email@example.com"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type="password"
              label="Password"
              placeholder="*********"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              error={errors?.password?.message}
            />
          )}
        />

        <Button type="submit" className="mt-6" loading={loading}>
          Sign In
        </Button>
      </form>
    </div>
  );
};
