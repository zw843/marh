//  @return: index
function search(array,min,max,target){
    if(min > max) return -1;
      //return -1;表示函数失败
    var mid = Math.floor((min + max) /2);
     //向下取整中间数
    if(array[mid]>target){ // 50>30
        return search(array,min,mid - 1,target);
      //中间数大于目标  最大数为中间数前半部分   
    }else if(array[mid] < target){// 50<80
        return search(array,mid+1,max,target);
    //中间数小于目标  最小数为中间数后半部分
    }else{
        return mid;
    //中间数和目标相等 返回中间数
    }
}
search( [5,6,7,8,9,10,213,12],0,8,7);

//min max 分别表示数组开始和结束下标位置 最小下标值不能大于target