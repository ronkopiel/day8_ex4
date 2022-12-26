function fibonachiToN(n) {
    let i = 1;
    let num1 = 0; 
    let num2 = 1;
    let num3;
    while (i <= n) {
        console.log(num1);
        num3 = num1 +num2;
        num1 = num2;
        num2 = num3;
        i++; 
    }
}
fibonachiToN(9);

function isPalindrome(string) {
    let counter = string.length -1
    for (i = 0; i <= counter; i++){
        if (string[i] === string[counter]) {
            counter--;
        }
        else return false;
    }
    return true
}
console.log(isPalindrome("dad"));
console.log(isPalindrome("dog"));
console.log(isPalindrome("tattarrattat"));
console.log(isPalindrome("tattarrawttat"));
