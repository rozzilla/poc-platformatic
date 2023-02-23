import { buildServer } from "@platformatic/db";
import { request } from "undici";
import { mockConfigWithoutDB } from "../../../mocks/config";

let server;
let mockUrl = "";

beforeAll(async () => {
  server = await buildServer(mockConfigWithoutDB);
  await server.listen();
  mockUrl = `http://${server.address}:${server.port}`;
});

afterAll(async () => {
  await server.stop();
});

describe("random", () => {
  describe("given whatever endpoint", () => {
    it("should return 200 in all the cases", async () => {
      const { statusCode } = await request(
        `http://${server.address}:${server.port}/main`
      );
      expect(statusCode).toBe(200);
    });

    it("should return 500 when 42 is passed", async () => {
      const { statusCode } = await request(
        `http://${server.address}:${server.port}/main`,
        { headers: { answer: "42" } }
      );
      expect(statusCode).toBe(500);
    });
  });
});
