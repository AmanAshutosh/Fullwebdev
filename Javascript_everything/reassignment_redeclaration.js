// Reassignment, redeclaration

/*
Reassignment vs Redeclaration

Keyword      	Reassignable?	   Redeclarable in same scope?
var               yes                yes
let               yes                No
const             No                 No
*/

// snippet 1

var a = 12;
a = 32;

var a = 20; //  allowed  


let b = 12;
b = 32;

// let b = 23; //Error


// snippet 2

var a // Declare
var a = 12; // initialize
a = 13; // update or reassign

var a; // redeclear , only allowed in var not in let or const.


