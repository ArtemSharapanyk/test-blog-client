"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { useSession } from "next-auth/react";
import { strapi } from "@/shared/api/strapiInstance";

export const HandleClientTokenProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      strapi.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session.data?.user?.jwt}`;
    }

    if (session.status === "unauthenticated") {
      delete strapi.axios.defaults.headers.common["Authorization"];
    }
  }, [session.data?.user?.jwt, session.status]);

  return <>{children}</>;
};
