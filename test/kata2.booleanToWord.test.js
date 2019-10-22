const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  test("returns No when false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
