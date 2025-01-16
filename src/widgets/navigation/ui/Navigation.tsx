"use client";
import { Route, ROUTES_PATHS } from "@/shared/config/routes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

interface Link extends Route {
  name: "Blog" | "Sign in" | "Sign up" | "Drafts articles";
  hideInAuth?: boolean;
  roleProtected?:  "authinticated";
}

const links: Link[] = [
  {
    path: ROUTES_PATHS.BLOG,
    name: "Blog",
  },
  {
    path: ROUTES_PATHS.SIGN_IN,
    name: "Sign in",
    hideInAuth: true,
  },
  {
    path: ROUTES_PATHS.SIGN_UP,
    name: "Sign up",
    hideInAuth: true,
  },
  {
    path: ROUTES_PATHS.DRAFT_ARTICLES,
    name: "Drafts articles",
    roleProtected: "authinticated",
  },
];

export const Navigation: FC<PropsWithChildren> = ({ children }) => {
  const path = usePathname();
  const { data } = useSession();

  return (
    <header className=" bg-black py-[20px]">
      <nav className="wrapper mobile xs:hidden md:flex items-center justify-between">
        {data ? <div>{children}</div> : <h2>Blog app</h2>}

        <ul className="flex items-center">
          {links.map((link) => {
            if (link.hideInAuth && data?.user) return null;
            if(link.roleProtected === "authinticated" && !data?.user) return null

            return (
              <li className={`ml-[30px]`} key={link.path}>
                <Link
                  className={`${
                    path === link.path ? "text-yellow-400" : "text-white"
                  }`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="wrapper mobile xs:text-[12px]  md:hidden xs:block">
        <div className="mb-[20px]">
          {data ? <div>{children}</div> : <h2>Blog app</h2>}
        </div>

        <ul className="flex">
          {links.map((link, index) => {
            if (link.hideInAuth && data?.user) return null;
            if(link.roleProtected === "authinticated" && !data?.user) return null

            return (
              <li
                className={`${index === 0 ? "" : "ml-[30px]"}`}
                key={link.path}
              >
                <Link
                  className={`${
                    path === link.path ? "text-yellow-400" : "text-white"
                  }`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
