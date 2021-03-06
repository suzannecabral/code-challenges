# Leetcode 268: Missing Number

[Leetcode March 2021 Challenge](https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3659/)

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

**Example 1:**

    Input: nums = [3,0,1]
    Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

**Example 2:**

    Input: nums = [0,1]
    Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

**Example 3:**

    Input: nums = [9,6,4,2,3,5,7,0,1]
    Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

**Example 4:**

    Input: nums = [0]
    Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.

**Constraints:**

    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= n
    All the numbers of nums are unique.

## The Brute Force Ugly Way

I'm gonna use .sort again and you can't stop me.

I could try the followup goal without it. stacks maybe? still storage though, don't see any way around having 2 arrays.

### Expected Return

num: the (only) missing num from the array.

#### Pseudocode 1

    ans = 0
    sortedNums = sort the array
    n = nums.length
    
    * IF sortedNums[n-1] != n
        - ans = n
        - return ans
    * ELSE 
        LOOP: 0 - n-1
        - thisNum & nextNum
        * IF nextNum - thisNum > 1
            - ans = thisNum + 1

!! I think this fails the case where the first number is missing and the rest are in sequence

I really don't think it's right at all and I can't put my finger on why, going to wait for it to fail some tests and go from there. Running the example questions through this version.

#### Code 1

```javascript
    let ans = 0;
    const sortedNums = nums.sort();
    let n = nums.length;

    if(sortedNums[n-1 != n]){
        ans = n;
        console.log(ans);
        return ans;
    }else{
        for(i = 0; i < n; i++){
            thisNum = nums[i];
            nextNum = nums[i+1];
            if(nextNum - thisNum > 1){
                ans = thisNum + 1;
                console.log(ans);
                return ans;
            }
        }
    }
```

#### Testing 1

    // TEST 2
    // missingNumber([0,1]);
    // Input: [0,1]
    // Expected: 2
    // FAIL - no return

> 

    // TEST 4
    // missingNumber([0]);
    // Input: [0]
    // Expected: 1
    // FAIL: no return



## Submsision Stats & Results

- runtime:
- memory usage:
- solve time:
- submit attempts:
- problem acceptance%: 54.9%

## Possible improvements

-

## Things I Googled

-
