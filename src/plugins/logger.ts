import { FastifyPluginAsync } from "fastify";

type LoggerPluginOptions = {
  customValue: number;
};

export const loggerPlugin: FastifyPluginAsync<LoggerPluginOptions> = async (
  { log },
  { customValue }
) => log.info("A dumb log: " + customValue);
