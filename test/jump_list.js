var JumpList = require('../src/find/jump-list');

function toList(array){
    var head = {isHead: true};
    var current = head;
    for (let i = 0; i < array.length; i++) {
        var local = {
            value: array[i],
        };
        current.next = local;
        current = local;
    }
    return head;
}


var ja = new JumpList(toList([1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,19,20,22,23,24,26,26,26,26,26,27,27,28]));
ja.print();
console.log(ja.find(26));