// 1:String Array Operations- Palindrome

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string
  const reversedStr = str.split("").reverse().join("");
  // Check if the original string is equal to the reversed string
  return str === reversedStr;
}

// Prompt the user to enter the first word
let word1 = prompt("Enter the first word:");
// Prompt the user to enter the second word
let word2 = prompt("Enter the second word:");

// Log the original and reversed first word to the console
console.log("Original word 1:", word1);
console.log("Reversed word 1:", word1.split("").reverse().join(""));
// Log whether the first word is a palindrome to the console
console.log("Is word 1 a palindrome?", isPalindrome(word1));

// Log the original and reversed second word to the console
console.log("Original word 2:", word2);
console.log("Reversed word 2:", word2.split("").reverse().join(""));
// Log whether the second word is a palindrome to the console
console.log("Is word 2 a palindrome?", isPalindrome(word2));

https://www.geeksforgeeks.org/palindrome-in-javascript/
https://www.programiz.com/javascript/examples/palindrome
https://www.wscubetech.com/resources/javascript/programs/palindrome
