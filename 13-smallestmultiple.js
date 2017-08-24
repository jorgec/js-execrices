/*
 * PROBLEM
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * 
 * SOLUTION
 * Rephrasing the condition wording:
 * 1 can divide n AND
 * 2 can divide n AND
 * 3 can divide n AND
 * 4 can divide n AND
 * ...
 * 18 can divide n AND
 * 19 can divide n AND
 * 20 can divide n
 * We start at 2520 because we know that is the smallest number that passes the first half of our conditions, and increment from there 
 * We only look at even numbers after that because odd numbers can't be divided by even numbers without remainder
 * We actually only need to check 18 numbers because 1 can divide any number without remainder, and since we're
 *      only checking even numbers, we know 2 can divide them as well
 * 
 * ALGORITHM:
 * 1. Create a "flag" variable - a variable you define to have one value until some condition is true, in which case you change the variable's value. 
 *          It is a variable you can use to control the flow of a function or statement, allowing you to check for certain conditions while your function progresses.
 *          In this case, we define the variable 'found' to be false initially because we haven't found the number that satisfies our conditions
 * 2. Set our start trial number to 2520
 * 3. Repeat the following until 'found' is true:
 *          3.1 List numbers from 3 to 20
 *                  3.1.1 Remember, we don't need to check 1 and 2
 *          3.2 If any of those numbers can divide the trial number, add 1 to the found counter
 *          3.3 If the found counter is 18, set the flag to true: we have found a trial number that can be divided by 1-20 without remainder
 *          3.4 If not, increment the trial number by 2
 */

var found = false;
var n = 2520;
while (!found) {
    var found_count = 0;
    for (var i = 3; i <= 20; i++) {
        if (n % i == 0) {
            found_count++;
        }
    }
    if (found_count == 18) {
        found = true;
    } else {
        n = n + 2;
    }
}

console.log(n);