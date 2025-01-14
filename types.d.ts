import {StrapiAuthenticationResponse} from "strapi-sdk-js"

declare module "next-auth" {
    interface User extends StrapiAuthenticationResponse {}
}