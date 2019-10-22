//1.斐波那契函数：1,1,2,3,5,8.
function fabnc(n){
    if(n === 1 || n === 2) return 1;
    return fabnc(n-1) +fabnc(n-2);
    //if 条件就是基线条件，线条件则指的是函数不再调用自己 调用 fabnc(n-1) + fabnc(n-2) 就是递归条件 递归条件指的是函数调用自己 case:(6-1)+(5-2)=8 
}
fabnc(11);
//1.1动态规则的实现方法 实现斐波那契数列
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0; 
    }
    if (n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
dynFib(11)
/*
    在这个数组 val 中保存了中间结果。如果要计算的斐波那契数是 1 或者 2，那么 if 语 句会返回 1。否则，数值 1 和 2 将被保存在 val 数组中 1 和 2 的位置。循环将会从 3 到输 入的参数之间进行遍历，将数组的每个元素赋值为前两个元素之和，循环结束，数组的最 后一个元素值即为最终计算得到的斐波那契数值，这个数值也将作为函数的返回值。
*/

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