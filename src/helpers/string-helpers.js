/**
* A collection of string helper functions.
 */
class StringHelpers {
	/**
	 * Check if the given input is a string.
	 * 
	 * @param {any} str
	 * @returns {boolean}
	 */
	static isString(str) {
		return typeof str === 'string';
	}

	/**
	 * Capitalize the first letter of a string.
	 * 
	 * @param {string} str
	 * @returns {string|null}
	 * @throws {TypeError}
	 */
	static capitalize(str) {
		if (!this.isString(str)) throw new TypeError('Input type must be a string');
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}

module.exports = StringHelpers;
