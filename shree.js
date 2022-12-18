
var obj = {num : 5}
var multiplyNum = function(a, b, c){
    return this.num * a * b * c
};
var arr = [1,2,3]
var bound = multiplyNum.bind(obj);
console.log(bound(1,2,3));

