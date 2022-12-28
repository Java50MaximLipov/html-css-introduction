function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min + 1));
}
function getRandomMatrix(rows, columns, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max));
        }
    }
    return matrix;
}
function getRandomNumberArray(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomNumber(min, max));
    }
    return array;
}

//  HW-13 Get HTML <ul> string
function getHtmlUl(randomArray) {
    let htmlString = "";
    const tempArray = ['<ul class="list_class">'];
    const liClass = '<li class="item_class">';
    for (let i = 0; i < randomArray.length; i++) {
        const divClassType = randomArray[i] === 0 ? 'white' : 'black';
        tempArray.push(liClass + "<div " + `class="${divClassType}"` + "></div></li>");
    }
    tempArray.push('</ul>');
    htmlString = tempArray.join("");
    return htmlString;
}

//  HW-13 Transposed Matrix
function matrixTransp(matrix) {
    let columns = matrix.length;
    let rows = matrix[0].length;
    let matrixResult = [];
    let matrixTemporary = [];
    for (let j = 0; j < rows; j++) {
        matrixTemporary = [];
        for (let i = 0; i < columns; i++) {
            matrixTemporary.push(matrix[i][j]);
        }
        matrixResult.push(matrixTemporary);
    }
    return matrixResult;
}

//  Get HTML <ul> string TEST
const ulArray1 = getRandomNumberArray(6, 0, 1);
const ulArray2 = getRandomNumberArray(6, 0, 1);
console.log("Random div color numbers array is: " + ulArray1);
console.log("innerHTML string is: " + getHtmlUl(ulArray1));
console.log("Random div color numbers array is: " + ulArray2);
console.log("innerHTML string is: " + getHtmlUl(ulArray2));

//  Transposed Matrix TEST
const matrix1 = getRandomMatrix(3, 2, 1, 9);
const matrix2 = getRandomMatrix(3, 3, 1, 6);
const matrix3 = getRandomMatrix(3, 2, 1, 3);
console.log("Test Matrix:       " + matrix1);
console.log("Transposed matrix: " + matrixTransp(matrix1));
console.log("Test Matrix:       " + matrix2);
console.log("Transposed matrix: " + matrixTransp(matrix2));
console.log("Test Matrix:       " + matrix3);
console.log("Transposed matrix: " + matrixTransp(matrix3));