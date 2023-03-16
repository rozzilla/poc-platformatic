import { FastifyInstance } from "fastify";
import { Type } from "@sinclair/typebox";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

export default async function (app: FastifyInstance) {
  app.withTypeProvider<TypeBoxTypeProvider>().get(
    "/test",
    {
      schema: {
        response: {
          200: Type.Object({ prop1: Type.String(), prop2: Type.Null() }),
        },
      },
    },
    () => ({ prop1: "test", prop2: null })
  );
}
