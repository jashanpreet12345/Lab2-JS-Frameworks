// First Function: Print welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function: Convert units (e.g., Celsius to Fahrenheit)
function convertUnits(celsius) {
    return (celsius * 9/5) + 32; // Celsius to Fahrenheit conversion formula
}

// Third Function: Perform a math operation (e.g., factorial)
function performMathOperation(n) {
    if (n === 0) return 1;
    return n * performMathOperation(n - 1);
}

// Fourth Function: Check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Export the functions
module.exports = {
    printWelcomeMessage,
    convertUnits,
    performMathOperation,
    isPalindrome
};
