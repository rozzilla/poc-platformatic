import { sum } from "../sum";

describe("sum", () => {
  describe("given 2 numbers", () => {
    it("returns the sum of them", () => {
      expect(sum({ num1: 10, num2: 32 })).toBe(42);
    });
  });
});
