# Matrix Manipulation:

## Question: 

Given a 2D matrix, implement a function to rotate it 90 degrees clockwise.

## Solution

```typescript

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const rotatedMatrix = rotateMatrix(matrix);
console.log("Rotated Matrix:", rotatedMatrix);

function rotateMatrix(matrix: number[][]){

   //switch diagonal places (4,2) (7,3) (8,6), the main diagonal 1, 5, 9 remains the same
   for(let i: number = 0; i < matrix.length; i++){
      for(let j: number = i + 1; j < matrix.length; j++){
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }   
   }
   
   //Reverse each row
   for(let i: number = 0; i < matrix.length; i++){
      matrix[i].reverse()
   }

   return matrix

}

```

## Explanation:

* rotateMatrix: This function rotates a 2D matrix 90 degrees clockwise. It first transposes the matrix by swapping elements across the main diagonal and then reverses each row.