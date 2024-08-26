const StringHelpers = require("../src/helpers/string-helpers");

describe("StringHelpers", () => {
	describe("isString", () => {
		it("should return true for valid strings", () => {
			expect(StringHelpers.isString("hello")).toBe(true);
		});

		it("should return false for non-string inputs", () => {
			expect(StringHelpers.isString(123)).toBe(false);
			expect(StringHelpers.isString({})).toBe(false);
			expect(StringHelpers.isString([])).toBe(false);
			expect(StringHelpers.isString(null)).toBe(false);
			expect(StringHelpers.isString(undefined)).toBe(false);
		});
	});

	describe("capitalize", () => {
		it("should capitalize the first letter of a string", () => {
			expect(StringHelpers.capitalize("hello")).toBe("Hello");
		});

		it("should throw a TypeError if input is not a string", () => {
			expect(() => {
				StringHelpers.capitalize(123);
			}).toThrowError(new TypeError("Input type must be a string"));
		});

		it("should throw an error with the correct message if input is not a string", () => {
			expect(() => {
				StringHelpers.capitalize({});
			}).toThrowError("Input type must be a string");
		});

		it("should return null if the input is an empty string", () => {
			expect(StringHelpers.capitalize("")).toBe("");
		});
	});
});
