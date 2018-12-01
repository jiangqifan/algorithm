const data = require('./mock/data')();
const check = require('./mock/check');
const mergeSort = require('../src/sort/merge');

if(check.check((data)=>{
    return mergeSort(data);
},data)) {
    console.log('success');
} else {
    console.error('failed');
};