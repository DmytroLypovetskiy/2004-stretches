const { validPalindrome } = require("./palindrome");

describe("validPalindrome", () => {
  test("it should return true if the input is a valid palindrome", () => {
    expect(validPalindrome("abba")).toEqual(true);
    expect(validPalindrome("wow")).toEqual(true);
    expect(validPalindrome("a")).toEqual(true);
  });

  test("it should return false if the input is not a valid palindrome", () => {
    expect(validPalindrome("not a palindrome")).toEqual(false);
  });

  test("it should take strings or numbers", () => {
    const argOne = 123454321;
    const argTwo = "kayak";

    const resultOne = validPalindrome(argOne);
    const resultTwo = validPalindrome(argTwo);
    expect(resultOne).toEqual(true);
    expect(resultTwo).toEqual(true);
  });
});

describe("bonus", () => {
  test("it should return true even if the string includes non-alphanumeric numbers", () => {
    const palindromeStr = "A man, a plan, a canal, Panama!";
    expect(validPalindrome(palindromeStr)).toEqual(true);
  });
});
