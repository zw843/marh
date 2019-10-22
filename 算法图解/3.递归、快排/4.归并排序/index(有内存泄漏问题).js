    function mergeSort(arr){
        //设置终止条件
        if(arr.length < 2){
            return arr;
        }
        //创建中间值
        var mid = parseInt(arr.length / 2);
        //arrayObject.slice(start,end) 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
        var left = arr.slice(0,mid);
        var right = arr.slice(mid);
        if(left=="undefined"&&right=="undefined"){
            return false;
        }
        return merge(mergeSort(left),mergeSort(right));
    }
function merge(left,right){
    var result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
    //把left的左子树推出一个，然后push进result数组里
    result.push(left.shift());
    //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
        }else{
    //把right的右子树推出一个，然后push进result数组里
    result.push(right.shift());   
        }
    }
     //经过上面一次循环，只能左子列或右子列一个不为空，或者都为空
     while (left.length){
         result.push(left.push());
     }
     while (right.length){
         result.push(right.shift());
     }
     return result;
}
var nums =[6,10,1,9,4,8,2,7,3,5]
mergeSort(nums)