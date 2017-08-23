/*
 * Hindi numbers to Roman numerals
 * Algorithm:
 *      1. Check if number is greater than largest single Roman numeral value (ex. M)
 *          1.1 If true: add the corresponding roman numeral to roman_value and subtract that value from number
 *          1.2 If false: move down the list to the next largest Roman numeral value
 *      2. Repeat while number is larger than or equal to the largest single Roman numeral value or until number is reduced to 0
 */
function hindiToRoman(number) {
    var roman_value = '';

    // Breakpoints in the Roman numeric system
    var numeric_values = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    while (number > 0) {
        // Check each value in the breakpoints
        for (key in numeric_values) {
            // Get the hindi numeric value of that breakpoint
            var val = numeric_values[key];
            // Repeat the process for as long as number is still greater than the breakpoint
            while (number >= val) {
                // Append the breakpoint to the output
                roman_value = roman_value + key;
                // Reduce number by the value of the breakpoint
                number = number - val;
            }
        }
        return roman_value;
    }
}

// tests
try {
    console.assert(hindiToRoman(10) == "X", "1 Should be X, got " + hindiToRoman(10));
    console.assert(hindiToRoman(30) == "XXX", "2 Should be XXX, got " + hindiToRoman(30));
    console.assert(hindiToRoman(5) == "V", "3 Should be V, got " + hindiToRoman(5));
    console.assert(hindiToRoman(9) == "IX", "4 Should be IX, got " + hindiToRoman(9));
    console.assert(hindiToRoman(11) == "XI", "5 Should be XI, got " + hindiToRoman(11));
    console.assert(hindiToRoman(4) == "IV", "6 Should be IV, got " + hindiToRoman(4));
    console.assert(hindiToRoman(87) == "LXXXVII", "7 Should be LXXXVII, got " + hindiToRoman(87));
    console.assert(hindiToRoman(1998) == "mcmxcviii".toUpperCase(), "8 Should be " + "mcmxcviii".toUpperCase() + ", got " + hindiToRoman(1998));
    console.assert(hindiToRoman(2999) == "mmcmxcix".toUpperCase(), "9 Should be " + "mmcmxcix".toUpperCase() + ", got " + hindiToRoman(2999));
    console.assert(hindiToRoman(3333) == "MMMCCCXXXIII", "10 should be MMMCCCXXXIII, got " + hindiToRoman(3333));
} catch (e) {
    console.log(e.message);
}