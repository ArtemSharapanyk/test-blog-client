import { strapi } from "@/shared/api/strapiInstance";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  username: string;
}

const login = async ({ email, password }: LoginFormData) =>
  strapi.login({ identifier: email, password });
const register = async ({ email, password, username }: RegisterFormData) =>
  strapi.register({ email, password, username });
const signOut = async () => strapi.logout();

export { login, register, signOut };
