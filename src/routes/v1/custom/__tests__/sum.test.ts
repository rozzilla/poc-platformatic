import { buildServer } from "@platformatic/db";
import { request } from "undici";
import { mockConfigWithoutDB } from "../../../../../mocks/config";

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

describe("sum", () => {
  describe("given the sum REST endpoint", () => {
    it("should properly respond", async () => {
      const { statusCode, body } = await request(
        `${mockUrl}/v1/custom/sum/40/2`
      );
      expect(statusCode).toBe(200);

      const json = await body.json();
      expect(json).toEqual(42);
    });
  });

  describe("given the sum GraphQL endpoint", () => {
    it("should properly respond", async () => {
      const { statusCode, body } = await request(`${mockUrl}/graphql`, {
        body: JSON.stringify({
          query: "{ sum(num1:40, num2:2) }",
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      expect(statusCode).toBe(200);

      const json = await body.json();
      expect(json).toEqual({ data: { sum: 42 } });
    });
  });
});
