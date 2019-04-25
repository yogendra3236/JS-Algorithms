function add(str1, str2) {

    let sum = "";  // our result will be stored in a string.

    // we'll need these in the program many times.
    let str1Length = str1.length;
    let str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if(str2Length > str1Length ){
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }

    let carry = 0;  // number that is carried to next decimal place, initially zero.
    let a;
    let b;
    let temp;
    let digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));      // get ith digit of str1 from right, we store it in a
        b = parseInt(str2.charAt(str2.length - 1 - i));      // get ith digit of str2 from right, we store it in b
        b = (b) ? b : 0;                                    // make sure b is a number, (this is useful in case, str2 is shorter than str1
        temp = (carry + a + b).toString();                  // add a and b along with carry, store it in a temp string.
        digitSum = temp.charAt(temp.length - 1);            //
        carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
        carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum;     // return sum

}

function extraLongFactorials(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
            //fact = fact + fact + .. i times
            let factxi = "0";  // this is (fact * i) for us.
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());
            }
            fact = factxi; // update value of fact before continuing the loop.
        }
    }

    return fact;
}


console.log(extraLongFactorials(500));  // prints 15511210043330985984000000

console.log(extraLongFactorials(500));  // prints 295232799039604140847618609643520000000
