export function ascendingSortArray(array) {
    return array.sort(function (a, b) {
        return a - b
    })
}


export function descendingSortArray(array) {
    return array.sort(function (a, b) {
        return b - a
    })
}


export function print(argument) {
    console.log(argument)
}
