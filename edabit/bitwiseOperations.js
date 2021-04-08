// function bitwiseAND(n1, n2) {
	
// }

// function bitwiseOR(n1, n2) {
	
// }

// function bitwiseXOR(n1, n2) {
	
// }

function bitwiseAND(n1, n2) {
    
    // convert to binary
    // add padding to display leading 0s
    let padding = '0';
    
	let n1_bin = padding.repeat(8-(n1.toString(2).length)) + n1.toString(2);
    let n2_bin = padding.repeat(8-(n2.toString(2).length)) + n2.toString(2);
    
    // compare each digit and print result to n3_bin
    let n3_bin = '';
    for(i = 0; i < n1_bin.length; i++){

        if(n1_bin[i] == '1' && n2_bin[i] == '1'){
            n3_bin += 1;
        }else{
            n3_bin += 0;
        }
    }
    
    // convert n3_bin back to num
    
    
    // return ans
    return n3_bin;
    S
    // console.log([n1,n2],[n1_bin,n2_bin])
    // console.log([n3_bin]);
}

bitwiseAND(6,23);

function bitwiseOR(n1, n2) {
	
}

function bitwiseXOR(n1, n2) {
	
}