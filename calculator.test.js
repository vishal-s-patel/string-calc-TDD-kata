const add = require("./calculator");

test("for an empty string it will return 0", () => {
  expect(add("")).toBe(0);
});
