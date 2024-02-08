# Statement:

The objective of this solution is to determine the maximum number of times each word from a given array can be formed using the characters provided in a separate string. This is achieved by counting the occurrences of each character in the string and then comparing these counts with the characters required for each word. The result is the maximum number of times each word can be formed using the available characters.

# Description of Requirements:

## Input:

A string letters containing characters that will be used to form words.
An array words containing words whose occurrences need to be determined based on the characters in letters.

## Output:

For each word in the words array, the maximum number of times it can be formed using the characters in the letters string.

## Approach:

Build a Map containing the count of occurrences of each character in the letters string.
For each word in the words array:
Iterate over the characters in the word.
Check if the character exists in the Map. If not, the word cannot be formed; return 0.
If the character exists, update the minimum appearance count based on the count of the character in the Map.
Output the result for each word.

# Solution:

```typescript
let letters = "aabccdefghtt";
let words = ["cat", "hat", "man"];

function instancesOfWords(letters, words) {
    let charactersMap = new Map();

    for (let char of letters) {
        if (charactersMap.has(char)) {
            charactersMap.set(char, charactersMap.get(char) + 1);
        } else {
            charactersMap.set(char, 1);
        }
    }

    for (let word of words) {
        let minAppearanceCount = Infinity;

        for (let char of word) {
            if (!charactersMap.has(char)) {
                minAppearanceCount = 0;
                break;
            }
            minAppearanceCount = Math.min(minAppearanceCount, charactersMap.get(char));
        }

        console.log(word + " appears " + minAppearanceCount + " times");
    }
}

instancesOfWords(letters, words);

```

# Explanation:

* The function instancesOfWords takes letters and words as input parameters.
* It builds a Map (charactersMap) containing the count of occurrences of each character in the letters string.
* For each word in the words array, it iterates over its characters.
* It checks if each character exists in the charactersMap. If not, it sets the minAppearanceCount to 0.
* If the character exists, it updates the minAppearanceCount to be the minimum of its current value and the count of the character in the Map.
* Finally, it outputs the result for each word, indicating the maximum number of times each word can be formed using the characters in the letters string.