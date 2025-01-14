import { safeEnv } from "./getSafeEnv"

export const getImageUrl = (url: string) => {
    if(safeEnv?.NEXT_PUBLIC_MODE === "dev") {
        return `${safeEnv?.NEXT_PUBLIC_STRAPI_API_URL}${url}`}

        return url;

}