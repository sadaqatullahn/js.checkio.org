"use strict";

let assert = require('assert');

function nonUniqueElements(data) {
    if (data.length <= 1) {
        return []

    }
    const dataItem = {};


    for (let i = 0; i < data.length; i++) {
        if (dataItem.hasOwnProperty(data[i])) {
            dataItem[data[i]] += 1;
        } else {
            dataItem[data[i]] = 1;
        }
    }
    let newData = [];

    for (let item = 0; item < data.length; item++) {
        if (dataItem[data[item]] >= 2) {
            newData.push(data[item]);
        }
    }

    return newData;

}

if (!global.is_checking) {
    // nonUniqueElements([10, 9, 10, 10, 9, 8]);

    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
