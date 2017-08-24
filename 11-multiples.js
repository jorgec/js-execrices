/*
 * PROBLEM
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * SOLUTION
 * We need to check if any given positive integer n less than 1000 is a multiple of 3 or 5; that is, whether or not 3 or 5 can divide n without remainder.
 * We can use the modulo % operator for this; a % b returns the remainder of a/b. So, if the result of a % b is zero, that means b can divide a without remainder.
 * 
 * TERMS:
 * - Integer: a whole number; a number that is not a fraction.
 * - Remainder: the number that is left over in a division in which one quantity does not exactly divide another
 * - Disjunction: the set of operands is true if and only if one or more of its operands is true. It is false only if all of the operands are false.
 * 
 * ALGORITHM:
 * 1. List out every number from 1 to 999 (below 1000).
 * 2. For every number, check if it can be divided by 3 or 5, by using the modulo operator.
 *      2.1 That's two checks: first check is if it can be divided by 3, second check is if it can be divided by 5.
 *      2.2 Note that this is a disjunction operation: OR. 
 * 3. If true, add that number to the total.
 * 4. Repeat until you reach 999 or more.
 */

var sum = 0;

for (var i = 1; i < 1000; i++) {

    var divisible_by_3 = i % 3 == 0;
    // we are assigning the result of the statement i % 3 == 0 -- that is: the remainder of i divided by 3 is zero -- to the variable divisible_by_3
    // the result is either true or false

    var divisible_by_5 = i % 5 == 0;
    // same thing here

    if (divisible_by_3 || divisible_by_5) {
        // if either of the operands are true, we add the value of i to sum
        sum = sum + i;
    }
}

console.log(sum);