const data = require('./mock/data')();
const check = require('./mock/check');
const quickSort = require('../src/sort/quick');

if(check.check((data)=>{
    return quickSort(data, 0 , data.length - 1);
},data)) {
    console.log('success');
} else {
    console.error('failed');
};