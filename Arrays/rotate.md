# Question: Rotate an Array

You are given an array of integers and a positive integer k. Write a function to rotate the array to the right by k steps. Implement the function rotateArray with the following signature:

```typescript
function rotateArray(nums, k) {
    // Your code here
}
```

The function should modify the input array in-place and rotate it to the right by k steps.

# Example:

```typescript
Input: [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]
```

Please provide both the solution that uses extra space and the solution that doesn't use extra space.

This question assesses your ability to manipulate arrays, work with indices, and solve problems related to array rotation. Be prepared to discuss the time and space complexity of your solutions and any potential optimizations. Good luck with your interview!

# Solution

```typescript

let array: number[] = [1, 2, 3, 4, 5];

rotateArray(array, 2)

function rotateArray(arr: number[], k: number){

    let newArray: number[] = []

    arr.forEach((value: number, index: number, arr: number[]) => {

       /* let newIndex = index + 2

        if(newIndex > arr.length-1){

        let indexCal: number = newIndex -  arr.length
        newArray[indexCal] = value  
        }
        else{
           newArray[newIndex] = value     
        }*/
         let newIndex =  (index + k ) %  arr.length 
         newArray[newIndex] = value     
    })


console.log(newArray);

}

// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

```