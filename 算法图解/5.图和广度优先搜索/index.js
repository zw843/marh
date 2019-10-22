//图的表示
let chart = new Map();
chart.set('zs',['lisi','wangwu','zhaoliu']);
chart.set('lisi',[]);
chart.set('wangwu',[]);
chart.set('zhaoliu',[]);
chart.get('zs');

/*
1.图中的每个节点都需要表示；
2.键值对的添加顺序对结果没有影响，因为散列表是无序的；
*/

//图的实现

//1.定义散列表
let pic = new Map();
pic.set('zs',['lisi','wangwu','zhaoliu']);
pic.set('wangwu',['sunqi','maba']);
pic.set('lisi',['maba']);
pic.set('zhaoliu',['laojiu','tom']);
pic.set('sunqi',[]);
pic.set('maba',[]);
pic.set('laojiu',[]);
pic.set('tom',[]);

//2.查询函数
function search(name){
    let queue = [];
    let searched = [];
    queue = queue.concat(pic.get(name));
    //concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

    while(queue.length > 0){
        person = queue.shift();
        //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
        if(!searched.includes(person)){
        //includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
        if(isSeller(person)){
            console.log(`${person} is a mango seller`);
         
            return true;
        }else{
            queue = queue.concat(pic.get(person));
            searched.push(person);
            //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
        }
        }
    }
    return false;
}

//3.检查人的姓名是否以m结尾:如果是,他就是芒果商人
function isSeller(name){
    return name[name.length - 1] == 'm';
}
search('zs')
