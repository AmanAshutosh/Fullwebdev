//  SCOPE

/* =========================== Documenting =============================================================
#  Scope determines the visibility and accessibility of variables — where in your code you can access them.
# "GLOBAL SCOPE :" Accessible anywhere in the code.
# "FUNCTION SCOPE :" Accessible only inside the function.
# "BLOCK SCOPE :" Accessible only inside { } like if, for, etc.
# "LEXICAL SCOPE :" Defined by where variables are declared in the code.
# Variables declared with let or const are block-scoped – they exist only within {}.
# var does not respect block scope!
# Scope Chain: When JS looks for a variable, it goes: 
  Inside the current scope.->  Then to its parent (outer) scope. -> All the way up to the global scope.

# var, let, and const Scope Differences:

| Keyword | Scope    | Hoisted | Reassignable | Redeclarable |
| ------- | -------- | ------- | ------------ | ------------ |
| `var`   | Function | Yes     | Yes          | Yes          |
| `let`   | Block    | No\*    | Yes          | No           |
| `const` | Block    | No\*    | No           | No           |


==================================================================================================================*/

// ========================== pract. ====================================================================
// var c = 300

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("inner:", a);
}

//  console.log(a);
// console.log(b);
// console.log(c);

// =======================================================================================================
// Nested Scope

function one() {
  const username = "nikhil";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}
// one();

//  ================================================ if-else ===============================================
if (true) {
  const username = "codekram";
  if (username === "codekram") {
    const website = " Youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++ interesting concept ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num) {
  // this is basic function
  return num + 1;
}
addone(5);

const addTwo = function (num) {
  // this is also basic function / technique but sometimes the "addTwo" is also called expression , kind of variable
  return num + 2;
};
addTwo(5);

// ------------------------------ will check one more example in the same ----------------------------

console.log(addX(5)); // This works because addX is a function declaration, and function declarations are hoisted in JavaScript.
function addX(num) {
  return num + 1;
}


console.log(addY(5)); // this will give error You get an error because addY is a const function expression, and JavaScript doesn't allow accessing const variables before they're initialized.
const addY = function (num) {
  return num + 2;
};

// ================================================================================================
//  Scope Chain

let x = 1;

function outer() {
  let y = 2;

  function inner() {
    let z = 3;
    // console.log(x, y, z); // ✅ 1 2 3
  }

  inner();
}

outer();

// ================================================================================================================

// Lexical Scope
//  Lexical Scope means: Where you write the function determines its scope, not where you call it.

function outer() {
  let x = "outer";

  function inner() {
    // console.log(x); // ✅ 'outer' (looks in parent scope)
  }

  return inner;
}

const fn = outer();
fn(); // Still has access to x due to lexical scope
