import { onRequestAsyncHookHandler } from "fastify";

export const random: onRequestAsyncHookHandler = async (
  { log, headers: { answer } },
  response
) => {
  log.info("random hook is executed");

  if (answer === "42") {
    response.status(500);
    response.send({ result: "you can't use it!" });
  }
};
