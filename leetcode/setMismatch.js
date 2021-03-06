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
        console.log('m', ans);
        return ans;
    } else if (sortedNums[n - 1] != n) {
        missingNum = n;
        console.log('missingNum is n: ', missingNum);
        ans.push(duplicateNum, missingNum);
        console.log('m', ans);
        return ans;
    } else {
        for (i = 0; i < sortedNums.length - 1; i++) {
            thisNum = sortedNums[i]
            nextNum = sortedNums[i + 1]
            // console.log('(M) thisNum: ', thisNum);

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
        }
    }
};
// TEST CALLS

// TEST 1
// findErrorNums([1,2,2,4]);
// Expected: [2,3]
// PASS

// TEST 2
// findErrorNums([1,1]);
// Expected: [1,2]
// PASS

// TEST 3
// findErrorNums([1,2,3,4,5,6,6,8,9,10]);
// Expected: [6,7]
// PASS

// TEST 4
// findErrorNums([3,2,2]);
// Expected: [2,1]
// PASS

// TEST 5
// findErrorNums([3,2,3,4,6,5]);
// Expected: [3,1]
// PASS

// TEST 6
// findErrorNums([2,2]);
// Expected: [2,1]
// PASS

// TEST 7
findErrorNums([37,62,43,27,12,66,36,18,39,54,61,65,47,32,23,2,46,8,4,24,29,38,63,39,25,11,45,28,44,52,15,30,21,7,57,49,1,59,58,14,9,40,3,42,56,31,20,41,22,50,13,33,6,10,16,64,53,51,19,17,48,26,34,60,35,5])
// Expected: [39,40]
// FAIL - [39,55]