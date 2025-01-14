"use client";

import { Label } from "@/shared/ui/Label";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useAsyncRequest } from "@/shared/hooks/useAsyncRequest";
import { ErrorAlert } from "@/shared/ui/ErrorAlert";
import { useRouter } from "next/navigation";
import { ROUTES_PATHS } from "@/shared/config/routes";
import {
  registerFormScheme,
  RegisterFormData,
  register as signUp,
} from "@/entities/auth";

const signUpHendler = async (data: RegisterFormData) => {
  const userFromStripe = await signUp(data);
  await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  return userFromStripe;
};

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerFormScheme) });

  const goBlog = () => {
    router.replace(ROUTES_PATHS.BLOG);
  };

  const { error, loading, request } = useAsyncRequest(signUpHendler, goBlog);

  const onSubmit = async (data: RegisterFormData) => {
    await request(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="username">Username</Label>
          <Input
            error={errors.username?.message}
            {...register("username")}
            id="username"
            placeholder="Your username"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            error={errors.email?.message}
            {...register("email")}
            id="email"
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
          Password or email is incorrect or username is already taken
        </ErrorAlert>
      )}
    </form>
  );
};
