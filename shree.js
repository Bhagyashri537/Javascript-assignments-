
var obj = {num : 5}
var multiplyNum = function(a){
    return this.num * a
};
console.log(multiplyNum.call(obj,10))


