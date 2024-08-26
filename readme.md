# JS Utility Methods Package

A collection of utility methods for strings and arrays. This package provides easy-to-use helper functions to simplify common operations in JavaScript.

## Features
- **String Utilities**: Helper functions for common string manipulations.
- **Array Utilities**: Functions to perform operations like removing duplicates, etc.

## Installation
You can install this package via npm:

```sh
npm install javascript-utils-lib
```

## Usage
To use this package, import the utility functions you need.

```JS
import { stringUtils, arrayUtils } from "javascript-utils-lib";

// String Utilities
console.log(stringUtils.capitalize("hello")); // Output: "Hello"

// Array Utilities
console.log(arrayUtils.removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]
```

## Functions
#### String Utilities
| Function               | Description                                                                                  | Example Usage                                    |
|------------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------|
| `capitalize(str)`      | Capitalizes the first letter of a string. Throws a `TypeError` if the input is not a string.  | `stringUtils.capitalize("hello")` returns `"Hello"` |

#### Array Utilities
| Function                   | Description                                                                          | Example Usage                                           |
|----------------------------|--------------------------------------------------------------------------------------|---------------------------------------------------------|
| `removeDuplicates(arr)`    | Removes duplicate elements from an array. Throws a `TypeError` if the input is not an array. | `arrayUtils.removeDuplicates([1, 2, 2, 3])` returns `[1, 2, 3]` |

