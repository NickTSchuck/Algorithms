// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split("", str.length / 2).every((char, index) => char === str[str.length - 1 - index]);
}


//First solution
// function palindrome(str) {
//     return str === str.reverse();
// }

// String.prototype.reverse = function() {
//     let reversed = "";
//     for (let char of this) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

module.exports = palindrome;
