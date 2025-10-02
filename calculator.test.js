const add = require("./calculator");

test("for an empty string it will return 0", () => {
  expect(add("")).toBe(0);
});

test("for a single number it will return the value", () => {
  expect(add("1")).toBe(1);
});

test("for two numbers it will return the sum", () => {
  expect(add("1,2")).toBe(3);
});
