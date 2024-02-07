# Question: Reverse an Array

## Write a TypeScript function reverseArray that takes an array of elements and returns a new array with the elements reversed. The function should have the following signature:

```javascript
function reverseArray<T>(arr: T[]): T[] {
    // Your code here
}
```

## The function should not modify the original array and should return a new array with the reversed elements.

# Example:

```javascript
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Original array should remain unchanged
```

## Ensure that your solution works for arrays of different data types, not just numbers. Be prepared to discuss the time and space complexity of your solution during the interview. Good luck!