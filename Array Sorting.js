// 2:Single Dimentional Array Operations - Array Sorting

// Initialize an array of numbers
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
// Initialize an array of names
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Concatenate the numbers and names arrays
let combinedArray = numbers.concat(names);
// Log the combined array to the console
console.log("Combined array:", combinedArray);

// Sort the numbers array in descending order
numbers.sort((a, b) => b - a); 
// Log the sorted numbers array to the console
console.log("Sorted numbers (descending):", numbers);

// Sort the names array alphabetically
names.sort(); 
// Log the sorted names array to the console
console.log("Sorted names (ascending):", names);

https://stackoverflow.com/questions/70815672/how-to-sort-2-dimensional-array-matrix-in-javascript
https://www.shecodes.io/athena/42896-how-to-sort-a-javascript-array