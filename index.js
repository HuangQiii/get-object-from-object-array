'use strict';

var getFirstIndex = function (arr, propertyName, value) {
    return arr.findIndex(x => x[propertyName] == value);
}

var getFirst = function (arr, propertyName, value) {
    return arr.find(x => x[propertyName] == value);
}

var getAll = function (arr, propertyName, value) {
    return arr.filter(x => x[propertyName] == value);
}

exports.getFirstIndex = getFirstIndex;
exports.getFirst = getFirst;
exports.getAll = getAll;

