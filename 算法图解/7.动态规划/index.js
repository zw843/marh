//1.动态规则的实现方法 实现斐波那契数列
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

//2.背包问题:递归解决方案
function max(a, b) {
    return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0; 
    }
    if (size[n - 1] > capacity) {
       return knapsack(capacity, size, value, n - 1);
    } else {
       return max(value[n - 1] +
          knapsack(capacity - size[n - 1], size, value, n - 1),
          knapsack(capacity, size, value, n - 1));
    } 
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
document.write(knapsack(capacity, size, value, n));

//结果：23

//3.背包问题:动态规划方案
function max(a, b) {
    return (a > b) ? a : b;
}
function dKnapsack(capacity, size, value, n) {
  var K = [];
  for (var i = 0; i <= capacity + 1; i++) {
      K[i] = [];
  }
  for (var i = 0; i <= n; i++) {
     for (var w = 0; w <= capacity; w++) {
        if (i == 0 || w == 0) {
            K[i][w] = 0; 
        } else if (size[i - 1] <= w) {
           K[i][w] = max(value[i - 1] + K[i-1][w-size[i-1]], K[i-1][w]);
        } else {
           K[i][w] = K[i - 1][w];
        }
        document.write(K[i][w] + " ");
     }
  }
  return K[n][capacity];
}
var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
document.write(dKnapsack(capacity, size, value, n));

// 结果：

// 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
// 0 0 0 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
// 0 0 0 4 5 5 5 9 9 9 9 9 9 9 9 9 9
// 0 0 0 4 5 5 5 10 10 10 14 15 15 15 19 19 19 
// 0 0 0 4 5 5 5 10 11 11 14 15 16 16 19 21 21 
// 0 0 0 4 5 5 5 10 11 13 14 15 17 18 19 21 23 
// 23

//4.编写一个函数来查找字符串数组中的最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let result = '';
    let len = Math.min.apply(Math, strs.map(item => item.length));
    for(let i = 0; i < len; i++) {
        let tmp = strs.map(item => item.substring(0, i+1));
        if (new Set(tmp).size === 1) result = tmp[0];
    }
    return result;
};
longestCommonPrefix(["flower","flow","flight"])
// 输入: ["flower","flow","flight"]
// 输出: "fl"

//5.动态规划寻找最长公共子串
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j <= word2.length + 1; ++j) {
           lcsarr[i][j] = 0;
       }
   }

   //上面这一部分初始化了两个变量以及一个二维数组。多数语言对二维数组的声明都很 简单，但在 JavaScript 中需要很费劲地在一个数组中定义另一个数组，这样才能声明一个 二维数组。
   //以下代码片段中的最后一个 for 循环会对这个数组进行初始化，


   for (var i = 0; i <= word1.length; ++i) {
      for (var j = 0; j <= word2.length; ++j) {
         if (i == 0 || j == 0) {
            lcsarr[i][j] = 0;
         } else {
             if (word1[i - 1] == word2[j - 1]) {
               lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
             } else {
               lcsarr[i][j] = 0;
             } 
         }
         if (max < lcsarr[i][j]) {
            max = lcsarr[i][j];
            index = i;
         } 
       }
   }

   //这一部分构建了用于保存字符匹配记录的表。数组的第一个元素总是被设置为 0。如果两 个字符串相应位置的字符进行了匹配，当前数组元素的值将被设置为前一次循环中数组元 素保存的值加 1。
   //比如，如果两个字符串 "back" 和 "cace"，当算法运行到第二个字符处 时，那么数值 1 将被保存到当前元素中，因为前一个元素并不匹配，0 被保存在那个元素 中(0+1)。接下来算法移动到下一个位置，由于此时两个字符仍被匹配，当前数组元素将 被设置为 2(1+1)。由于两个字符串的最后一个字符不匹配，所以最长公共子串的长度是 2。最后，如果变量 max 的值比现在存储在数组中的当前元素要小，max 的值将被赋值给这 个元素，变量 index 的值将被设置为 i 的当前值。这两个变量将在函数的最后一部分用于 确定从哪里开始获取最长公共子串。

   var str = "";
   if (max == 0) {
      return "";
   } else {
       for (var i = index - max; i <= max; ++i) {
         str += word2[i];
       }
       return str; 
   }

   //这一部分代码用于确认从哪里开始构建这个最长公共子串。以变量 index 减去变量 max 的差值作为起始点，以变量 max 的值作为终点:
}
