// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for(let i = 0; i < n; i++) {
        let numOfPounds = (i + 1) * 2 - 1;
        let numOfSpots = n * 2 - 1;
        console.log(" ".repeat((numOfSpots - numOfPounds) / 2) + "#".repeat(numOfPounds) + " ".repeat((numOfSpots - numOfPounds) / 2));
    }
}

pyramid(3);

module.exports = pyramid;
