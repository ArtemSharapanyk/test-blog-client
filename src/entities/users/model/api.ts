import { strapi } from "@/shared/api/strapiInstance";
import { User } from "./User";

export const getMe = async () =>
  strapi.request<User>("GET", "/users/me?populate=*");
