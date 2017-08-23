/*
 * Average Value of elements in an array
 * - Variable Assignment
 * - Logical Comparisons
 * - Arrays
 * - Loops
 * - Conditionals
 * - Math
 */

var nums = [381, 430, 711, 512, 277, 130, 142, 767, 65, 230, 572, 59, 341, 566, 50, 981, 934, 736, 610, 597, 795, 846, 978, 834, 692, 622, 888, 208, 343, 700, 495, 72, 2, 169, 723, 488, 549, 85, 428, 567, 961, 187, 105, 25, 434, 954, 323, 619, 938, 536, 897, 972, 400, 296, 746, 818, 762, 615, 876, 470, 257, 159, 636, 192, 832, 149, 927, 694, 75, 269, 213, 712, 997, 627, 750, 665, 822, 672, 133, 677, 802, 461, 116, 757, 69, 372, 416, 118, 154, 386, 949, 713, 983, 161, 475, 329, 412, 270, 807, 861];

/*
 * The function Average receives an array of numerical values and returns the average value
 * Input: Numeric
 * Output: Numeric
 */

function average(set) {
    // get the size of the set
    var size = set.length;

    // set the inital results to 0
    var total = 0.0;
    var avg = 0.0;

    for (var i = 0; i < size; i++) {
        total = total + set[i];
    }

    // By definition: an average is calculated by dividing the sum of the values in the set by their number
    avg = total / size;
    return avg;
}

try {
    console.assert(average([1, 2, 3, 4, 5, 6]) == 3.5, "Expected 3.5, got " + average([1, 2, 3, 4, 5, 6]));
    console.assert(average([1, 1, 1]) == 1, "Expected 1, got " + average([1, 1, 1]));
} catch (e) {
    console.log(e.message);
}