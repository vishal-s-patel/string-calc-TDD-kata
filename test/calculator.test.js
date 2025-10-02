const add = require("../src/calculator");

test("for an empty string it will return 0", () => {
  expect(add("")).toBe(0);
});

test("for a single number it will return the value", () => {
  expect(add("1")).toBe(1);
});

test("for two numbers it will return the sum", () => {
  expect(add("1,2")).toBe(3);
});

test("for multiple numbers it will return the sum", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("1\\n2,3 should return 6", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("//;\\n1;2 where the delimiter is ; should return 3.", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("for negative numbers it will throw an exception", () => {
  expect(() => {
    add("-1,2");
  }).toThrow("negatives not allowed -1");
});

test("for multiple negative numbers it will throw an exception", () => {
  expect(() => {
    add("-1,-2,3");
  }).toThrow("negatives not allowed -1,-2");
});

test("for adding number greater than 1000 it will ignore them", () => {
  expect(add("2,1001")).toBe(2);
});

test("delimiters can be of any length with the following format: //[*]{n}\\n", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test("allow multiple delimiters like this: //[delim1][delim2]\\n", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("make sure you can handle multiple delimiters with length longer than one char", () => {
  expect(add("//[*][%%]\n10*20%%30")).toBe(60);
});
