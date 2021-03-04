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

// TEST CALLS

// twoSum([2,7,11,15],9);
// twoSum([3,2,4],6);
twoSum([3,3],6);