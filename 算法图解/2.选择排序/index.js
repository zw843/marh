// @return: Array
function seleSort(arr){
    var newArr = [];
    var len = arr.length;
    for(var i = 0; i < len; i++){
        var min = arr[0];
        var min_index = 0;
        for(var j = 1; j < len -1;j++){
            if(arr[j] < min){
                min = arr[j];
                min_index = j;
            }
        }
        //splice(位置,数量)
        newArr.push(arr.splice(min_index,1)[0]); 
    }
    return newArr;
}
seleSort([2,5,1,6,88,234]);