// @return: Array
const selSort = (arr) =>{
    let newArr = [];
    let len = arr.length;
    for(let i = 0 ; i < len; i++){
        let min = arr[0];
        let min_index = 0;
        for(let j = 1; j < len -1; j++){
            if(arr[j] < min){
                min = arr[j];
                min_index = j;
            }
        }
       newArr.push(arr.splice(min_index,1)[0]); 
    }
    return newArr;
}
selSort(2,5,1,6,88,234,1);