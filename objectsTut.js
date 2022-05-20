function Person (fName, lName, age)
{
    this.myname = {
        fName,
        lName
    }
    this.age = age
    this.greeting = () =>
    {
        console.log("Hello");
    }
}

function Student (fName, lName, age, grade)
{
    Person.call(this, fName, lName, age)
    this.grade = grade

}
Student.prototype.greeting = () =>
{
    console.log(`Hello my name is ${this.myname.fName} ${this.myname.lName} ,I am ${this.age} old and I got ${this.grade} in O'level. `);
}
var bruce = new Student("Rutagengwa", "Asante Bruce", 17, 8)
bruce.greeting()