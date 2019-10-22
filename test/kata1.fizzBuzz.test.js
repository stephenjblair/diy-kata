const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  });

  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(36)).toBe("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(40)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {});
});
