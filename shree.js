class student {
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
 eligibleForPlacement(minAge){
    console.log(this)
    return (minMarks) => {
        console.log(`eligibleForCompany`,this)
        if(this.marks > minMarks && this.age > minAge){
            console.log(`${this.name} is eligible for placement`)
        }
        else if(this.marks < minMarks && this.age < minAge){
            console.log(`${this.name} is not eligible for placement`)
        }
    }
 }
}


let obj1 = new student('Rahul',25, 78)
let obj2 = new student('shree',20, 55)
let obj3 = new student('sam',30, 75)



obj1.eligibleForPlacement(21)(65);
obj2.eligibleForPlacement(21)(65)
obj3.eligibleForPlacement(21)(65)