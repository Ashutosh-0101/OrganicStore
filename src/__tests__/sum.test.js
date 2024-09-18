import {sum} from "../utils/sum";

test("sum of two numbers", () => {
  const result = sum(2, 6);
  expect(result).toBe(8);
});
