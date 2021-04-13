# Reverse Integer

[Leetcode #7](https://leetcode.com/problems/reverse-integer/)

## Problem

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

#### Example 1

    Input: x = 123
    Output: 321

#### Example 2

    Input: x = -123
    Output: -321

#### Example 3

    Input: x = 120
    Output: 21

#### Example 4

    Input: x = 0
    Output: 0

### Constraints

    -2^31 <= x <= 2^31 - 1

## Solution

### First Pass

#### Expected Return

number within range

#### Psuedocode

    remove sign
    number to string
    reverse string
    add sign
    if outside range, return zero instead

shift sign to array first
then reverse remaining numbers

I think there's probably a way to reverse an array using advanced array methods, can't think of it now, using a loop

#### Code 1
```javascript
    arr = Array.from(x.toString());
    rev = [];
    if( typeof arr[0] != 'number' ){
        rev.push(arr.shift());
    }
    for(i=arr.length; i > 0; i--){
        rev.push(arr.pop());
    }
    str = rev.join('');
    ans = parseInt(str);

```

#### Code 2

```javascript

    arr = Array.from(x.toString());
    rev = [];
    if( typeof arr[0] != 'number' ){
        rev.push(arr.shift());
    }
    for(i=arr.length; i > 0; i--){
        rev.push(arr.pop());
    }
    str = rev.join('');
    ans = parseInt(str);

    if(
        ans > Math.pow(-2,31)
        &&
        ans < Math.pow(2,31)-1
    ){
        console.log(ans);
        return ans;
    }else{
        console.log(0);
        return 0;
    }

```
(stop forgetting to add let with variable names)

Changed if condition:

```javascript
if( x < 0 )
```

-----

### Submission Stats
Runtime: 148 ms, faster than 5.38% of JavaScript online submissions for Reverse Integer.
Memory Usage: 43 MB, less than 5.10% of JavaScript online submissions for Reverse Integer.

### Possible Improvements

lots of room for improvement with stats

maybe adv array methods
Is there something about binary that makes this work? (32 bit nums is the range)
some kind of bitwise/shifting thing I could look into
that's a long runtime
### Things I Googled

* js to the power of
    * Math.pow(x,y) --> x to the power of y
* js check if num
    * typeof value === 'number'
* js pop, js shift
    * remove and return first element (sign)
* js num digit to array
    * use .toString() and .split or Array.from
* js if without else
    * looks like it's ok
* js str to num
    * parseInt
* js arr values to str
    * arr.join()