# get-object-from-object-array
[![Build Status](https://travis-ci.org/HuangQiii/get-object-from-object-array.svg?branch=master)](https://travis-ci.org/HuangQiii/get-object-from-object-array)

Find index by property name of object inside array 

**Installation**

```
npm install --save get-object-from-object-array
```


**Usage**

```javascript
const findDataInObjectArray = require('get-object-from-object-array');

findDataInObjectArray([{ a: 1, b: 2 }, { a: 10, b: 20 }, { a: 100, b: 200 }], 'a', '10');  // 1
findDataInObjectArray([{ a: 1, b: 2 }, { a: 10, b: 20 }, { a: 100, b: 200 }], 'a', '1000'); // -1
```
