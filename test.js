'use strict';

var should = require('should');
var findDataInObjectArray = require('./');

describe('findDataInObjectArray', function () {
    it('should return the first element in the array:', function () {
        findDataInObjectArray([{ a: 1, b: 2 }, { a: 10, b: 20 }, { a: 100, b: 200 }], 'a', '10').should.eql(1);
    });

    it('should the first n elements of the array:', function () {
        findDataInObjectArray([{ a: 1, b: 2 }, { a: 10, b: 20 }, { a: 100, b: 200 }], 'a', '1000').should.eql(-1);
    });
});