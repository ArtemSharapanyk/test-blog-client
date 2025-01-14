"use client";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Label } from "@/shared/ui/Label";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useAsyncRequest } from "@/shared/hooks/useAsyncRequest";
import { ErrorAlert } from "@/shared/ui/ErrorAlert";
import { useRouter } from "next/navigation";
import { ROUTES_PATHS } from "@/shared/config/routes";
import { loginFormScheme, LoginFormData } from "@/entities/auth";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginFormScheme) });
  const router = useRouter();

  const goBlog = () => {
    router.replace(ROUTES_PATHS.BLOG);
  };

  const { error, loading, request } = useAsyncRequest(signIn, goBlog);

  const onSubmit = (data: LoginFormData) => {
    request("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            error={errors.email?.message}
            {...register("email")}
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            error={errors.password?.message}
            {...register("password")}
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[20px] ">
        <Button disabled={loading} className="w-[90%]">
          Submit
        </Button>
      </div>

      {!!error && (
        <ErrorAlert className="mt-[10px]">
          Password or email is incorrect
        </ErrorAlert>
      )}
    </form>
  );
};
