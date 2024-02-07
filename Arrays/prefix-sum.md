# Prefix Sum:

## Question: 

Design an algorithm to efficiently find the number of subarrays in an array whose sum is equal to a given target. Utilize the concept of prefix sum arrays to optimize the solution.

# Solution

```typescript
function countSubarraysWithSum(nums: number[], targetSum: number): number {
    const prefixSumMap: Map<number, number> = new Map();
    let prefixSum = 0;
    let count = 0;

    // Initialize the prefix sum with 0 to handle subarrays starting from the beginning
    prefixSumMap.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        // Update the prefix sum
        prefixSum += nums[i];

        // Check if there is a subarray with the given sum ending at the current index
        if (prefixSumMap.has(prefixSum - targetSum)) {
            count += prefixSumMap.get(prefixSum - targetSum) || 0;
        }

        // Update the prefix sum frequency map
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    }

    return count;
}

// Example usage:
const array = [3, 4, 7, 2, -3, 1, 4, 2];
const targetSum = 7;

const result = countSubarraysWithSum(array, targetSum);
console.log(result); // Output: 4 (Number of subarrays with sum equal to 7)


```

# In this code:


* countSubarraysWithSum is the main function that takes an array of integers nums and a target sum targetSum as parameters.
* The function uses the concept of prefix sum arrays to efficiently find the number of subarrays whose sum is equal to the given target.
* It maintains a prefix sum frequency map (prefixSumMap) to keep track of the frequency of prefix sums encountered during the traversal.
* The count of subarrays with the target sum is updated based on the frequency of the complement of the current prefix sum.