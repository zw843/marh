var List = function(){
	this.items = [];
	this.pos = 0;
};
//Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
Object.defineProperty(List.prototype,'length',{
	get:function(){
		return this.items.legnth;
	}
});
List.prototype.clear = function(){
	this.items = this.items.filter(function(){return false});
};
List.prototype.toString = function(){
	return this.items;
};
List.prototype.getElement = function(){
	if(this.length === 0){
		return null;
	}
	return this.items[this.pos];
}
//slice() 方法从已有的数组中返回选定的元素
List.prototype.insert = function(item){
	this.items.slice(this.pos + 1,item);
};
List.prototype.append = function(item){
	this.items.push(item)
};
//ndexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
//splice(index,howmany) 方法向/从数组中添加/删除项目,然后返回被删除的项目 index位置 howmany数量
List.prototype.remove = function(item){
		var idx = this.items.indexOf(item);
		this.items.splice(idx,1);
}
//front前面
List.prototype.front = function(){
this.pos = 0;
};
List.prototype.end = function(){
	this.pos = this.length - 1;
}
List.prototype.prev = function(){
	if(this.pos > 0){
		this.pos--;
	}
};
List.prototype.next = function(){
	if(this.pos < this.length - 1){
		this.pos++;
	}
};
List.prototype.getPos = function(){
	return this.pos;
};
List.prototype.moveTo = function(pos){
	if(pos >=0 && pos < this.length){
		this.pos = pos;
	}
};
module.exports = List;