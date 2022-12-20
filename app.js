let number1 = 12345;
let number2 = -12345;
let number3 = 0;
let number4 = 1234.567
let exprString1 = "9+100/2";
let exprString2 = "10**2-50";
let exprString3 = "(25+75)*2-50"
let exprString4 = "5**3-25*100+42";
console.log("Sum of all digits");
console.log(getDigitsSum(number1));
console.log(getDigitsSum(number2));
console.log(getDigitsSum(number3));
console.log(getDigitsSum(number4));
console.log();
console.log("Compute string expression");
console.log(computeExpression(exprString1));
console.log(computeExpression(exprString2));
console.log(computeExpression(exprString3));
console.log(computeExpression(exprString4));
console.log();
console.log("Print ananas");
console.log(printAnanas());
console.log();
console.log("Reverse order");
console.log(reverse(number1));
console.log(reverse(number2));
console.log(reverse(number3));
console.log(reverse(number4));

function getDigitsSum(number) {
    //computes sum af all digits in the integer part of the number
    //number may be either negative or positive or 0

    let absNumber = Math.abs(number);
    let result = 0;
    let remainder = 0;
    while (absNumber != 0) {
        remainder = Math.trunc(absNumber % 10);
        absNumber = Math.floor(absNumber / 10);
        result += remainder;
    }
    return result * sign(number);

}
function computeExpression(expressionString) {
    //example "100/(10+20)**2"
    //task for searching in Internet
    //only line of code

    return eval(expressionString);
}

function printAnanas() {
    //TODO 
    //To use only "A" and "S"
    //print "ananas"

    let result = "A" + ("A" * 2) + "A" + "S";
    return result.toLowerCase();
}

function reverse(number) {
    //returns string with digits of given number in the reversed order
    //example reverse(1234) should return 4321
    //example reverse(-1234) should return -4321

    let absNumber = Math.abs(number);
    let result = 0;
    let remainder = 0;
    while (absNumber != 0) {
        remainder = Math.trunc(absNumber % 10);
        absNumber = Math.floor(absNumber / 10);
        result = result * 10 + remainder;
    }
    return result * sign(number);
}

function sign(number) {
    let sign = 1;
    if (number < 0) sign *= -1;
    return sign;
}