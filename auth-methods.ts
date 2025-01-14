import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { strapi } from "./src/shared/api/strapiInstance";
import { z } from "zod";
import { passwordScheme } from "./src/entities/auth/model/passwordScheme";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: passwordScheme })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        try {
          const user = await strapi.login({
            identifier: parsedCredentials.data.email,
            password: parsedCredentials.data.password,
          });

          console.log(user);
          return user;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      return { ...token, ...user };
    },
    session: ({ session, token }) => {
      session.user = token as never;
      return session;
    },
  },
});
