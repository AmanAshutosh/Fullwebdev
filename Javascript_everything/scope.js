// Scope (global, block, function)

/*
> Block Scope : code inside {} like in loops, if, etc..
> Function Scope : Code inside a function.
> let & const  follow "Block scope".
> var ignore block scope - which leads to bugs.

*/



// Snippet 1

{
    var x = 5;
    let y = 10;
    const z = 15;
}

console.log(x); // 5
// console.log(y); // Reference Error
// console.log(z); // Reference error


// Snippet 2 {Global Scope}

var a = 10;
let b = 20;
const c = 30; 

console.log(a, b, c); // accessible here



// Snippet 3 { function Scope}

function test() {
    var l = 1;
    let m = 2;
    const n = 3;

    console.log(l, m, n); // accessible here
    
}

test();
//  console.log(l); Error: not defined outside



// Snippet 4 { Block Scope- accessible only inside the block if, for, {} }

if (true) {
    var p = 100; // function/ global scoped
    let q = 200; // block scoped
    const r = 300; // block scoped
    console.log(p, q, r);
    
}

console.log(p); // 100
console.log(q); // Error
console.log(r); // Error


