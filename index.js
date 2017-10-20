'use strict';

var getFirstIndex = function (arr, propertyName, value) {

    return arr.findIndex(x => x[propertyName] == value);
}

var getFirst = function (arr, propertyName, value) {
    return arr.find(x => x[propertyName] == value);
}

var getAll = function (arr, propertyName, value) {
    if (typeof Array.prototype.filter != "function") {
        Array.prototype.filter = function (fn, context) {
            var array = [];
            if (typeof fn === "function") {
                for (var k = 0, length = this.length; k < length; k++) {
                    fn.call(context, this[k], k, this) && array.push(this[k]);
                }
            }
            return array;
        };
    }
    return arr.filter(x => x[propertyName] == value);
}

exports.getFirstIndex = getFirstIndex;
exports.getFirst = getFirst;
exports.getAll = getAll;

