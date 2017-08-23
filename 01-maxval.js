/*
 * Max Value of an array
 * - Variable Assignment
 * - Logical Comparisons
 * - Arrays
 * - Loops
 * - Conditionals
 */


var nums = [381, 430, 711, 512, 277, 130, 142, 767, 65, 230, 572, 59, 341, 566, 50, 981, 934, 736, 610, 597, 795, 846, 978, 834, 692, 622, 888, 208, 343, 700, -495, 72, 2, 169, 723, 488, 549, 85, 428, 567, 961, 187, 105, 25, 434, 954, 323, 619, 938, 536, 897, 972, 400, 296, 746, 818, 762, 615, 876, 470, 257, 159, 636, 192, 832, 149, 927, 694, 75, 269, 213, 712, 997, 627, 750, 665, 822, 672, 133, 677, 802, 461, 116, -757, 69, 372, 416, 118, 154, 386, 949, 713, 983, 161, 475, 329, 412, 270, 807, 861];

/*
 * The function MaxVal takes in one argument, set, which should be an array, and returns the largest value within set
 * Input: Array
 * Output: Varies
 */
function maxVal(set) {
    // get the size of the set
    var size = set.length;

    // first assumption: the first element of the set is the largest
    var max = set[0];

    // loop through each index in the set
    // note that we skip over the first element because of our first assumption
    for (var n = 1; n < size; n++) {
        console.log("Comparing " + max + " to " + set[n] + "...");
        // if the current value being looked at (set[n]) is larger than the current max value, that replaces max value
        if (set[n] > max) {
            max = set[n];
            console.log("Swapping");
        }
        // this will go over each element until the end
        // logic dictates that at the end of this run, the variable max will hold the largest value in set
    }
    return max;
}

// Output the result of the function to the console
console.log(maxVal(nums));