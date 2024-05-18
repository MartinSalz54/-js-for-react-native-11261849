// Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num ** 2; // Square even numbers
        } else {
            return num * 3; // Triple odd numbers
        }
    });
}

// Function to format an array of strings based on processed numbers
function formatArrayStrings(strings, processedNumbers) {
    if (strings.length !== processedNumbers.length) {
        throw new Error("The two arrays must have the same length");
    }

    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Export the functions for use in other modules
module.exports = {
    processArray,
    formatArrayStrings
};
