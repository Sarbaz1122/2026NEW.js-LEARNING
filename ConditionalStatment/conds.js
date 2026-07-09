// Conditional statement 
//:: to implement some condition in code 
// // Mostly are sued in CONDITIONAL STATEMENT ARE comparison operator
// | Operator | Meaning                 | Example    |
// | -------- | ----------------------- | ---------- |
// | >        | Greater than            | age > 18   |
// | <        | Less than               | age <18    |
// | >=       | Greater or equal        | marks >=50 |
// | <=       | Less or equal           | age <=30   |
// | ==       | Equal value             | age ==18   |
// | ===      | Equal value & type      | age ===18  |
// | !=       | Not equal               | age !=18   |
// | !==      | Not equal value or type | age !==18  |



// NO-01 if statement//-- it first check the condition is it  true run if not skip the condition

let age = 20
if(age > 18 ){
    console.log("you can vote");
    
}

// :: e.g 
let num = 7;
if(num%2 ===0){
console.log("is even num");

}


// NO-02 else statement 
// ///some time we want some possibilities in that case we use else statement 
// if / if statement / not run then run the else statement


// :: e.g 

let mark = 40;
if(mark >= 50){console.log("pass");


}else{
    console.log("fail");
    
}

let temp = 38;
if(temp >= 35){
    console.log("very hot ");
    
}else{
    console.log("cold ");
    
}

// NO-03 if..else statement 
// else..if  statement use for many choices or many condition 


// :: e.g 
 let totalPrice = 4000;
 if(totalPrice >= 4000){
console.log("you can withdraw");

 } else if (totalPrice >= 2000){
    console.log("add money in account");
    
 }else{
    console.log("you have no money");
    
 }

 let marks = 85;

if(marks >=90){
    console.log("A+");
}
else if(marks >=80){
    console.log("A");
}
else if(marks >=70){
    console.log("B");
}
else if(marks >=60){
    console.log("C");
}
else{
    console.log("Fail");
}

///NO-4 Nested if 
// one if inside in other if 

// -- e.g--
let Age = 25;
let hasCNIC = true;
if(Age >= 18){
    if(hasCNIC){
    console.log("you enter to this website");
    }  
};

// Logical Operators Inside Conditions/`
// `
// AND operator &&
let AcTime = 10;
let classTime = true;
if(AcTime  && classTime){
console.log("you can take the class");

}

//  OR operator ||
let holiday = false;
let sunday = true;

if(holiday || sunday){
    console.log("Enjoy");
}
