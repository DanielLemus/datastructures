# Sliding Window Technique

The Sliding Window Technique involves efficiently solving problems with subarrays or sublists by maintaining a window of elements and sliding it through the array. This technique is particularly useful for problems that involve finding the maximum or minimum sum, average, or other properties of subarrays.

# Sliding Window Technique Question:

## Problem Statement:
You are given an array of integers and a fixed size k. Design a function to find the maximum sum of a subarray of size k. Implement this solution using the Sliding Window Technique to optimize the time complexity.

## Example:
Consider the array [4, 2, 1, 7, 8, 1, 2, 8, 1, 0] and a window size k = 3.

## Expected Result:

> Array: [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
 Window 1: [4, 2, 1] -> Sum: 7
 Window 2: [2, 1, 7] -> Sum: 10
 Window 3: [1, 7, 8] -> Sum: 16 (Maximum sum)
 Window 4: [7, 8, 1] -> Sum: 16
 Window 5: [8, 1, 2] -> Sum: 11
 Window 6: [1, 2, 8] -> Sum: 11
 Window 7: [2, 8, 1] -> Sum: 11
 Window 8: [8, 1, 0] -> Sum: 9
 Expected Result: 16 (Maximum sum of subarray with size 3)

## Explanation:

* Start with the first window [4, 2, 1] and calculate the sum.* 
* Slide the window by removing the first element and adding the next element, creating [2, 1, 7].
* Continue sliding the window through the array, updating the sum and finding the maximum sum.

## Optimization:

The Sliding Window Technique optimizes the solution by avoiding redundant calculations. Instead of recalculating the sum of the entire subarray at each step, it efficiently updates the sum by subtracting the element that leaves the window and adding the element that enters the window.

This approach results in a time complexity of O(n) where n is the size of the array, making it more efficient than naive approaches with higher time complexity.

# Solution

```typescript
function maxSubarraySum(nums: number[], k: number): number | null {
    const n = nums.length;
    
    // Check for invalid input
    if (n < k || k <= 0) {
        return null;
    }

    let windowSum = 0;

    // Calculate the initial sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window through the array
    for (let i = k; i < n; i++) {
        // Subtract the element that leaves the window
        windowSum -= nums[i - k];
        // Add the new element entering the window
        windowSum += nums[i];
        // Update the maximum sum
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage:
const array = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const windowSize = 3;

const result = maxSubarraySum(array, windowSize);
console.log(result); // Output: 16 (Maximum sum of subarray with size 3)

```

## In this code:

* maxSubarraySum is the main function that takes an array of integers nums and a fixed size k as parameters.

* The function calculates the maximum sum of a subarray with size k using the sliding window technique.

* It iterates through the array, maintaining a window of size k, and efficiently updates the sum by subtracting the element that leaves the window and adding the new element entering the window.

* The result is the maximum sum of any subarray with size k.

* Feel free to test this code with different arrays and window sizes! If you have any questions or if there's anything else I can help you with, let me know!