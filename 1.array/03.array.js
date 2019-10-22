var Peoples = function(){
	this.peoples = [];
};
Peoples.prototype.push = function(item){
	this.peoples.push(item);
	return this;
};
//所有元素放入一个字符串
Peoples.prototype.toWord = function(){
	return this.peoples.join('');
};
var p = new Peoples();
p.push('P')
 .push('e')
 .push('o')
 .push('p')
 .push('l')
 .push('e')
 .push('s');
 console.log(p.toWord());