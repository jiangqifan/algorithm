

function isSorted(array){
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
            return false;
        }
    }
    return true;
}

function check(fn, datas){
    for (let i = 0; i < datas.length; i++){
        let result = fn(datas[i]);
        console.log(result);
        if (!isSorted(result)) {
            return false;
        }
    }
    return true;
}


module.exports = {
    check: check,
}