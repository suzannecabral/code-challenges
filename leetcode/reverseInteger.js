var reverse = function(x) {
    let arr = Array.from(x.toString());
    let rev = [];
    if( x < 0 ){
        rev.push(arr.shift());
        console.log('potato');
    }
    for(i=arr.length; i > 0; i--){
        rev.push(arr.pop());
    }
    let str = rev.join('');
    let ans = parseInt(str);

    if(
        ans > Math.pow(-2,31)
        &&
        ans < Math.pow(2,31)-1
    ){
        console.log(ans);
        return ans;
    }else{
        console.log(0);
        return 0;
    }
}

reverse(132);