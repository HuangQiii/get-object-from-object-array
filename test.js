'use strict';

var should = require('should');
var findDataInObjectArray = require('./');

describe('findDataInObjectArray', function () {
    it('should return the first index in the array:', function () {
        findDataInObjectArray.getFirstIndex([{ id: 1, name: 'a' }, { id: 2, name: 'a' }, { id: 3, name: 'b' }, { id: 4, name: 'c' }], 'name', 'a').should.eql(0);
    });

    it('should return -1 if none in the array:', function () {
        findDataInObjectArray.getFirstIndex([{ id: 1, name: 'a' }, { id: 2, name: 'a' }, { id: 3, name: 'b' }, { id: 4, name: 'c' }], 'name', 'd').should.eql(-1);
    });
});