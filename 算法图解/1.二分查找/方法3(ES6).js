//  @return: index
let Search = (arr,val)=>{
    let start = 0;
    let end = arr.length - 1;
    let guess;
    while(start <= end){
        let mid = Math.ceil((start + end) / 2);
        //Math.ceil() === 向上取整
        guess = arr[mid];
        if(guess === val) return mid;
        if(guess > val){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
Search([1, 3, 5, 7, 9,24,40,44],44 );