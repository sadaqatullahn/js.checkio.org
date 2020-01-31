"use strict";

let assert = require('assert');


function median(data) {
    console.log(data);
    let sorted_data = data.sort(function (a, b) {
            return a - b
        }
    );

    let data_length = data.length;
    if ((data_length % 2) === 1) {
        if (0 in data) {
            return sorted_data[Math.floor(data_length / 2)]
        }
        return sorted_data[Math.floor(data_length / 2)]
    } else {
        return (
            sorted_data[Math.floor(data_length / 2)] +
            sorted_data[Math.floor(data_length / 2) - 1]
        ) / 2
    }
}


if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    assert.equal(median([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
