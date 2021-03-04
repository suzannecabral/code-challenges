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
    } else if (sortedNums[n - 1] != n) {
        missingNum = n;
        console.log('missingNum is n: ', missingNum);
        ans.push(duplicateNum, missingNum);
        console.log(ans);
        return ans;
    } else {
        // find missingNum in array
        for (i = 0; i < sortedNums.length - 1; i++) {
            thisNum = sortedNums[i]
            nextNum = sortedNums[i + 1]
            // console.log('(M) thisNum: ', thisNum);

            if (nextNum != thisNum + 1) {
                missingNum = thisNum + 1;
                console.log('missingNum is ', missingNum);
                ans.push(duplicateNum, missingNum);
                console.log(ans);
                return ans;
            }
        }
    }
};

// TEST CALLS

// findErrorNums([1,2,2,4]);
// sb [2,3]
// PASS

// findErrorNums([1,1]);
// sb [1,2]
// PASS

// findErrorNums([1,2,3,4,5,6,6,8,9,10]);
// sb [6,7]
// PASS

// findErrorNums([3,2,2]);
// sb [2,3]
// PASS

// findErrorNums([[3,2,3,4,6,5]]);
// sb [3,3]
// FAIL: [3,1]