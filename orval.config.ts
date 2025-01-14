import { defineConfig } from "orval";

export default defineConfig({
  dev: {
    input: "./src/shared/api/openapi/api.json",
    output: {
      prettier: true,
      client: "axios",
      target: "./src/shared/api/generated",
      schemas: "./src/shared/api/generated/schemas",
      mode: "tags",
    },
  },
});
