module.exports = {
	testEnvironment: "node",
	verbose: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	testMatch: ["**/test/**/*.test.js"],
	moduleDirectories: ["node_modules", "src"], // Useful for simplifying imports
};
