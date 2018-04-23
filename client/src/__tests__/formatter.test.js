import { validateString, secondsToHHMMSS } from "../app/components/Formatter";

// validate string
test("validateString lowercase", () => {
  expect(validateString("hello")).toBe(true);
});

test("validateString upper and lower case", () => {
  expect(validateString("Hello")).toBe(true);
});

test("validateString upper lower case and digits", () => {
  expect(validateString("Hello123")).toBe(true);
});

test("sql injection", () => {
  expect(validateString(";-drop table projects")).toBe(false);
});

// format timer
test("0 seconds", () => {
  expect(secondsToHHMMSS(0)).toBe("0h 0m 0s");
});

test("10 seconds", () => {
  expect(secondsToHHMMSS(10)).toBe("0h 0m 10s");
});

test("100 seconds", () => {
  expect(secondsToHHMMSS(100)).toBe("0h 1m 40s");
});

test("1000 seconds", () => {
  expect(secondsToHHMMSS(1000)).toBe("0h 16m 40s");
});

test("10000 seconds", () => {
  expect(secondsToHHMMSS(10000)).toBe("2h 46m 40s");
});
