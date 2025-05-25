// 5:Sorting Algorithms with Bubble Sort

// Initialize an array of numbers to be sorted
let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Function to implement the Bubble Sort algorithm
function bubbleSort(arr) {
  // Flag to optimize the algorithm. If no swaps occur in a pass, the array is sorted.
  let swapped;
  // Outer loop iterates until no swaps are made in a pass
  do {
    swapped = false; // Reset the swap flag for each pass
    // Inner loop compares adjacent elements and swaps them if they are in the wrong order
    for (let i = 0; i < arr.length - 1; i++) {
      // Check if the current element is greater than the next element
      if (arr[i] > arr[i + 1]) {
        // Swap the elements using a temporary variable
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // Set the swap flag to true, indicating that a swap occurred
        swapped = true;
      }
    }
  // Continue looping as long as swaps are still being made
  } while (swapped);
}

// Sort the numbers array using the bubbleSort function
let sorted = bubbleSort(numbers);
// Log the sorted array to the console
console.log("Sorted array:", sorted);

https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/
https://www.geeksforgeeks.org/sorting-algorithms-in-javascript/
https://www.w3schools.com/dsa/dsa_algo_bubblesort.php