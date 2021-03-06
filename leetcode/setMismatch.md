
# Leetcode 645: Set Mismatch

[Leetcode](https://leetcode.com/explore/featured/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3658/
)

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:

    Input: nums = [1,2,2,4]
    Output: [2,3]

Example 2:

    Input: nums = [1,1]
    Output: [1,2]

Constraints:

    2 <= nums.length <= 104
    1 <= nums[i] <= 104

## The Brute Force Ugly Way

    return: array []
    [duplicateNum, missingNum]

    [1,2,2,4]
    return: [2,3]

- will always have at least 2 nums
- will not be negative

### Try 1: Pseudocode

    check it starts with 1      arr[0]
        if not, logic for duplicate
        (? can I just delete this step? I think I can)

    check it ends with n        arr[arr.length]
        if not, logic for duplicate

    loop for each num in array.length-1 (stop at second to last, and check that last num === n)
        if nextNum != thisNum + 1
            logic for duplicate
            // duplicate logic here
            // push ans
            // return ans

### Return expects:

    [duplicateNum, missingNum]

### Try 1: Code

```javascript
let ans = [];

if(s[s.length] != n]){
    ans.push(s[s.length],n);
    return ans;

}

for(i = 0; i < s.length-1; i++){
    thisNum = s[i];
    nextNum = s[i+1];

    if(nextNum != thisNum+1){
        if(i === 0 && thisNum != 1){
            ans.push(thisNum, 1);
            return ans;
        }
        ans.push(nextNum,i+1)
        return ans;
    }
}
```

### Try 2: Pseudocode

checking for duplicates

    it's found a situation where the next number =/= this num + 1
        if i = 0 and num != 1, 1 is the missing number
        the duplicate is s[i]

    otherwise
        i+1 is missing !! not nextNum
        nextNum is the duplicate

## Testing Code

- changed s to nums, problem wording said "s" params said "nums"
- returning [0,1 in vscode], runtime error in leetcode
leetcode error: n is not defined (I don't have this error anywhere I can see in vscode)
- change n to nums.length+1
I was using the variables from the written problem again, n isn't an actual parameter
- !! Make sure to run current file in vscode debugger, it was running twoSum
it's in the dropdown "RUN"  box for the debugger on the left panel
- Figure out how what to do with the launch.json so it launches whatever I'm currently working on, or just doesn't revert to an old file

- I got confused on counting indices, I needed length-1 to get the last index, and length (not length+1) to get n

- changed nums[nums.length]-1 to nums[nums.length-1]
- now it's returning a number in leetcode
vscode still says exited with code 1
WHY is vscode not giving me any errors
this may be a thing to fix or not use

so for this challenge I don't have the debugger, that's probably like a regular challenge anyway. I would like to figure out how to use it though.

change:
    ans.push(nextNum,i+2)
confused with indices again, i+2 is the value that should be in the next space, since the numbers start with 1 it adds an extra. i+1 would only be the number of the index/space, starting at 0.
worked for the first test case

    Submission Result: Wrong Answer
    Input: [1,1]
    Output: [NaN,2]
    Expected: [1,2]

this seems to me like it should work
screw it I'm using replit, I'll take my notes in vscode I guess
quicker workflow this way

### Still Testing, no debugger

Console logging "First Case" , "Second case" inside the if statements to see which one it's hitting

- it's hitting the first case
- there's another instance of the same bracket typo, fixing it
- looks like it'll go now

        // findErrorNums([3,2,2]);
        // sb [2,3]
        // FAIL: [2,1]

this one is confusing to me
why wouldn't 1 be missing

.... I just assumed they would be in order, and they are not. WHOOPS
do I sort it first then?

this is the gross version, I'm just using .sort.
Replacing all nums after that reference with sortedNums

cool, it's stupid about sorting numbers, it went:

    [
    1, 10, 2, 3, 4,
    5,  6, 6, 8, 9
    ]
the docs on it are interesting though, could be really useful later
can use custom functions to define sorting, sort objects by one of their values

sort ascending:
    numbers.sort((a, b) => a - b);

- [x] Works!

---------------------------
    Submission Result: Wrong Answer 
    Input: [3,2,3,4,6,5]
    Output: [3,3]
    Expected: [3,1]

so it's being weird about 1 being missing

next version:
starting checks:
    - first is missing (1)
        push to missing num
    - last is missing (n)
        push to missing num

loop:

    if array isn't empty, it has the missing num already
    only need the duplicate num

    if it is empty, find the missing num, 
        then find the duplicate num

just hit 2 hours 15 mins on this problem, pausing here.

### Try 2: Code

```javascript
let ans = [];
let sortedNums = nums.sort((a, b) => a - b);
console.log('sortedNums: ', sortedNums);

let missingNum = 0;
let duplicateNum = 0;
let n = sortedNums.length

for(i = 0; i < sortedNums.length-1; i++){
    thisNum = sortedNums[i];
    nextNum = sortedNums[i+1];
    console.log('(d) thisNum: ', thisNum);
    if(nextNum === thisNum){
        duplicateNum = nextNum;
        console.log('duplicateNum is: ', duplicateNum);
        break;
    }
}

if(sortedNums[0] != 1){
    missingNum = 1;
    console.log('missingNum is 1');
}else if(sortedNums[n-1] != n){
    missingNum = n
    console.log('missingNum is n: ', n);
}else{
    // find missingNum in array
    for(i = 0; i < sortedNums.length-1; i++){
        thisNum = sortedNums[i]
        nextNum = sortedNums[i+1]
        console.log('Missing thisNum: ', thisNum);

        if(nextNum != thisNum+1){
            missingNum = thisNum; 
            console.log('missingNum is ', missingNum);
            break;
        }
    }
}
```

### Code #3

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans = [];
    let sortedNums = nums.sort((a, b) => a - b);
    console.log('sortedNums: ', sortedNums);

    let missingNum = 0;
    let duplicateNum = 0;
    let n = sortedNums.length

    for (i = 0; i < sortedNums.length - 1; i++) {
        thisNum = sortedNums[i];
        nextNum = sortedNums[i + 1];
        // console.log('(D) thisNum: ', thisNum);
        if (nextNum === thisNum) {
            duplicateNum = nextNum;
            console.log('duplicateNum is: ', duplicateNum);
            break;
        }
    }

    if (sortedNums[0] != 1) {
        missingNum = 1;
        console.log('missingNum is 1');
        ans.push(duplicateNum, missingNum);
        console.log('m/n', ans);
        return ans;
    } else if (sortedNums[n - 1] != n) {
        missingNum = n;
        console.log('missingNum is n: ', missingNum);
        ans.push(duplicateNum, missingNum);
        console.log('m/n', ans);
        return ans;
    } else {
        for (i = 0; i < sortedNums.length - 1; i++) {
            thisNum = sortedNums[i]
            nextNum = sortedNums[i + 1]
            // console.log('(M) thisNum: ', thisNum);

            if (nextNum != thisNum + 1) {
                missingNum = thisNum + 1;
                console.log('missingNum is ', missingNum);
                ans.push(duplicateNum, missingNum);
                console.log('d/n',ans);
                return ans;
            }
        }
    }
};
```

### Testing #3

    findErrorNums([37,62,43,27,12,66,36,18,39,54,61,65,47,32,23,2,46,8,4,24,29,38,63,39,25,11,45,28,44,52,15,30,21,7,57,49,1,59,58,14,9,40,3,42,56,31,20,41,22,50,13,33,6,10,16,64,53,51,19,17,48,26,34,60,35,5])
    // Expected: [39,40]
    // FAIL - [39,55]

Thinking through what I did wrong here. The program is getting a little longwinded. I'm skipping the case where the missing number isn't right after the duplicate. It's hard for me to read back and find where that should be.

#### Pseudocode:

    * Define Answer & SortedNums, n
    * Declare missing, duplicate
    
    * LOOP: check for duplicates
        - thisNum
        - nextNum
        - IF thisNum === nextNum:
            * duplicate is nextNum
            (the second copy of the num)
            * break this loop

    // NOTE - code below only runs AFTER the duplicate 
    has been found, there should always be a correct
    duplicate at this stage

    * IF: first number isn't 1
        - THEN: 1 is missing
        - set missingNum
        - push duplicate & missing to ans
        - return ans

    * ELSEIF: the last number isn't n
        - THEN: n is missing
        - set missingNum
        - push duplicate & missing to ans
        - return ans

    * ELSE:  
        - LOOP: step through each number to find the
        missing num
        
        //! I think the mistake here is treating
        this loop exactly like the last loop.
        the numbers shouldn't be paired up in 
        the same way. Need 3 nums to determine a gap.
        end of the array is n-1 because nums[n] 
        is checked by the previous case.

This is what needs to be replaced, think through why:

        - LOOP: from nums[0] to nums[n-2]
        // 1/nums[0] has been checked
        // n/nums[n-1] has been checked

            thisNum
            nextNum
            * IF nextNum != thisNum + 1
                - set missingNum = thisNum + 1
                - push dup & missing to ans
                - return ans

When does it fail?

> - Test 7, the one with a ton of inputs.
> - it's returning from the missing num check [ok]
> - it's seeing the duplicate value+1 as the missing num [fail]

It should see the duplicate, skip it, check if the next num is duplicate +1, then keep going.

If the next num is greater than duplicate+1, then something is missing in between.

- [x] add another IF that covers the duplicate
(I really don't need the duplicate check then do I?)
- [x] this is the UGLY VERSION just leave it

#### Modified code:

```javascript
if (nextNum != thisNum + 1) {

                if (nextNum === thisNum){
                    continue;
                }else{
                    missingNum = thisNum + 1;
                    console.log('missingNum is ', missingNum);
                    ans.push(duplicateNum, missingNum);
                    console.log('m',ans);
                    return ans;
                }
            }
```

## Leetcode Stats/Final Results

FINALLY GOT IT

- runtime beats 26.51% of js solutions
- memory usage beats 46.99% of js solutions

## Things I Googled

- js for loop syntax
- js mdn array
  - shift/unshift vs push/pop, couldn't remember the name
- js check if equals syntax
  - strict equals vs comparison
  - strict equals checks type (not memory loc?)
- js else if without else
  - yes you can have an if without else
- js arrow function syntax
- js sort array
