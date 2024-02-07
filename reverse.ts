const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = reverseArray([...originalArray]);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Original array should remain unchanged

//using two pointer technique
function reverseArray(arr: number[]){

   let start: number = 0
   let end: number = arr.length-1

   while(start < end){

     // Modify array indexes without loosing previous value
     [arr[start], arr[end]] =  [arr[end], arr[start]]
        
        start++
        end--
   }
            
   return arr;

}

function reverseArrayEasyWay(arr: number[]){

   let newArr: number[] = []

    for(let i: number = arr.length-1; i >= 0; i--){    
        newArr.push(arr[i])        
    }
   return newArr;

}