/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
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
};

// TEST 1
// missingNumber([3,0,1]);
// Input: [3,0,1]
// Expected: 2

// TEST 2
// missingNumber([0,1]);
// Input: [0,1]
// Expected: 2
// FAIL - no return

// TEST 3
// missingNumber([9,6,4,2,3,5,7,0,1]);
// Input: [9,6,4,2,3,5,7,0,1]
// Expected: 8

// TEST 4
// missingNumber([0]);
// Input: [0]
// Expected: 1
// FAIL: no return