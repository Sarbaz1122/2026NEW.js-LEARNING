/// Assign No.1
// String Assignment
let name = "khan";
let city = "Karachi";
const favoriteLanguage= "javascript";
console.log(name, city, favoriteLanguage);

/// Assign No.2
// Boolean Assignment
let isStudent = true;
let isMarried = true;
let hasLaptop = false;
console.log(isStudent);
console.log(isMarried);
console.log(hasLaptop);


// Assign No.3
//Undefined Assignment
let email;
console.log(email);

///Question: WHAT IS printed in the console ? WHY ?
// Answer: // Answer:
// undefined is printed because the variable 'email' is declared but no value is assigned to it.
// JavaScript automatically assigns the value 'undefined' to uninitialized variables.


// Assign No.4
// Null Assignment
let middleName = null;
console.log(middleName)

// Q: why do we use Null?
//null is used to represent the intentional absence of a value. It tells the program
//  that a variable currently has no object or no meaningful value.

// Assign No.5
// BigInt Assignment
let population = BigInt("123456789012345678901234567890123");
console.log(population)

///Q. why can,t a normal number store this safely?
//ANS.Because JavaScript Number can only store big numbers up to a limit.
//  After that, it gives the wrong answer.
//For very big numbers, use BigInt.

// Assign No.6
// Symbol Assignment
let id1 = "user";
let id2 = "user";
console.log(id1 === id2);

/// Q.. why is the result false?
//Ans..// Answer:
// If id1 and id2 are strings ("user"), the result is true because both have the same value.
//
// If id1 and id2 are Symbols created with Symbol("user"),
// the result is false because every Symbol is unique,
//  even if it has the same description.
//Symbol("user")  → Unique ID #1
// Symbol("user")  → Unique ID #2


