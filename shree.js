
var obj = {num : 5}
var multiplyNum = function(a, b, c){
    return this.num * a *b*c
};
console.log(multiplyNum.apply(obj,[1,2,3]))


