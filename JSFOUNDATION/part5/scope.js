//  SCOPE

/*
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



*/


// var c = 300

let a = 300;

if (true) {
  let a = 10;
    const b = 20;
    console.log("inner:", a);
    
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


 console.log(a);
// console.log(b);
// console.log(c);




//  Scope Chain

let x = 1;

function outer() {
  let y = 2;

  function inner() {
    let z = 3;
    console.log(x, y, z); // ✅ 1 2 3
  }

  inner();
}

outer();

// Lexical Scope
//  Lexical Scope means: Where you write the function determines its scope, not where you call it.

function outer() {
  let x = "outer";

  function inner() {
    console.log(x); // ✅ 'outer' (looks in parent scope)
  }

  return inner;
}

const fn = outer();
fn(); // Still has access to x due to lexical scope
