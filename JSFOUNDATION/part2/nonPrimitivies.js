// Javascript is Dynamically typed language

// Reference  Non Primitive = Array, Objects, Functions (typeof == function mostly)



/*
type of val = result


undefined = undefined
Null = object
Boolean = boolean
Number = number
String = string
object (native and does not implement [[Call]]) = object
object (native or host and does implement [[Call]]) = function
object (host and does not implement [[call]]) = implementation-defined except may not be "undefined", "boolean", "number", or "string"
*/


// Object
let username = {
    firstname: "ashutosh",
    isLoggedin: true,
};

username.firstname = "Mr. A";
username.lastname = "Aman"


// console.log(username.firstname);
// console.log(username.lastname)
// console.log(username);
// console.log(typeof username);



// function
let today = new Date();
// console.log(today.getDate());

// Array

let heros = ["a", "b", "c", true]
let anotherUser = ["Ashutosh", true]

// console.log(anotherUser[0]);

console.log(1 + "1")

let isValue = true;
console.log(Number(isValue));

let isValue1 = 2;
console.log(typeof Number(isValue));

let isValue2 = "2abc";
console.log(typeof Number(isValue));