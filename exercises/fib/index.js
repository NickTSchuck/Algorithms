// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//O(N) runtime complexity. Recursion with memoization
class fib {
    constructor() {
        this.cache = {};
    }

    calc(n) {
        if (n == 0 || n == 1) return n;
        if (this.cache[n]) return this.cache[n];
        let output = this.calc(n - 1) + this.calc(n - 2);
        this.cache[n] = output;
        return output;
    }
}

module.exports = fib;

//(2^N) runtime complexity
// function fib(n) {
//     if (n < 2) return n;
//     return fib(n - 1) + fib(n - 2);
// }

//O(n) runtime complexity
// function fib(n) {   
//     if (n == 0 || n == 1) return n;

//     let previousNumberBy2 = 0;
//         previousNumberBy1 = 1;
//     for (let i = 1; i < n; i++) {
//         let sum = previousNumberBy1 + previousNumberBy2;
//         previousNumberBy2 = previousNumberBy1;
//         previousNumberBy1 = sum;
//     }
//     return previousNumberBy1;
// }


