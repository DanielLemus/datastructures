# Two Pointers Technique

## The Two Pointers Technique involves using two pointers to efficiently solve problems in a sorted array. The typical scenario is where the two pointers start from both ends of the array and move towards each other until they meet or fulfill a specific condition.

# Problem Statement:

## You are given a sorted array of integers. Design a function to find a pair of elements in the array that sum up to a specific target. Implement this solution using the Two Pointers Technique to optimize the time complexity.


# Solution

```typescript

const sortedArray: number[] = [1, 3, 5, 7, 9, 11, 17];
const targetSum: number = 16;

const result = findPairWithSum(sortedArray, targetSum);
console.log(result); // Output: [5, 11]


function findPairWithSum(sortedArray: number[], targetSum: number){

   let start: number = 0
   let end: number = sortedArray.length - 1

   while(start < end){
       
        if(targetSum == sortedArray[start] + sortedArray[end])
        {
            return [sortedArray[start],  sortedArray[end]]
        }
        else if(targetSum > sortedArray[start] + sortedArray[end]){
            start++
        }
        else{
            end--
        }                
   }

   return null

}

```

# Explanation:

## * Initialize two pointers, leftPointer and rightPointer, at the start and end of the sorted array, respectively.
## * Calculate the sum of elements pointed to by both pointers.
## * If the sum is equal to the target, return the pair.
## *  If the sum is less than the target, move the leftPointer to the right.
## *  If the sum is greater than the target, move the rightPointer to the left.
## *  Repeat steps 2-5 until the pointers meet or no pair is found.

# Optimization:

## The Two Pointers Technique optimizes the solution by avoiding unnecessary iterations. Since the array is sorted, moving the pointers based on the current sum ensures that we explore the potential pairs efficiently.

## This approach has a time complexity of O(n) where n is the size of the array, making it more efficient than naive approaches with higher time complexity.