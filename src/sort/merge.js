
function merge (leftArray, rightArray){

    let result = [];
    let leftP = 0;
    let rightP = 0;

    do{
        if (leftArray[leftP]  >= rightArray[rightP]) {
            result.push(rightArray[rightP++]);
        } else {
            result.push(leftArray[leftP++]);
        }
    } while(leftP < leftArray.length && rightP < rightArray.length)

    if (leftP < leftArray.length) {
        for (;leftP < leftArray.length; leftP++) {
            result.push(leftArray[leftP]);
        }
    } else {
        for (;rightP < rightArray.length; rightP++) {
            result.push(rightArray[rightP]);
        }
    }
    return result;
}

function mergeSort(array, left, right){
    if (left == right){
        return [array[left]];
    }
    let center = (right + left)>>1;
    let leftArray = mergeSort(array, left, center);
    let rightArray = mergeSort(array, center+1, right);
    let result = merge(leftArray, rightArray);
    return result;
}


module.exports = data => mergeSort(data, 0 , data.length - 1)
