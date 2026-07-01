/////OBJECT is a collection of values it store value in key pairs 
// i mean key:value 

const students = {
    name: "khan",
    age: 22,
    class: 6

};

//// Important Note////
// there are two ways to find or access the exact key value in object
// one is by using dot notation and second is by using bracket notation
// e.g
console.log(students.name) //dot notation
 // bracket notation
//  console.log(students["age"]);


////// How to assign new  value in object
students["age"]= students["age"]+4;
console.log(students["age"]);
