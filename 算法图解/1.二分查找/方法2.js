//  @return: index
function search(array,min,max,target){
    while(min <= max){
        var mid = Math.floor((min + max) /2);
        if(array[mid] > target){
            max = mid - 1;
            //中间数大于目标 最大数在中间数前半部分
        }else if(array[mid] < target){
            min = mid + 1;
            //中间数小于目标 最小数在中间数后半部分
        }else{
            return mid;
        }
    }
    return -1;
}
search([1,2,3,4,5,6,7,8,9,],0,4,2)
//min max 分别表示数组开始和结束下标位置 最小下标值不能大于target