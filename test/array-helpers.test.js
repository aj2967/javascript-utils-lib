const ArrayHelpers = require("../src/helpers/array-helpers");

describe('ArrayHelpers', () => {
    describe('removeDuplicates', () => {
        it('should throw a TypeError if input is not an array', () => {
            expect(() => {
                ArrayHelpers.removeDuplicates('not an array');
            }).toThrow(TypeError);
        });

        it('should throw an error with the correct message if input is not an array', () => {
            expect(() => {
                ArrayHelpers.removeDuplicates('not an array');
            }).toThrowError(new TypeError('Expected an array'));
        });

        it('should return an array with duplicates removed if input is a valid array', () => {
            expect(ArrayHelpers.removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
        });
    })
});