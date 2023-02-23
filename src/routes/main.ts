import { FastifyInstance } from "fastify";

export default async (app: FastifyInstance) =>
  app.get("/main", {}, () => ({
    data: "More info on /documentation or /graphiql",
  }));
