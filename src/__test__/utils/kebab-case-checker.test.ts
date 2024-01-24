import { isKebabCase } from "../../utils";

describe("Given isKebabCase", () => {
  test.each([
    {
      checkThis: "asdf",
      expected: true,
    },
    {
      checkThis: "asdf-asdf",
      expected: true,
    },
    {
      checkThis: "Asdf",
      expected: false,
    },
    {
      checkThis: "123asdf",
      expected: false,
    },
    {
      checkThis: "!asdf",
      expected: false,
    },
    {
      checkThis: "asdfa_asdf",
      expected: false,
    },
    {
      checkThis: "-asdf",
      expected: false,
    },
    {
      checkThis: "asdf-",
      expected: false,
    },
  ])("When passed $checkThis, $expected is returned", ({ checkThis, expected }) => {
    const value = isKebabCase(checkThis);
    expect(value).toBe(expected);
  });
});
