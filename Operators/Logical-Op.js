////--LOGICAL OPERATORS/////

///LOGICAL AND  ──► &&
///LOGICAL OR   ──► ||
// LOGICAL NOT  ──► !
 
 
///LOGICAL AND  ──► &&

///::Logical AND (&&) returns true only when ALL conditions are true.
//  If even one condition is false, the result becomes false.

//             Can Enter College?

//         Age >= 18 ? ---- Yes ----┐
//                                  │
//                                  && ----> Enter ✅
//                                  │
//         Has ID ? ----- Yes ------┘


// If one answer is NO

// ↓

// Cannot Enter ❌

console.log("LOGICAL OPERATORS")

let age = 18;
let hasID = true;
console.log(age >=18 && hasID);


let p = 7;
let n = 6;


   
 let cond1 = p > n; 
 cond2 = p ===7;
 console.log("cond1 && cond2", cond1 && cond2);// Ans.will be true
 
 /// FOR FALSE 
//  let cond1 = p < n; 
//  cond2 = p ===7;
//  console.log("cond1 && cond2", cond1 && cond2);// Ans.will be FALSE 
// beCAUSE p is greater then n


/// TRUTH TABLE

// | A     | B     | A && B  |
// | ----- | ----- | ------- |
// | true  | true  | ✅ true  |
// | true  | false | ❌ false |
// | false | true  | ❌ false |
// | false | false | ❌ false |

 

///LOGICAL OR   ──► ||
///::Returns true if at least one condition is true.
// Condition A ── True ─┐
//                      ├── || ──► True
// Condition B ── False ┘

// Only when both are false

// ↓

// False

/// --e.g---
let isAdmin = false;
let isTeacher = true;

console.log(isAdmin || isTeacher); // ans . true because on is true

// let isAdmin = false;
// let isTeacher = false;

// console.log(isAdmin || isTeacher); // false because both are false


//// OR table
// | A     | B     | A || B  |
// | ----- | ----- | ------- |
// | true  | true  | ✅ true  |
// | true  | false | ✅ true  |
// | false | true  | ✅ true  |
// | false | false | ❌ false |




// LOGICAL NOT  ──► !


//Reverses a Boolean value.
// true

// ↓

// false

// false

// ↓

// true

// --- e.g --
let isLoggedIn1 = true;

console.log("!isLoggedIn1",!isLoggedIn1); // give us false

let isLoggedIn2 = false;

console.log("!isLoggedIn2",!isLoggedIn2); // give us true