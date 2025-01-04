# TypeScript Bug: Passing Array to Function Expecting String

This example demonstrates a common error in TypeScript: passing an array to a function that expects a string argument.  The code attempts to use the `greeter` function with an array, resulting in a type error.

The solution involves either modifying the `greeter` function to accept an array or modifying the way the array is used to call the function. 

## How to Reproduce

1. Copy the code in `bug.ts`.
2. Compile and run the code using a TypeScript compiler (e.g., `tsc bug.ts` and then `node bug.js`).
3. Observe the resulting type error.

## Solution

The solution is provided in `bugSolution.ts`, demonstrating the correct approach.