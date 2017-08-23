/*
 * Calculate the standard deviation of the numbers in an array
 * Definition: a measure that is used to quantify the amount of variation or dispersion of a set of data values. A low standard deviation indicates that the data points tend to be close to the mean (also 
 *      called the expected value) of the set, while a high standard deviation indicates that the data points are spread out over a wider range of values.
 * The formula for the sample standard deviation is:
 *      s = sqrt( (sum(x[i] - avg)^2)/N-1 ), where:
 *          sqrt = Square Root
 *          x[i] = Any given value in the set
 *          avg = Average values of the set
 *          N = The total number of values
 * Thus, the standard deviation is the square root of the average of the squared differences from the mean
 * 
 * We will be using the Javascript Math library:
 * - Math.pow()
 * - Math.sqrt()
 */

var nums = [381, 430, 711, 512, 277, 130, 142, 767, 65, 230, 572, 59, 341, 566, 50, 981, 934, 736, 610, 597, 795, 846, 978, 834, 692, 622, 888, 208, 343, 700, 495, 72, 2, 169, 723, 488, 549, 85, 428, 567, 961, 187, 105, 25, 434, 954, 323, 619, 938, 536, 897, 972, 400, 296, 746, 818, 762, 615, 876, 470, 257, 159, 636, 192, 832, 149, 927, 694, 75, 269, 213, 712, 997, 627, 750, 665, 822, 672, 133, 677, 802, 461, 116, 757, 69, 372, 416, 118, 154, 386, 949, 713, 983, 161, 475, 329, 412, 270, 807, 861];

function average(size, set) {

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

function standardDeviation(set) {
    var size = set.length;
    var avg = average(size, set);
    var std = 0.0;

    // get the summation of (x[i] - avg)^2
    var sum_of_variances = 0;
    for (i = 0; i < size; i++) {
        sum_of_variances = sum_of_variances + Math.pow(set[i] - avg, 2);
    }
    if (sum_of_variances != 0) {
        std = Math.sqrt(sum_of_variances / (size - 1));
    }
    return std;
}

try {
    console.assert(standardDeviation([1, 1, 1, 1, 1]) == 0, "Expected 0, got " + standardDeviation([1, 1, 1, 1, 1]));
    console.assert(standardDeviation([1, 1, 2, 2, 3, 3]) == 0.8944271909999159, "Expected 0, got " + standardDeviation([1, 1, 2, 2, 3, 3]));
    console.assert(standardDeviation([1, 2, 3]) == 1, "Expected 1, got " + standardDeviation([1, 2, 3]));
} catch (e) {
    console.log(e.message);
}