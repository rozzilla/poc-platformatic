import { FastifyInstance } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { sum } from "../../../utils/sum";

const schemaParams = Type.Object({
  num1: Type.Number(),
  num2: Type.Number(),
});

type Params = Static<typeof schemaParams>;

export default async function (app: FastifyInstance) {
  app.graphql.extendSchema(`
    extend type Query {
      sum(num1: Int!, num2: Int!): Int!
    }
  `);

  app.graphql.defineResolvers({
    Query: { sum: (_, data: Params) => sum(data) },
  });

  app
    .withTypeProvider<TypeBoxTypeProvider>()
    .get(
      "/sum/:num1/:num2",
      { schema: { params: schemaParams } },
      ({ params }) => sum(params)
    );
}
