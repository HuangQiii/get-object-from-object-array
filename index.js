'use strict';

module.exports = function (arr, propertyName, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][propertyName] == value) {
            return i;
        }
    }
    return -1;
};