// Import the functions from the second JavaScript file (utilities.js)
const { printWelcomeMessage, convertUnits, performMathOperation, isPalindrome } = require('./utilities');

// Call the functions
printWelcomeMessage('John', 'Doe');
console.log('Celsius to Fahrenheit: ', convertUnits(25));
console.log('Factorial of 5: ', performMathOperation(5));

const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "Hello, World!";
console.log(`Is "${testString1}" a palindrome? `, isPalindrome(testString1));
console.log(`Is "${testString2}" a palindrome? `, isPalindrome(testString2));
