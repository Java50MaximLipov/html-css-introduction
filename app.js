//  HW-14 (1)
function coloringString(string1, string2) {
    let result = 'Strings length is not equal!';
    if (string1.length == string2.length) {
        arrayString1 = Array.from(string1);
        arrayString2 = Array.from(string2);
        result = arrayString2.map(function (char, index) {
            let res = 'red';
            let arrayString1Index = arrayString1.indexOf(char);
            if (arrayString1Index != -1) {
                res = 'yellow';
                while (arrayString1Index <= arrayString1.length) {
                    if (char === arrayString1[index]) res = 'green';
                    arrayString1Index++;
                }
            }
            return res;
        });
    }
    return result;
}
console.log(coloringString("pappy", "app"));
console.log(coloringString("pappy", "apple"));
console.log(coloringString("pappy", "pappy"));
console.log(coloringString("hope", "pole"));

//  HW-14 (2)
function getNumbersWithDigitsAmount(digitsAmount, array) {
    const result = array.filter(function (number) {
        let res = number < 0 ? -1 : 1;
        let absValue = Math.abs(number);
        return ((absValue.toString()).length == digitsAmount ? res *= absValue : false);
    });
    return result;
}
console.log(getNumbersWithDigitsAmount(2, [10, 20, 30, -10, 11, 100]));
console.log(getNumbersWithDigitsAmount(3, [10, 0, 256, 1028, -512]));
console.log(getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]));