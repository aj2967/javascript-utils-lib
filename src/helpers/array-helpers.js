/**
 * A collection of array helper functions.
 */
class ArrayHelpers {
	/**
	 * Removes duplicates from an array.
     * 
	 * @param {Array} arr - The array to remove duplicates from.
	 * @returns {Array} - The array with duplicates removed.
	 * @throws {TypeError} - Catch errors
	 */
	static removeDuplicates(arr) {
		if (!Array.isArray(arr)) {
			throw new TypeError("Expected an array");
		}
		
		return [...new Set(arr)];
	}
}

module.exports = ArrayHelpers;
