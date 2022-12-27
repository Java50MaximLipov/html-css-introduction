// const ar = [];
// const ar1=[1,2,3,4];
// ar.push(...ar1);
// ar.push("abc");
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

//  HW-13 Get HTML <ul> string
function getHtmlUl(array) {
    array = ['<ul class="list_class">'];
    let htmlString = "";
    let quantity = getRandomNumber(4, 6);
    let div = "";
    const liClass = '<li class="item_class">';
    for (let i = 0; i < quantity; i++) {
        div = getDivClass();
        array.push(liClass + "<div " + div + "></div></li>");
    }
    array.push('</ul>')
    htmlString = array.join("");
    return htmlString;
}
function getDivClass() {
    const divClassType = getRandomNumber(0, 1) === 0 ? 'white' : 'black';
    const divClassResult = `class="${divClassType}"`;
    return divClassResult;
}


function matrixTransp(matrix) {
    //  TODO
    //  return transp matrix
    //  matrixInput =   [[1, 2],        rows[1]/columns[1] = 1 => 
    //                   [3, 4],
    //                   [4, 5]]
    //  matrixOutput =  [[1, 3, 4]
    //                   [2, 4, 5]]
    const matrixRes=[];
    let matrixString = matrix.join(",");
    const tempMatrixArray=(matrixString);
    console.log("temp array is "+tempMatrixArray);
    const length=tempMatrixArray.length;
    let rowsArray=[];
    let columnsArray=[];
    for(let i=0; i<length;i++){
        if(i%2){
            columnsArray.push[i]
        }else{
            rowsArray.push[i]
        }
        // (!i%2)?columnsArray.push[i]:rowsArray.push[i];
    }
    for(let i=0;i<rowsArray.length;i++){
        matrixRes.push(rowsArray);
        for(let j=0;j<columnsArray.length;j++){
            matrixRes[i].push(columnsArray);
        }
    }
    return matrixRes;
}

const matrix = getRandomMatrix(3,2,1,3);
console.log(matrix);
console.log(matrixTransp(matrix));