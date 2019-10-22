var voted = new Map();
function checkVoted(name){
    if(voted.has(name)){
        console.log('弹出')
    }else{
        voted.set(name,true);
        console.log('投票')
    }
}
checkVoted('zw')