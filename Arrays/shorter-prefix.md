# Statement:

This example demonstrates a function that determines the shortest common prefix among a list of words.

## Explanation:

The determinePrefix function takes an array of strings as input and iterates through each word in the array. It initializes the prefix variable with the first word in the array. For each subsequent word, it calls the getPrefix function to find the common prefix between the current prefix and the word. The getPrefix function iterates through the characters of both the prefix and the word, building a new prefix character by character until it encounters a mismatch. It returns the new prefix, which is then assigned back to the prefix variable. After iterating through all words, the final value of the prefix variable represents the shortest common prefix among the words.

## Sample Input:

```typescript
let strs: string[] = ["flowrida", "flowers", "flow", "flowless"];
```

## Sample Output:

```typescript
"flow";
```

# Solution:

```typescript
let strs: string[] = ["flowrida", "flowers", "flow", "flowless"]

determinePrefix(strs)

function determinePrefix(strs: string[]){

   let prefix: string = strs[0]

   for(let word of strs){
         prefix = getPrefix(prefix, word)
   }
   console.log(prefix)
}

function getPrefix(prefix: string, word: string): string {

   let newPrefix: string = ""

   let minLenght: number = Math.min(prefix.length, word.length)

   for(let i: number = 0; i < minLenght; i++){
      if(prefix[i] != word[i]){
         break
      }

      newPrefix += prefix[i]
   }

   return newPrefix

}
```

# About the Code:

* The code defines a determinePrefix function and a getPrefix function to find the shortest common prefix among a list of words.
* The determinePrefix function iterates through each word in the array, updating the common prefix using the getPrefix function.
* The getPrefix function compares characters of the current prefix and the word, building a new prefix until it encounters a mismatch.
* The final result is the shortest common prefix among the words.