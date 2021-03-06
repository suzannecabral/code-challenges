/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    
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

};

// TEST 1
distributeCandies([1,1,2,2,3,3]);
// input: [1,1,2,2,3,3]
// expected: 3