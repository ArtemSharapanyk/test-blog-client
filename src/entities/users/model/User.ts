import { UsersPermissionsUser } from "@/shared/api/generated/schemas";

export interface User extends UsersPermissionsUser {
  avatar?: {
    url?: string;
  };
}
