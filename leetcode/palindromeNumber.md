# Palindrome Number

[Leetcode #9](https://leetcode.com/problems/palindrome-number/)

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

#### Example 1:

    Input: x = 121
    Output: true

#### Example 2:

    Input: x = -121
    Output: false

Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

#### Example 3:

    Input: x = 10
    Output: false

Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

#### Example 4:

    Input: x = -101
    Output: false

 

### Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?


## Solution

### First Pass

#### Expected Return
boolean, true/false

#### Psuedocode

- negative numbers can't be palindromes (the sign counts)
- zeroes count, 10 -> 01, not 10 -> 1

  - if num < 0, false
  - else:
    - num to string to array
    - reverse array order
    - if array = reversed array, 
      - true
    - else 
      - false


#### Tools:

```javascript
    let arr = Array.from(x.toString());

    let str = rev.join('');
    let ans = parseInt(str);
```

#### Code 1
```javascript

// paste here

```

#### Code 2

```javascript

// paste here

```


-----

### Submission Stats

### Possible Improvements

### Things I Googled

*