# Leetcode 575: Distribute Candies

[Leetcode March 2021 Challenge](https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3657/)

Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

**Example 1:**

    Input: candyType = [1,1,2,2,3,3]
    Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

**Example 2:**

    Input: candyType = [1,1,2,3]
    Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

**Example 3:**

    Input: candyType = [6,6,6,6]
    Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

**Constraints:**

    n == candyType.length
    2 <= n <= 104
    n is even.
    -105 <= candyType[i] <= 105

## The Brute Force Ugly Way

### Expected Return

return the max number of different types of candy Alice can eat from the given set. (num)

#### Pseudocode 1

total max number of types is n/2
n is always even so this will always work out

then need to see how many types of candy there actually are

- [x] make a set (gets only unique values)

    IF set.size < n/2
        ans = set.size
    ELSE
        ans = set.size

#### Code 1

```javascript
    let ans = 0;
    const n = candyType.length;
    const candySet = new Set(candyType);

    if(candySet.size < n/2){
        ans = candySet.size
    }else{
        ans = n/2
    }

    console.log(ans);
    return ans;
```

#### Test 1

Accepted! that's it. First attempt.

## Submsision Stats & Results

- runtime: beats 95.40% of submissions (!!!)
- memory usage: beats 33.47% of submissions
- Solve time: about 30 mins

## Possible improvements

Memory - maybe doing this without a set?

## Things I Googled

- js set (syntax to make a new set from an array)
- js set .length (it uses .size instead?)
- js ternary whichever is greater (ternary operator syntax, don't think I actually want it though)