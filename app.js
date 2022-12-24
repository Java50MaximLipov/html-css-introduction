function myParseInt(strNum, base) {
    base = base || 10;
    let res = 0;
    let sign = "";
    if (strNum < 0) {
        strNum = strNum.substring(1);           //  removing the "-" sign from the string
        sign = "-";
    }
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === ".") { break }        //  if there is fractial part, it cutting off by exiting the loop
        if (getCode(strNum[i]) < base) {
            res = res * base + getCode(strNum[i]);
        } else {
            { break }                           //  if there is a letter that not related to base value - the loop is stops
        }
    }
    return sign + res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

// TEST VALUES
let strNum1 = "ff";
let strNum2 = "123";
let strNum3 = "Java";
let strNum4 = "123m";
let strNum5 = "123.5";
let strNum6 = "-123";

// TEST RESULTS
console.log("String number is: " + strNum1 + ".  parseInt result: " + parseInt(strNum1, 16) + ".  myParseInt result is: " + myParseInt(strNum1, 16) + ".");
console.log("String number is: " + strNum2 + ".  parseInt result: " + parseInt(strNum2) + ".  myParseInt result is: " + myParseInt(strNum2) + ".");
console.log("String number is: " + strNum3 + ".  parseInt result: " + parseInt(strNum3, 36) + ".  myParseInt result is: " + myParseInt(strNum3, 36) + ".");
console.log("String number is: " + strNum4 + ".  parseInt result: " + parseInt(strNum4) + ".  myParseInt result is: " + myParseInt(strNum4) + ".");
console.log("String number is: " + strNum5 + ".  parseInt result: " + parseInt(strNum5) + ".  myParseInt result is: " + myParseInt(strNum5) + ".");
console.log("String number is: " + strNum6 + ".  parseInt result: " + parseInt(strNum6) + ".  myParseInt result is: " + myParseInt(strNum6) + ".");

function myToString(number, base) {
    base = base || 10;
    let sign = (number < 0) ? "-" : "";         //  sign definition
    let separator = (number % 1) ? "." : "";    //  separator devinition
    number = Math.abs(number);
    let numFract = "" + number;                 //  converting number to string for cut off the integer value
    numFract = numFract.split(".")[1];          //  spliting the number string by separator
    numFract = +numFract;
    number = Math.trunc(number);
    return sign + numberToString(number,base) + separator + numberToString(numFract,base);
}
function numberToString(number,base){
    let result = "";
    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        result = symbol + result;
        number = Math.trunc(number / base);
    } while (number);
    return result;
    }
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}

// TEST VALUES
let number1 = 900550;
let number2 = 123.45;
let number3 = 255;
let number4 = -256;

// TEST RESULTS
console.log("Number: " + number1 + ".  toString result: " + number1.toString(36) + ".  myToString result: " + myToString(number1, 36) + ".");
console.log("Number: " + number2 + ".  toString result: " + number2.toString() + ".  myToString result: " + myToString(number2) + ".");
console.log("Number: " + number3 + ".  toString result: " + number3.toString(16) + ".  myToString result: " + myToString(number3, 16) + ".");
console.log("Number: " + number4 + ".  toString result: " + number4.toString() + ".  myToString result: " + myToString(number4) + ".");