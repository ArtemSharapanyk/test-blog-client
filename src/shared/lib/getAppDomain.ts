import { safeEnv } from "./getSafeEnv";

export const getAppDomain = () => {
  return safeEnv?.NEXT_PUBLIC_DOMAIN;
};
