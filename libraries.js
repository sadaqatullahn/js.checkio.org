Array.prototype.numberSort = function () {
    return  this.sort(function (a,b) {
        return a > b
    })
};

String.prototype.findNumber = {};