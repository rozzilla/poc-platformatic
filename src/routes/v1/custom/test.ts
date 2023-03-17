import { FastifyInstance } from "fastify";
import { Type } from "@sinclair/typebox";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

export default async function (app: FastifyInstance) {
  app.withTypeProvider<TypeBoxTypeProvider>().get(
    "/test",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              prop1: {
                type: "string",
              },
              prop2: {
                type: "null",
              },
            },
            required: ["prop1", "prop2"],
          },
        },
      },
    },
    () => ({ prop1: "test", prop2: null })
  );
}
