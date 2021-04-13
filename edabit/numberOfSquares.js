// Loop solution

// function numberSquares(n) {
// 	let ans = 0;
//     for (let i = n; i > 0; i--) {
//         ans += i * i;
//     }
//     console.log(ans);
//     return ans;
// }

// numberSquares(5);

// Recursive solution
function numberSquares(n) {
    let ans = 0;
    if(n==1){
        return n;
    }else{
        ans += n * n
        return ans + numberSquares(n - 1)
    }
}
console.log(numberSquares(5));
// numberSquares(5);