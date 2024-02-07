
# Question: Implement a Sorting Algorithm


Implement a sorting algorithm to sort an array of integers in ascending order. You can choose any sorting algorithm you are comfortable with, such as bubble sort, insertion sort, selection sort, or merge sort. However, it's recommended to use a more efficient algorithm like merge sort or quicksort.

Provide the implementation of the sorting algorithm as a function:

Ensure that your function sorts the input array nums in-place (modifies the original array) and returns the sorted array.

Include a brief explanation of the time complexity of your sorting algorithm and any key points about its performance.

# Example:

```typescript
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = sortArray(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8]

```

This question tests your understanding of sorting algorithms, their implementation, and their time complexity. Be ready to discuss the trade-offs between different sorting algorithms and their suitability for different scenarios. Good luck with your interview preparation!

# Solution 

```typescript

const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8]

function mergeSort(arr: number[]){

    if (arr.length <= 1) {
        return arr; // Already sorted if the array has 1 or 0 elements
    }
    
    const half : number = Math.floor(arr.length / 2)
    const leftArray: number[] = arr.slice(0, half)
    const rightArray: number[] = arr.slice(half)

    const leftSorted: number[]  = mergeSort(leftArray);
    const rightSorted: number[]  = mergeSort(rightArray);
        
    return merge(leftSorted, rightSorted)

}

function merge(leftArray: number[], rightArray: number[]){

    let sortedArray : number[] = [];
    let rightIndex: number = 0
    let leftIndex : number = 0
 
   while(leftIndex < leftArray.length && rightIndex < rightArray.length ){
    
    if(leftArray[leftIndex] < rightArray[rightIndex]){
        sortedArray.push(leftArray[leftIndex])
        leftIndex++
        }
        else{
        sortedArray.push(rightArray[rightIndex])
        rightIndex++
     }

   }    

  return sortedArray.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));

}
```