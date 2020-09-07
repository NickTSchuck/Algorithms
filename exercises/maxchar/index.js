// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charCounts = {};
        maxKey = '';

    for(let char of str) {
        if(!charCounts[char]) {
            charCounts[char] = 0;
        }
        charCounts[char]++;
        if(maxKey == '' || charCounts[char] > charCounts[maxKey]){
            maxKey = char;
        }
    }

    return maxKey;
}

module.exports = maxChar;
