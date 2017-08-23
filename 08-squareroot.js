function squareRoot(number) {
    var tolerance = 0.00000005;
    var guess = number / 2;

    var acceptable_upper = number + tolerance;
    var acceptable_lower = number - tolerance;

    while (Math.pow(guess, 2) >= acceptable_upper || Math.pow(guess, 2) <= acceptable_lower) {
        guess = ((number / guess) + guess) / 2;
    }

    return guess;
}