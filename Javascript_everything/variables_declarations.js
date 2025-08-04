// variables & declarations

/*
✿ Js me aise words jinse kuch ho skta hai wo sare words JS ke "KEYWORDS" hai (if, for, while, else... etc).
✿ var - old and risky
✿ var - scoped to function and reassigned.
✿ var - Can be redeclared and reassigned.
✿ var - Hoisted to the top with undefined value.
✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ 
✿ let - Modern and safe.
✿ let - scoped to block {}.
✿ let - can be reassigned but not redeclared.
✿ let - hoisted, but stays in the temporal dead zone (TDZ)
𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭
✿ const - scoped to blocks
✿ const - cannot be reassigned or redeclared
✿ const - value must be assigned at declaration.
✿ const - TDZ applies here too.

✿ "I declare, I initialize, I never redeclare (unless it’s var).
    I let my values change, but my const is forever."
*/

// sample snippet
var a; // declaration
var a = 12; // declaration & initialize
let b = 12;
const c = 12;

// Snippet 1
console.log(score); // undefined cuz hoisted 
var score = 20;

// Snippet 2
var score = 10;
console.log(score); // 10

// Snippet 3
var score = 20;
console.log(score); // 20 reassingned


// Snippet 4
let age = 12;
age = 13;
// console.log(e); // can be re-assigned but not redeclared.
// let age = 40; // Error (same block)


// Snippet 5
const PI = 3.4;
// PI = 3.14159; // Error
// but if "const" holds an object/array, we can still change its content.

const student = { name: "nik" };
student.name = "vaishno" // ok
// student = {}; // Error


// snippet 6
var x = 1; // global 
{
    var x = 2; // global b
}
console.log(x); // 2


// snippet 7
let a = 10; // block scope //global 
{
    let a = 20;
    console.log("Inside:", a); // 10
}
console.log("Outside:", a); // 20

