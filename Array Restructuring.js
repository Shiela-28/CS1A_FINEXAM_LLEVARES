// 3:Multi-Dimentional Array- Array Restructuring

// Initialize an array of names
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
// Initialize an array of ages
let subArray2 = [24, 65, 21, 5, 9];

// Initialize an empty multi-dimensional array
let multiDimensionalArray = [];
// Iterate through the names array
for (let i = 0; i < subArray1.length; i++) {
  // Push a new sub-array containing the name and age to the multi-dimensional array
  multiDimensionalArray.push([subArray1[i], subArray2[i]]);
}

// Log a message to the console
console.log("Restructured array:");
// Iterate through the multi-dimensional array and log each sub-array to the console
multiDimensionalArray.forEach(subArray => {
  console.log(subArray);
});

https://stackoverflow.com/questions/34496974/javascript-multi-dimension-array-initialization
https://www.scholarhat.com/tutorial/csharp/types-of-array-in-csharp
