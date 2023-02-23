import { FastifyInstance } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

/**
 * Creation of the JSON schema needed to validate the params passed to the route
 */
const schemaParams = Type.Object({
  num1: Type.Number(),
  num2: Type.Number(),
});

/**
 * We convert the JSON schema to the TypeScript type, in this case:
 * {
    num1: number;
    num2: number;
  }
 */
type Params = Static<typeof schemaParams>;

/**
 * Here we can pass the type previously created to our syncronous unit function
 */
const multiplication = ({ num1, num2 }: Params) => num1 * num2;

export default async function (app: FastifyInstance) {
  app.withTypeProvider<TypeBoxTypeProvider>().get(
    "/multiplication/:num1/:num2",
    { schema: { params: schemaParams } },
    /**
     * Since we leverage `withTypeProvider<TypeBoxTypeProvider>()`,
     * we no longer need to explicitly define the `params`.
     * The will be automatically inferred as:
     *  {
          num1: number;
          num2: number;
        }
     */
    ({ params }) => multiplication(params)
  );
}
