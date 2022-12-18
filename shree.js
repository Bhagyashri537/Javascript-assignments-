
let multiply = function(x,y){
    console.log(x*y)
};
let multiplyBytwo = multiply.bind(this, 2)
multiplyBytwo(5)

let multiplyBythree = multiply.bind(this, 3)
multiplyBythree(5)