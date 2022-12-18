
var student = {age : 20}
var printAge = function(a){
    return this.age
}
console.log(printAge.call(student,20))



