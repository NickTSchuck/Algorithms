// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {   
    const original_n = n;
    let rev = 0, 
        digit;

    n = Math.abs(n)
    while(n > 0) {
        digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.trunc(n / 10);
    }
    return rev * Math.sign(original_n);
}


//First Solution
// function reverseInt(n) {
//     return parseInt(n
//         .toString()
//         .split("")
//         .reverse()
//         .join("")) 
//         * Math.sign(n);
// }

module.exports = reverseInt;
