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


    -[x] Convert to binary with num.toString(2)
    -[x] pad numbers to display leading 0s
    -[x] operation: compare digits in result n3

    -[x] rewrite with simple operators
#### Code 1
```javascript
function bitwiseAND(n1, n2) {
    
    // convert to binary
    // add padding to display leading 0s
    let padding = '0';
    
	let n1_bin = padding.repeat(8-(n1.toString(2).length)) + n1.toString(2);
    let n2_bin = padding.repeat(8-(n2.toString(2).length)) + n2.toString(2);
    
    // compare each digit and print result to n3_bin
    let n3_bin = '';
    for(i = 0; i < n1_bin.length; i++){

        if(n1_bin[i] == '1' && n2_bin[i] == '1'){
            n3_bin += 1;
        }else{
            n3_bin += 0;
        }
    }
    
    // convert n3_bin back to num
    let ans = parseInt(n3_bin, 2)
    
    // return ans
    console.log(ans);
    return ans;
    
    // console.log([n1,n2],[n1_bin,n2_bin])
    // console.log([n3_bin]);
}

// bitwiseAND(6,23);
// sb 6

// bitwiseAND(7,12);
// sb 4
```

This works, but I just googled bitwise OR and there's just an operator to do it in JS. going to try a version with that.

#### Code 2

```javascript

function bitwiseAND(n1, n2) {
    let ans = n1 & n2
	console.log([ans]);
    console.log('0'.repeat(8-(ans.toString(2).length)) + ans.toString(2))
    return ans;
}

// bitwiseAND(6,23);
// sb 6

// bitwiseAND(7,12);
// sb 4

function bitwiseOR(n1, n2) {
    let ans = n1 | n2
	console.log([ans]);
    console.log('0'.repeat(8-(ans.toString(2).length)) + ans.toString(2))
    return ans;
}

// bitwiseOR(6,23);
// sb 23

// bitwiseOR(7,12);
// sb 15

function bitwiseXOR(n1, n2) {
    let ans = n1 ^ n2
	console.log([ans]);
    console.log('0'.repeat(8-(ans.toString(2).length)) + ans.toString(2))
    return ans;

}

// bitwiseXOR(6,23);
//sb 17

// bitwiseXOR(7,12);
// sb 11

```

-----

### Submission Stats

### Possible Improvements

### Things I Googled

* js toString binary
    * [StackOverflow](https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript)
    * num.toString(2);
    * has issues with negative nums
* javascript binary keep zeros
    * str.repeat(n) will repeat a character (string) a specified number of times
* for loop js
    * (Syntax)
* bitwise AND
* JS binary to int
    * parseInt()
* js parseInt()
    * MDN - arg should be 2 for binary?