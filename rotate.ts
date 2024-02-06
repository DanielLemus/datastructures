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