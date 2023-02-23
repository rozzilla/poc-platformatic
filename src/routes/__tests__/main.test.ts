import { buildServer } from "@platformatic/db";
import { request } from "undici";
import { mockConfigWithoutDB } from "../../../mocks/config";

describe("main", () => {
  describe("given the /main", () => {
    it("should properly respond", async () => {
      const server = await buildServer(mockConfigWithoutDB);
      await server.listen();

      const { statusCode, body } = await request(
        `http://${server.address}:${server.port}/main`
      );
      expect(statusCode).toBe(200);

      const json = await body.json();
      expect(json).toEqual({
        data: "More info on /documentation or /graphiql",
      });

      await server.stop();
    });
  });
});
