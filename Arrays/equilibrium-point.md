# Equilibrium Point of an Array

## Problem Statement

An equilibrium point in an array is a position such that the sum of elements before it is equal to the sum of elements after it. Write a function to find the equilibrium point of a given array, or return -1 if no equilibrium point exists.

## Input

An array of integers nums.

## Example Input:

```typescript
[1, 4, 6, 2, 1, 2];
```

## Output

The equilibrium point of the array, or -1 if no equilibrium point exists.

## Example Output:

```typescript
Equilibrium Point: 2
```

## Solution

```typescript
// Example usage:
const array = [1, 4, 6, 2, 1, 2];
const equilibriumPoint = findEquilibriumPoint(array);
console.log("Equilibrium point is:", equilibriumPoint);

function findEquilibriumPoint(nums: number[]): number {
  if (nums.length == 0) {
    return -1;
  }

  let totalSum: number = nums.reduce((acc, num) => acc + num, 0);
  let leftSum: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    totalSum -= nums[i];

    if (totalSum == leftSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
}
```

## About the code

This code defines a function findEquilibriumPoint that takes an array of integers nums as input and returns the equilibrium point of the array or -1 if no equilibrium point exists. The function iterates through the array once, calculating the total sum of all elements and updating the left sum iteratively. If at any point the left sum becomes equal to the total sum minus the current element, it returns the current index as the equilibrium point. If no equilibrium point is found after iterating through the array, the function returns -1.

Example usage is provided using the array [1, 4, 6, 2, 1, 2], and the equilibrium point is printed to the console.