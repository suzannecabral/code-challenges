# Number of Squares in an N* Grid

[Number of Squares in an N* Grid - Edabit](https://edabit.com/challenge/RGQXN4TG2CQoBAReQ)

Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
Examples

numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55

#### Notes

    Input is a positive integer.
    Square pyramidal number.


## Solution

### First Pass

#### Expected Return
number of squares in the grid

#### Psuedocode

try 1, 2, 3, 4 and 5

2 is 2 * 2 + 1
🔲🔲
🔲🔲
4 + 1
2 squares: 1

🔲🔲🔲
🔲🔲🔲
🔲🔲🔲
9 + 4 + 1
2squares: 4
3squares: 1

🔲🔲🔲🔲
🔲🔲🔲🔲
🔲🔲🔲🔲
🔲🔲🔲🔲
16 + 9 + 4 + 1
2squares: 9
3squares: 4
4squares: 1

🔲🔲🔲🔲🔲
🔲🔲🔲🔲🔲
🔲🔲🔲🔲🔲
🔲🔲🔲🔲🔲
🔲🔲🔲🔲🔲
25 + 16 + 9 + 4 + 1
2sq: 4 x 4 = 16
3sq: 3 x 3 = 9
4sq: 2 x 2 = 4
5sq: 1

n: count squares n x n
ans += n * n

count down
loop until i=0
while i>0

example n=5 (25)
i=n
ans += 5 * 5 (25) regular squares
ans += i * i
+= 5 * 5---> ans = 25

i-1, i=4
+= 4 * 4 ---> ans = 25 + 16
+= 3 * 3 ---> ans = 25 + 16 + 9
+= 2 * 2 ---> ans = 25 + 16 + 4
=+ 1 * 1 ---> ans = 25 + 16 + 4 + 1 (final ans)

or count up
squares made of 1 square
1 square n * n
2 squares n-1 * n-1

#### Code 1
```javascript

function numberSquares(n) {
	let ans = 0;
    for (let i = n; i > 0; i--) {
        console.log(i);
    }

}

```
test that the loop is what it's supposed to be

#### Code 2

```javascript

function numberSquares(n) {
	let ans = 0;
    for (let i = n; i > 0; i--) {
        ans += i * i;
        console.log(i*i);
    }
    console.log(ans);
    return ans;
}

numberSquares(5);
```

```javascript
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
```


-----

### Submission Stats

### Possible Improvements

Recursive:

http://pythontutor.com/visualize.html#mode=display



### Things I Googled

* js while loop (syntax)
    * use a for loop
* run js files node