
function quick(array, left, right){
    if (left >= right) {
        return array;
    }
    let privot = right;
    let leftP = left;
    let rightP = right-1;

    while(leftP < rightP){
        while(array[leftP] <= array[privot] && leftP < rightP){
            leftP ++
        }
        while(array[rightP] >= array[privot] && leftP < rightP){
            rightP --
        }

        if (leftP == rightP) {
            break;
        }
        let tmp = array[leftP];
        array[leftP] = array[rightP];
        array[rightP] = tmp;
    }

    if (array[leftP] <= array[privot]) {
        let tmp = array[leftP+1];
        array[leftP+1] = array[privot];
        array[privot] = tmp;
        quick(array, left, leftP)
        quick(array, leftP+1, right);
    } else {
        let tmp = array[leftP];
        array[leftP] = array[privot];
        array[privot] = tmp;
        quick(array, left, leftP-1)
        quick(array, leftP, right);
    }

    return array;
}


module.exports = data => quick(data, 0 , data.length - 1)