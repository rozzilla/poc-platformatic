import fastify from "fastify";
import { loggerPlugin } from "../logger";

const info = jest.fn();

const mockFastify = fastify();
mockFastify.log.info = info;

describe("logger", () => {
  describe("given the options", () => {
    it("should properly log it", async () => {
      await loggerPlugin(mockFastify, { customValue: 123 });
      expect(info).toHaveBeenCalledWith("A dumb log: 123");
    });
  });
});
