// 1. Create 2 objects, parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parentProto = {
    objOne(name,place,dob){
        this.name = name;
        this.place = place;
        this.dob = dob;
    },
    objTwo(){
        console.log(`Hello, This is ${this.name} here. I am from ${this.place}`);
    }
}
const childProto = Object.create(parentProto);

childProto.objOne("Gayathri","Bangalore",1998);
childProto.objTwo();
console.log(childProto);

//2. Write code to explain prototype chaining

const PersonProto = {
    calcAge() { 
        console.log(`My name is ${this.firstName} ${this.lastName} and my current age is ${2022 - this.birthYear}`);
    },
    initialise(firstName, lastName, birthYear){
      this.firstName = firstName ;
      this.lastName = lastName;
      this.birthYear = birthYear;
    }
}

const jarvis = Object.create(PersonProto);

jarvis.initialise('steven', 'richard', 2002);
console.log(jarvis);
jarvis.calcAge();

const StudentProto = Object.create(PersonProto);

StudentProto.initial = function(firstName,lastName,birthYear,course){
    PersonProto.initialise.call(StudentProto,firstName,lastName,birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`studenct name is ${this.firstName} ${this.lastName} and is pursuing course as ${this.course}`);
}
const acchu = Object.create(StudentProto);
acchu.initial('archana','dev',2000,'developer');
acchu.introduce();
acchu.calcAge();

// 3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let arrList = [
    [1,2,3,4,5],
    [6,7,8,9,0]
]

let totalSum = arrList[0].map((a,indx) =>
arrList.reduce((acc, cur) => 
acc + cur[indx], 0));
    
console.log(totalSum);

// 4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function Own(fname,lname,id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }

    Own.prototype.place = "Bangalore";

    const inhert = new Own("gayathri","DR","R18");
    console.log(`I am ${inhert.lname} from ${inhert.place}`);
    console.log(inhert);