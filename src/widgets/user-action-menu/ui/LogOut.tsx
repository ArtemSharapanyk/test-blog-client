"use client";
import { Button } from "@/shared/ui/Button";
import React from "react";

import { signOut, useSession } from "next-auth/react";

export const LogOutButton = () => {
  const { update } = useSession();
  const onClick = async () => {
    await signOut();
    update();
  };

  return (
    <Button onClick={onClick} variant={"destructive"}>
      Log out
    </Button>
  );
};
