


function binaryFind(array, value){

    let left = 0;
    let right = array.length - 1;
    while(left < right){
        let p = left + ((right - left) >> 1);
        if (array[p] === value) {
            return p;
        }
        if (array[p] > value) {
            right = p - 1;
        } else {
            left = p + 1;
        }
    }
    return -1;
}

//TODO
//第一个不大于value的值
//

module.exports = binaryFind;