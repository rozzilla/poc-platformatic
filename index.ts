import * as path from "path";
import { FastifyInstance } from "fastify";
import autoload from "@fastify/autoload";
import { loggerPlugin } from "./src/plugins/logger";
import { random } from "./src/hooks/random";

export default async (app: FastifyInstance) => {
  app.log.info("here we go!");
  app.addHook("preParsing", random);

  app.register(loggerPlugin, { customValue: 42 });
  app.register(autoload, { dir: path.join(__dirname, "./src/routes") });
};
