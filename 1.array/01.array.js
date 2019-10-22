var Arr = function(){
	this.arr = [];
};
//末尾添加
Arr.prototype.push = function(item){
	this.arr.push(item);
};
//求和
Arr.prototype.sum = function(){
	var i;
	var sum = 0;
	for(i=0,l=this.arr.length;i<l;i++){
		sum += this.arr[i];
	}
	return sum;
};
//平均值
Arr.prototype.avg = function(){
	return this.sum() / this.arr.length;
};
//定义随机数值
g = new Arr();
for(var i = 0; i < 100; i++){
	//Math.floor(Math.random()*(m - n) + n);
	g.push(Math.round(Math.random() * 40 + 60));
}
console.log(g.avg());