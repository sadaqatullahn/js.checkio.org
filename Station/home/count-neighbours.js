"use strict";
let assert = require('assert');


function countNeighbours(data, row, col) {

    let count = 0;

    for (let i = (row - 1 < 0 ? 0 : row - 1);
         i < (row + 2 >= data.length ? data.length : row + 2);
         i++) {
        for (let j = (col - 1 < 0 ? 0 : col - 1);
             j < (col + 2 >= data[row].length ? data[row].length : col + 2);
             j++) {
            count += data[i][j];
        }
    }
    return (data[row][col] === 1 ? count - 1 : count);
}


if (!global.is_checking) {

    assert.equal(countNeighbours([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
