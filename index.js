'use strict';

var getFirstIndex = function (arr, propertyName, value) {
    if (typeof Array.prototype.findIndex != "function") {
        for (var i = 0, length = arr.length; i < length; i++) {
            if (arr[i][propertyName] == value)
                return i;
        }
        return -1;
    }
    return arr.findIndex(x => x[propertyName] == value);
}

var getFirst = function (arr, propertyName, value) {
    if (typeof Array.prototype.find != "function") {
        for (var i = 0, length = arr.length; i < length; i++) {
            if (arr[i][propertyName] == value)
                return arr[i];
        }
        return undefined;
    }
    return arr.find(x => x[propertyName] == value);
}

var getAll = function (arr, propertyName, value) {
    if (typeof Array.prototype.filter != "function") {
        var array = [];
        for (var i = 0, length = arr.length; i < length; i++) {
            if (arr[i][propertyName] == value)
                array.push(arr[i]);
        }
        return array;
    };
    return arr.filter(x => x[propertyName] == value);
}

exports.getFirstIndex = getFirstIndex;
exports.getFirst = getFirst;
exports.getAll = getAll;

