// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string) {
    return string
        .replace("/[^\w]/g", "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");
}

module.exports = anagrams;

//First Solution
// function anagrams(stringA, stringB) {
//     const hashMapA = hashStringCharacters(stringA);
//     const hashMapB = hashStringCharacters(stringB);

//     //Character maps have different amount of keys
//     if (Object.keys(hashMapA).length !== Object.keys(hashMapA).length) return false;

//     for (let char in hashMapA) {
//         if (hashMapA[char] !== hashMapB[char]) return false;
//     }
//     return true;
// }

// function hashStringCharacters(string) {
//     let hashMap = {};
//     for (let char of string.replace("/[^\w]/g", "").toLowerCase()) {
//             hashMap[char] = hashMap[char] + 1 || 1;
//     }
//     return hashMap;
// }
