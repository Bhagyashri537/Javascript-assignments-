
class Student {
    static count = 0;
    constructor(name,age,phone_no,marks){
        this.name = name;
        this.age = age;
        this.phone_no = phone_no;
        this.marks = marks;
        Student.countStudents()
    }

    static countStudents(){
        return(Student.count++)
    }


isEligible(){
    if(this.marks >= 40){
        console.log(`${this.name} is eligible`)
    }
    else if(this.marks<40){
        console.log(`${this.name} is not eligible`)
    }
}
}

let obj1 = new Student('Ram', 15, 123415, 25)
let obj2 = new Student('Pooja', 15, 123245, 48)
let obj3 = new Student('Sam', 15, 123435, 55)
let obj4 = new Student('Ravi', 15, 123445, 35)
let obj5 = new Student('Rohan', 15, 123465, 75)

console.log(Student.countStudents())
obj1.isEligible();
obj2.isEligible();
obj3.isEligible();
obj4.isEligible();
obj5.isEligible();