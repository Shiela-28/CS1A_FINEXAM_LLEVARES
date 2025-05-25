// 4:Grocery Items with Stacks

// Initialize an empty array to represent the grocery stack
let groceryStack = [];

// Function to peek at the top item of the stack
function peek() {
  // Check if the stack is empty
  if (groceryStack.length === 0) {
    // Return a message indicating that the stack is empty
    return "Stack is empty";
  }
  // Return the top item of the stack
  return groceryStack[groceryStack.length - 1];
}

// Function to push an item onto the stack
function push(item) {
  // Push the item onto the stack
  groceryStack.push(item);
  // Log the stack to the console after the push operation
  console.log("Stack after push:", groceryStack);
}

// Function to pop an item from the stack
function pop() {
  // Check if the stack is empty
  if (groceryStack.length === 0) {
    // Log a message to the console indicating that the stack is empty
    console.log("Stack is empty");
    // Return without popping any item
    return;
  }
  // Pop the top item from the stack
  let item = groceryStack.pop();
  // Log the stack to the console after the pop operation
  console.log("Stack after pop:", groceryStack);
  // Return the popped item
  return item;
}

// Prompt the user to enter 5 grocery items
for (let i = 0; i < 5; i++) {
  let item = prompt("Enter a grocery item:");
  // Push each item onto the stack
  push(item);
}

// Log the top item of the stack to the console
console.log("Top item:", peek());
// Pop the top item from the stack
pop();

https://discuss.codecademy.com/t/groceries-function-from-js-practice-arrays-loops-objects-iterators/639851/12
https://docs.vultr.com/javascript/examples/implement-a-stack
https://discuss.codecademy.com/t/javascript-practice-arrays-loops-objects-iterators-groceries-exercise-efficiency/810048/4

