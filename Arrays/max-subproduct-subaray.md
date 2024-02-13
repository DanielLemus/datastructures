# Maximum Product Subarray

## Problem Statement

Given an integer array `nums`, find the contiguous subarray within the array that has the largest product of its elements.

## Input

An array of integers `nums`.

## Example Input:

```typescript
const array = [2, 3, -2, 4, -1];
```

## Output

The maximum product of a contiguous subarray within the input array.

## Example Output:

```typescript
Maximum Product Subarray: 48
```

## Solution

We can solve this problem efficiently using dynamic programming. We maintain two variables maxProduct and minProduct, which represent the maximum and minimum product of a subarray ending at the current element. We also keep track of the overall maximum product encountered so far (result).

For each element in the array, we update maxProduct and minProduct based on whether the current element is positive or negative. We then update the result with the maximum product encountered so far. By iterating through the array once, we can find the maximum product subarray.

```typescript
// Example usage:
const array = [2, 3, -2, 4, -1];
const maxProduct = maxProductSubarray(array);
console.log("Maximum Product Subarray:", maxProduct);

function maxProductSubarray(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // If the current element is negative, swap maxProduct and minProduct
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    console.log("max product " + maxProduct);
    console.log("min product " + minProduct);
    console.log("nums " + nums[i]);

    // Update maxProduct and minProduct for the current element
    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);

    // Update the result with the maximum product encountered so far
    result = Math.max(result, maxProduct);
  }

  return result;
}
```

## About the Code

The provided code implements the solution described above. It defines a function maxProductSubarray that takes an array of integers as input and returns the maximum product of a contiguous subarray within the array. The function efficiently handles both positive and negative numbers in the array and returns the correct result.

## Example usage:

```typescript
const array = [2, 3, -2, 4, -1];
const maxProduct = maxProductSubarray(array);
console.log("Maximum Product Subarray:", maxProduct); 
```