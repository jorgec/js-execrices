/*
 * Basic implementation of a selection sort algorithm
 * Description of algorithm:
 *      First find the smallest element in the array and exchange it with the element in the first position, then find the second smallest element and exchange it with the element in the second position, 
 *      and continue in this way until the entire array is sorted.
 */

var nums = [381, 430, 711, 512, 277, 130, 142, 767, 65, 230, 572, 59, 341, 566, 50, 981, 934, 736, 610, 597, 795, 846, 978, 834, 692, 622, 888, 208, 343, 700, 495, 72, 2, 169, 723, 488, 549, 85, 428, 567, 961, 187, 105, 25, 434, 954, 323, 619, 938, 536, 897, 972, 400, 296, 746, 818, 762, 615, 876, 470, 257, 159, 636, 192, 832, 149, 927, 694, 75, 269, 213, 712, 997, 627, 750, 665, 822, 672, 133, 677, 802, 461, 116, 757, 69, 372, 416, 118, 154, 386, 949, 713, 983, 161, 475, 329, 412, 270, 807, 861];

/*
 * The function selectionSort takes in an array of numerical values and sorts it in ascending order.
 * It performs the sort "in-place", which means that it does not create an additional array, temporary or otherwise; all operations are done on the source array.
 * Input: Array
 * Output: Array
 */
function selectionSort(set) {
    var size = set.length;

    // loop through each element
    for (var i = 0; i < size; i++) {
        // assumption: the location of the smallest value is the current index; initially 0
        var min_location = i;

        // find the location of the smallest value of the remaining elements
        // from j to size
        // initially, j = 1, then 2, etc
        // *** algorithmically similar to maxVal
        for (var j = i + 1; j < size; j++) {
            if (set[j] < set[min_location]) {
                min_location = j;
            }
        }
        // swap if the minimum value is not in the current value
        if (min_location != i) {
            var temp = set[i];
            set[i] = set[min_location];
            set[min_location] = temp;
        }
    }

    return set;
}

console.log(selectionSort(nums));