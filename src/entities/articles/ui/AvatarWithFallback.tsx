import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/Avatar";
import React, { FC } from "react";
import { getAvatarIntials } from "../libs/getAvatarInitials";

interface AvatarWithFallbackProps {
  url?: string | undefined;
  name: string;
}
export const AvatarWithFallback: FC<AvatarWithFallbackProps> = ({
  url,
  name,
}) => {
  return (
    <Avatar
      itemProp="author"
      itemScope
      itemType="https://schema.org/Person"
      className="text-white font-bold "
    >
      {url ? (
        <>
          <AvatarImage
            className="w-[50px]"
            src={`${url}`}
            alt="User avatar"
          />
          <AvatarFallback itemProp="name" className="w-[50px] bg-slate-500">
            {getAvatarIntials(name || "N")}
          </AvatarFallback>
        </>
      ) : (
        <AvatarFallback itemProp="name" className="w-[50px] bg-slate-500">
          {getAvatarIntials(name || "N")}
        </AvatarFallback>
      )}
    </Avatar>
  );
};
