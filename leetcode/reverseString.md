# Reverse String

[Leetcode #879 Easy](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/)

Write a function that reverses a string. The input string is given as an array of characters s.

### Example 1

    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

### Example 2

    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

### Constraints

    1 <= s.length <= 105
    s[i] is a printable ascii character.

**Follow up:** Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## Solution

### First Pass

#### Expected Return

an array with the same letters in reverse order

#### Psuedocode

two pointer probably faster?
start at both ends, swap

this would use a new array, not in-place?
or at least hold one in memory while it moves the other one?


#### Code 1
```javascript

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    for(let i = 0; i < s.length/2; i++){
        
        let left = s[i];
        let right = s[s.length-i-1];
        
        s[i] = right;
        s[s.length-i-1]=left;
        
    }
};
```

### Submission Stats

Oh dang, it just worked the first time around. Cool! Modified in-place without returning.

    Runtime: 192 ms
    - super high on leetcode chart
    Memory Usage: 45.7 MB
    - beats 62.97 of js submissions
    - middle of the curve

### Possible Improvements

Runtime. Not sure why it would be longer than average since memory usage seemed like it was hitting a popular solution.

## Try 2

```javascript

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    for(let i = 0; i < s.length/2; i++){
        
        let x = s[i]
        s[i] = s[s.length-i-1];
        s[s.length-i-1]=x;
        
    }
};

```

* use 1 var instead of 2
* shorten var name = less memory? (also less readable, but this is for leetcode minmaxing)

        Runtime: 120 ms
        - beats 19.66%
        Memory Usage: 46 MB
        - beats 31.48%
        - ...how does it use MORE memory? seems like it should be less.

### Things I Googled

* js for loop

### Syntax Fixes

* writing in JS, need parens not indents (python)