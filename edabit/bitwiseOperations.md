# Bitwise Operations

[Edabit](https://edabit.com/challenge/vvuAkYEAArrZvmp6X)

A decimal number can be represented as a sequence of bits. To illustrate:

    06 = 00000110
    23 = 00010111

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

    bitwiseAND(6, 23) ➞ 00000110

    bitwiseOR(6, 23)  ➞ 00010111

    bitwiseXOR(6, 23) ➞ 00010001

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

#### Examples

    bitwiseAND(7, 12) ➞ 4

    bitwiseOR(7, 12) ➞ 15

    bitwiseXOR(7, 12) ➞ 11

#### Notes

JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

## Solution

### First Pass

#### Expected Return
number - result of the bitwise operation

#### Psuedocode
treat the binary string as an array

    1. convert num to binary
    2. compare arr1[0] arr2[0]
    3. operation - set ans[0]
    4. convert ans binary arr/str to num
    5. return num

#### Code 1



-----

### Submission Stats

### Possible Improvements

### Things I Googled

* js toString binary
    * [StackOverflow](https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript)
    * num.toString(2);
    * has issues with negative nums