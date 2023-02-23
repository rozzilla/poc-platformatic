import { buildServer } from "@platformatic/db";
import { request } from "undici";
import { mockConfigWithoutDB } from "../../../mocks/config";

describe("healthcheck", () => {
  describe("given the /healthcheck", () => {
    it("should properly respond", async () => {
      const server = await buildServer(mockConfigWithoutDB);
      await server.listen();

      const { statusCode, body } = await request(
        `http://${server.address}:${server.port}/healthcheck`
      );
      expect(statusCode).toBe(200);

      const json = await body.json();
      expect(json).toEqual({ status: "ok" });

      await server.stop();
    });
  });
});
