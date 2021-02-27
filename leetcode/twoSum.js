/*  

Two Sum
https://leetcode.com/problems/two-sum/


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

    2 <= nums.length <= 103
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let ans = [];


    for(thisNum = 0; thisNum < nums.length; thisNum++){
        for(nextNum = thisNum+1; nextNum < nums.length; nextNum++){
            if(target - nums[thisNum] == nums[nextNum]){
                ans.push(thisNum, nextNum)
                break;
            }else{
                continue;
            }
        }
    }


    console.log(ans);
    return(ans);
};

// twoSum([2,7,11,15],9);
// twoSum([3,2,4],6);
twoSum([3,3],6);



/* 
-----------------
The Brute Force Ugly Way
-----------------
return array: indices of the 2 nums that add up to the target
target - thisNum = the other number


Pseudocode
-----------------
let lastChecked = -1

for each input(thisNum) (loop)
    lastChecked += 1
    if target - thisNum == arr[lastChecked+1] 
        ! it's the answer, return it
        
        break    

    else keep checking


Code Try 1
-------------------
let lastChecked = -1
for (i=0; i<nums.length; i++){
    const thisNum = arr[i];
    const nextNum = arr[i+1]
    lastChecked += 1;

    if(target-thisNum == nextNum){
        >> this is the answer return it
        >> form the answer array
    }else{
        >> keep going thru array
        >> this sounds like a nested loop, how do I write nested loops?
        >> the ideal solution avoids nested loops. Good thing this is the ugly solution and not the ideal one.

    }
}


Code Try 2
--------------------
Writing the nested loop

let lastChecked = -1
for (i=0; i<nums.length; i++;){
    const thisNum = arr[i];
    const nextNum = arr[i+1]
    lastChecked += 1;

    if(target-thisNum == nextNum){
        >> this is the answer return it
        >> form the answer array
    }else{
        for (j=i+1; j<nums.length; j++;){
            nextNum = arr[j];
            if(target-thisNum = nextNum)
        }
    }
}


Code Try 3
--------------------
I don't need that first conditional statement
I can roll the variable names into the loop statement
spaces around operators helps with reading them
I should really call my variables thisIdx and nextIdx but too late now

for(thisNum = 0; thisNum < nums.length; thisNum++;){
    for(nextNum = thisNum+1; nextNum < nums.length; nextNum++;){
        if(target - arr[thisNum] == arr[nextNum]){
            ans.push(thisNum, nextNum)
            break;
        }else{
            continue;
        }
    }
}


Testing Code from Try 3
--------------------
deleted the semicolons
change arr to nums
all 3 passed! on to Leetcode


Leetcode Stats
--------------------
Runtime: 76 ms, faster than 83.53% of JavaScript online submissions for Two Sum.
Memory Usage: 39.1 MB, less than 20.71% of JavaScript online submissions for Two Sum
- how is this faster than 83%??? 
- Space improvement: I can remove the separate answer array and return from inside the conditional, which would also not need to break
- improved version: one-pass hash table, can go through the list only once. 


Notes
--------------------
The extra variables are less efficient, but help me read. My workflow is stopping and starting, need the help picking the code back up
I miss python


Things I Googled 
-----------------
    js break
        used on its own line to break out of a loop
    js array length
        syntax: arr.length
        also loop syntax w/o array methods
    js increment operator
    js +=
        yes you can use it in js
    js does i++ need a semicolon
        explainer: https://www.codecademy.com/forum_questions/507f6dd09266b70200000d7e#508000efde2d860200004bbe
        it's optional before the newline
        it shouldn't break if I have it (I wrote it with ;)
        - nevermind, linter said to remove it
    js continue
        I don't think I need it, I could just write the if with no else. I think I'll use it anyway in case I need console logs after or something.
*/




