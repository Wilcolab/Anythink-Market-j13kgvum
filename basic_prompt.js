/**
 * Takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase where the first word is lowercase and
 * subsequent words have their first letter capitalized with no separators.
 *
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the string
 *
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("convert-this-string") // returns "convertThisString"
 * toCamelCase("convert_this_string") // returns "convertThisString"
 */
function toCamelCase(str) {
    return str
        .split(/[\s\-_]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

module.exports = toCamelCase;