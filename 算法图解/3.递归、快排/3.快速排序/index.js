//数组的递归函数时，基线条件通常是数组为空或只包含一个元素
//2.递归求和
function sum(n){
    if(n === 0 || n === 1) return n;
    return sum(n - 1) + n;
}
sum(0) // 0
sum(3) //6 (3-1)+(2-1)+(1-1)+3
sum(4)//10 (4-1)+(3-1)+(2-1)+(1-1)+4
//3.递归实现数组求和(数组内下标n的数之和)
//3.1找出基线条件
//3.2每次递归调用都必须离空数组更近一步
function sum2(arr,n){
    if(n <= 0) return 0;
    return sum2(arr,n-1)+arr[n-1];
} 
sum2([1,2,4], 3); // 7 ([1,2,4],3-1)+([1,2,4],2-1)+([1,2,4],1-1)+([1,2,4],0-1)+arr[0-1] => 4 + 2 + 1 + 0 +0  
sum2([2,4,6,8,1],4); //20 ([2,4,6,8,1],4-1)+([2,4,6,8,1],3-1)+([2,4,6,8,1],2-1)+([2,4,6,8,1],1-1)+([2,4,6,8,1],0-1)+arr[0-1] => 8 + 6 + 4 + 2 + 0 + 0

//4.编写一个递归函数来计算列表包含的元素数：
function arrLen(arr){
    if(JSON.stringify(arr) === '[]') return 0;
    //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
    arr.splice(0,1);
    //splice(位置,数量) 方法向/从数组中添加/删除项目，然后返回被删除的项目。
    return 1 + arrLen(arr);
}
arrLen(['asd','s','df',123,false])
//5.找出列表中最大的数字：
function max(arr,n){
    if(n <= 0) return 0;
    return arr[n - 1] > max(arr,n - 1) ? arr[n - 1]:max(arr,n - 1);
}
max([1,3,46,87],3)
// max([-4,5,35,123],24)
//6.递归求字符串长度
function strLen(str){
    if(str.length === 0) return 0;
    return 1 + strLen(str.substring(0,str,length - 1));
    //substring() 方法返回字符串的子字符串。
}
strLen('asdsfdgfghfghjhg')

//7.快速排序
function quicksort(arr){
    if(arr.length == 0) return [];
    let left =[];
    let right = [];
    let center = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < center){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(center,quicksort(right));
    //concat() 方法用于连接两个或多个数组。
}
console.log(quicksort([1,2,3,4,546,7,878,67867,245,145]))