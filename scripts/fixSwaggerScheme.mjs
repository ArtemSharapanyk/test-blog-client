/* eslint-disable no-shadow */
import fs from "fs";
import path from "path";

const fixSwaggerSchema = () => {
  const schemaPath = path.join(
    "..",
    "src",
    "shared",
    "api",
    "openapi",
    "api.json"
  );

  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

  Object.entries(schema.paths).forEach(([routePath, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
      if (routePath.includes("{id}")) {
        details.parameters = details.parameters || [];

        const hasIdParam = details.parameters.some(
          (param) => param.name === "id" && param.in === "path"
        );

        if (!hasIdParam) {
          details.parameters.push({
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          });
        }
      }
    });
  });

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
};

fixSwaggerSchema();
