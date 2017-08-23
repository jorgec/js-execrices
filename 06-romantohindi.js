/*
 * Roman numerals to hindi numbers
 * I -> 1, III -> 3, V -> 5, X -> 10, etc, except for special cases:
 *      IV -> 4, IX -> 9, XL -> 40
 *      Pattern: Common case is larger number precedes a lower number (ex: VI is 6), in which case you just add the values. 
 *          When the reverse occurs (ex: IV), the lesser digit value is subtracted from the larger digit value ( I - V, or 4)
 */
function romanToHindi(number) {
    var roman = new String(number);
    var size = roman.length;

    var hindi_value = 0;

    var numeric_values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (var i = 0; i < size; i++) {
        // convert input to uppercase to prevent sloppy errors
        var current_roman = roman[i].toUpperCase();
        // look up the value of the current numeral
        var current_value = numeric_values[current_roman];

        // check if the next value after this one is greater, because this is a special case where you should
        // subtract the first number from the next number
        // ex: IX is 9, not 11
        if (i < size - 1) { // only check for the next value if there is actually going to be a next value
            var next_roman = roman[i + 1].toUpperCase();
            var next_value = numeric_values[next_roman];
            // check if the next value is larger than the current value
            if (next_value > current_value) {
                // make this a negative value so that when added, it actually subtracts
                current_value = current_value * -1;
            }
        }

        hindi_value = hindi_value + current_value;
    }
    return hindi_value;
}

try {
    console.assert(romanToHindi("xl") == 40, "Result should be 40");
    console.assert(romanToHindi("xxx") == 30, "Result should be 30");
    console.assert(romanToHindi("xix") == 19, "Result should be 19");
    console.assert(romanToHindi("xxiv") == 24, "Result should be 24");
    console.assert(romanToHindi("vl") == 45, "Result should be 45");
    console.assert(romanToHindi("ccclxxxiv") == 384, "Result should be 384");
    console.assert(romanToHindi("mcmxcviii") == 1998, "Result should be 1998");
} catch (e) {
    console.log(e.message);
}