/**
 * Converts a sentence to camelCase format
 * @param {string} str - The input string to convert
 * @returns {string} - The camelCase formatted string
 * @throws {Error} - If input is null or undefined
 */
function camelCase(str) {
    // Error handling for null or undefined
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Remove leading/trailing spaces
    str = str.trim();

    // Return empty string if input becomes empty after trimming
    if (str.length === 0) {
        return "";
    }

    // Split by spaces and filter out empty strings
    const words = str.split(/\s+/).filter(word => word.length > 0);

    // If only one word, return it as is (lowercased, with special chars/numbers removed)
    if (words.length === 1) {
        return words[0].toLowerCase().replace(/[^a-z0-9]/gi, "");
    }

    // Convert to camelCase: first word lowercase, rest capitalized
    return words
        .map((word, index) => {
            // Remove special characters but keep numbers
            const cleaned = word.replace(/[^a-z0-9]/gi, "");
            
            if (index === 0) {
                return cleaned.toLowerCase();
            }
            // Capitalize first letter of subsequent words
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
        })
        .join("");
}

// Example usage
console.log(camelCase(" hello world ")); // "helloWorld"
console.log(camelCase("hello")); // "hello"
console.log(camelCase("hello-world test")); // "helloWorldTest"
console.log(camelCase("hello world 123")); // "helloWorld123"

/**
 * Converts a sentence to dot.case format
 * @param {string} str - The input string to convert
 * @returns {string} - The dot.case formatted string
 * @throws {Error} - If input is null or undefined
 */
function dotCase(str) {
    // Error handling for null or undefined
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Remove leading/trailing spaces
    str = str.trim();

    // Return empty string if input becomes empty after trimming
    if (str.length === 0) {
        return "";
    }

    // Split by spaces and non-alphanumeric characters, filter empty strings
    const words = str.split(/[\s\-_\.]+/).filter(word => word.length > 0);

    // Join words with dots and convert to lowercase
    return words.join(".").toLowerCase();
}

// Example usage
console.log(dotCase(" hello world ")); // "hello.world"
console.log(dotCase("hello")); // "hello"
console.log(dotCase("hello-world test")); // "hello.world.test"
console.log(dotCase("hello_world 123")); // "hello.world.123"