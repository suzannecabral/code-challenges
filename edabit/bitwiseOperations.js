function bitwiseAND(n1, n2) {
    let ans = n1 & n2
	console.log([ans]);
    console.log('0'.repeat(8-(ans.toString(2).length)) + ans.toString(2))
    return ans;
}

// bitwiseAND(6,23);
// sb 6

// bitwiseAND(7,12);
// sb 4

function bitwiseOR(n1, n2) {
    let ans = n1 | n2
	console.log([ans]);
    console.log('0'.repeat(8-(ans.toString(2).length)) + ans.toString(2))
    return ans;
}

// bitwiseOR(6,23);
// sb 23

// bitwiseOR(7,12);
// sb 15

function bitwiseXOR(n1, n2) {
    let ans = n1 ^ n2
	console.log([ans]);
    console.log('0'.repeat(8-(ans.toString(2).length)) + ans.toString(2))
    return ans;

}

// bitwiseXOR(6,23);
//sb 17

// bitwiseXOR(7,12);
// sb 11