/*===================================== Documenting Arrow Function ========================================================================================
# in "code snippet 1" we are learning about "this" keyword. in the given code we use "this.username" to represent current context i.e to access any variable
in given scope called "user" we can use this. for example:-  "this.username" or "this.price".

# 
==========================================================================================================================================================*/

// ========================================================= 1. code snippet ===========================================
const user = {
  username: "nikhil",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

 user.welcomeMessage()
 user.username = "dopa"
user.welcomeMessage()

// console.log(this); // this will give "EMPTY OBJECT" as output but if we run same code on "Browser" we will get "window object" cuz its globle object.

// ==================================================== 2. code snippet ===============================================
function chai() {
  //   console.log(this);
}
chai(); // In Node.js, when you call a normal function (not in strict mode), this refers to the global object.

// ========================================== 3. code snippet =====================================================
function chai() {
  let username = "TMKOC";
  //   console.log(this.username);
}
chai(); // this.username is undefined because username is a local variable, not a property of the this (global) object.

// ========================================== 4. code snippet =====================================================
const chaiCode = function () {
  let username = "nikhil kumar";
  //   console.log(this.username);
};
chaiCode(); //undefined

// ========================================== 5. code snippet =====================================================
const code = () => {
  let username = "nikhil kumar";
  //   console.log(this);
  //   console.log(this.username);
};
code(); // undefined

// ========================================== 6. code snippet(explicit return) =====================================================
() => {}; // arrow function (when we use "return" keyword explicitely)

const addTwo = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwo(3, 2));

// ========================================== 7. code snippet (implicit "return") =====================================================
// if we use  {} => than we have to write "return" statement
// if we use () => than we dont have to write "return" statement
// if we return object {key: "value"} than this will return undefined
// to get return in  "object"  we have to use () to get the result.

const addX = (num1, num2) => num1 + num2;
console.log(addX(3, 3)); // 6

const addY = (num1, num2) => num1 + num2;
console.log(addY(3, 5)); // 8

const addS = (num1, num2) => { username: "mahadev" };
console.log(addS(1, 1)); // undefined

const addZ = (num1, num2) => ({ username: "mahadev" })
console.log(addZ(1, 1));  // { username: 'mahadev' }


