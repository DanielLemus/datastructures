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