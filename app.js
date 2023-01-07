//  HW-15
/*****************************************************************************/
const array = [20, -10, 333, 1000, 552, 7, -7];

//  task sort.1
function evenOddSort(array) {
    //  example:
    //  input array     [20, -10, 333, 1000, 552, 7, -7]
    //  output array    [20, -10, 1000, 552, 333, 7, -7]
    const res = array.sort(function (e1, e2) {
        return (e1 % 2 === 0 && e2 % 2 !== 0) ? -1 :
            (e2 % 2 === 0 && e1 % 2 !== 0) ? 1 : 0;
    });
    return res;

};

//  task sort.2
function oddEvenSort(array) {
    //  example:
    //  input array     [20, -10, 333, 1000, 552, 7, -7]
    //  output array    [333, 7, -7, 20, -10, 1000, 552]
    const res = array.sort(function (e1, e2) {
        return (e1 % 2 !== 0 && e2 % 2 === 0) ? -1 :
            (e2 % 2 !== 0 && e1 % 2 === 0) ? 1 : 0;
    });
    return res;
}

//  task sort.3
function evenAscOddDescSort(array) {
    //  example:
    //  input array     [20, -10, 333, 1000, 552, 7, -7]
    //  output array    [-10, 20, 552, 1000, 333, 7, -7]
    let res = evenOddSort(array);
    res = array.sort(function (e1, e2) {
        return (e1 % 2 === 0 && e2 % 2 === 0) ? (e1 - e2) :
            (e1 % 2 !== 0 && e2 % 2 !== 0) ? (e2 - e1) : 0;
    });
    return res;
}
/*****************************************************************************/
console.log(`Result of evenOddSort([20, -10, 333, 1000, 552, 7, -7]) is: ${evenOddSort(arraySort).join(", ")}`);
console.log(`Result of oddEvenSort([20, -10, 333, 1000, 552, 7, -7]) is: ${oddEvenSort(arraySort).join(", ")}`);
console.log(`Result of evenAscOddDescSort([20, -10, 333, 1000, 552, 7, -7]) is: ${evenAscOddDescSort(arraySort).join(", ")}`);
/*****************************************************************************/

//  HW-15
/*****************************************************************************/
//  task reduce.1
function getMin(array) {
    return array.reduce(function (accumulator, currentValue) {
        return Math.min(accumulator, currentValue);
    });
}

//  task reduce.2
function getMax(array) {
    return array.reduce(function (accumulator, currentValue) {
        return Math.max(accumulator, currentValue);
    });
}

//  task reduce.3
function getAvg(array) {
    return array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }) / array.length;
}

//  task reduce.4
function getMinMaxAvg(array) {

    /********************************************************************************************/
    /*  Disclaimer:                                                                             */
    /*  I did a lot of Googling.                                                                */
    /*  Probably there is a different, much easier solution, based on our current knowledge.    */
    /********************************************************************************************/
    
    return array.reduce(function (accumulator, currentValue) {
        accumulator.min = Math.min(accumulator.min, currentValue);
        accumulator.max = Math.max(accumulator.max, currentValue);
        accumulator.sum += currentValue;
        return accumulator;
    }, { min: 0, max: 0, sum: 0 });
}
let result = getMinMaxAvg(array);
let resMin = result.min;
let resMax = result.max;
let resAvg = result.sum / array.length;

/*****************************************************************************/
console.log(`Result of getMin([20, -10, 333, 1000, 552, 7, -7]) is: ${getMin(array)}`);
console.log(`Result of getMax([20, -10, 333, 1000, 552, 7, -7]) is: ${getMax(array)}`);
console.log(`Result of getAvg([20, -10, 333, 1000, 552, 7, -7]) is: ${getAvg(array)}`);
console.log(`Result of getMinMaxAvg([20, -10, 333, 1000, 552, 7, -7]) is: Minimal - ${resMin}; Maximal - ${resMax}; Average - ${resAvg}`);
/*****************************************************************************/