/*
 * String Reversal
 * - String Functions
 * - Arrays
 * - Reverse Loops
 */

var s = "Ang kislap ng watawat mo'y tagumpay na nagniningning; ang bituin at araw niya, kailan pa ma'y di magdidilim";

/*
 * The function StringReverse takes in a string and creates a new string with the characters reversed
 * Input: String
 * Output: String
 */
function stringReverse(s) {
    //  a blank string to hold the new string
    var reversed_string = "";
    // get the length of s
    var size = s.length;

    // loop through s, starting at the end, and going backwards
    for (var i = size - 1; i >= 0; i--) {
        // append the current index value to reversed_string
        reversed_string = reversed_string + s[i];
    }
    return reversed_string;
}

// console.log(stringReverse(s));

try {
    console.assert(stringReverse("hello") == "olleh", "Should be 'olleh'");
    console.assert(stringReverse("juan") == "nauj", "Should be 'nauj'");
    console.assert(stringReverse("toto") == "otot", "Should be 'otot'");
} catch (e) {
    console.log(e.message);
}