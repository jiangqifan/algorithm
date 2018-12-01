
function JumpList(list, indexLevel=3){
    var data = list;
    var indexes = [];

    for (let i = 0; i < indexLevel; i++){

        let downList = i==0?data:indexes[i-1];
        let head = {isHead: true, down: downList};
        let current = head;
        
        var k = 0;
        while(downList.next){
            if (k++%3 !== 0) {
                downList = downList.next;
                continue;
            }
            let localItem = downList.next;
            let localIndex = {value: localItem.value, down: localItem};
            current.next = localIndex;
            current = localIndex;
            downList = downList.next;
            
        }
        indexes[i] = head;
    }

    this.print = function(){

        var s = '';
        var list = data;
        while(list.next){
            s += `${list.next.value}, `
            list = list.next;
        }
        console.log(s);
        for (var i = 0; i < indexes.length; i++) {
            var s = '';
            var list = indexes[i];
            while(list.next){
                s += `${list.next.value}, `
                list = list.next;
            }
            console.log(s);
        }
    }

    this.find = function(value){
        let index = null;
        for (let i = indexes.length - 1; i >= -1; i--) {
            if (index) {
                index = index.down;
            } else {
                index = indexes[i];
            }
            while (index.next && index.next.value <= value && index.value != value) {
                index = index.next;
            }
            console.log({
                value: index.value,
                level: i,
            });
        }
        if (index.value === value) {
            return index;
        }
    }
}

module.exports = JumpList;