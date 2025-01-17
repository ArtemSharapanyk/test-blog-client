"use client";

import React, { useEffect } from "react";
import { LogOutButton } from "./LogOut";
import { useSession } from "next-auth/react";
import { useAsyncRequest } from "@/shared/hooks/useAsyncRequest";
import { AvatarWithFallback } from "@/entities/articles";
import { getMe, User } from "@/entities/users";

export const UserActionMenu = () => {
  const session = useSession();
  const { data, request } = useAsyncRequest<[], User>(getMe);
  const user = data as User;

  useEffect(() => {
    if (session.data) {
      request();
    }
  }, [request, session.status, session.data]);

  if (session.status === "loading") return <div>Loading</div>;

  if (session.status === "unauthenticated") return null;
  return (
    <div className="flex items-center">
      <AvatarWithFallback name={user?.username ?? ""} url={user?.avatar?.url} />
      <div className="ml-[10px]">
        <LogOutButton />
      </div>
    </div>
  );
};
