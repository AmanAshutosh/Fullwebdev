/* *******************************************************************************************************************************************
 Execution Context → Phases → GEC → FEC → Call Stack

✅ 1. Execution Context:
 An Execution Context is an environment where the JavaScript code is evaluated and executed. It contains information like variables, functions, and the value of this.

 Types:
  Global Execution Context (GEC)
  Function Execution Context (FEC)

 Explanation:
 JavaScript creates a new execution context every time a script or function runs.
 It goes through two phases:
   1. Memory Creation Phase (Hoisting)
   2. Code Execution Phase

✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦

✅ 2. Memory Creation Phase:  (a.k.a. Hoisting Phase)
   In this phase, JavaScript scans the code and allocates memory for variables and functions before executing the code.

   What happens:
    Variables declared with var are hoisted and set to undefined.
    Functions are hoisted with their definitions. 
    Let/const are hoisted too, but stay in the Temporal Dead Zone (TDZ) (not accessible until actual declaration).

    Example: code snippet below.

✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦

✅ 3. Code Execution Phase:
     The Code Execution Phase is the second phase inside an execution context where JavaScript actually executes the code line by line and assigns values to variables or runs functions.

💡 What Happens During Code Execution Phase?
  All the variables that were hoisted as undefined in the Memory Creation Phase are now assigned real values.
  Function calls are made (and new Function Execution Contexts are created).
  Expressions, operations, loops, and conditionals are executed one by one.
  The code runs top-to-bottom inside the current execution context.

  Example: code snippet below.

➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤➤

✅ 4. Global Execution Context (GEC):
 This is the default context created when the JavaScript file first runs. It is created only once.

Explanation:
 Code not inside any function runs in GEC.
 It creates a window object in browsers (or global in Node.js).
 All global variables and functions are part of this context.

Flow:
➤ Memory Creation Phase → Allocates memory for vars/functions.
➤ Code Execution Phase → Executes top-level code.

─── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ───── ⋆⋅☆⋅⋆ ──────── ⋆⋅☆⋅⋆ 

✅ 5. Function Execution Context (FEC):
A new execution context is created every time a function is called.

Explanation:
  Has its own memory phase and execution phase.
  Local variables, parameters, and inner functions are handled here.
  Each FEC is stacked on top of the Call Stack.

Example: code snippet below.

﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
✅ 6. Call Stack:
The Call Stack is a data structure that keeps track of the function calls in a JavaScript program. It operates in LIFO (Last In, First Out) order.

Explanation:
 Whenever a function is invoked, it's pushed onto the call stack.
 When the function completes, it's popped off the stack.
 It helps JavaScript know which function is currently running and where to return after completion.

 Example: code snippet below.

**********************************************************************************************************************************************/

// ══════════════════════════════════════════════════════════ code ═════════════════════════════════════════════════════════════════════════════

console.log("🌍 Program Starts"); // Top of Global Execution Context

// --------------------------- Memory Creation Phase (GEC)
// var → hoisted with undefined
// let → hoisted but in TDZ (not accessible until declaration)
// function → hoisted with definition

var x = 10;                  // x is hoisted as undefined, now assigned 10
let y = 5;                   // y is in TDZ, now assigned 5

function outer(a) {         // outer is hoisted with its entire definition
  var outerVar = 100;       // Memory created inside FEC for outerVar
  console.log("▶️ outer called with:", a);

  function inner(b) {       // inner is hoisted inside outer’s FEC
    let result = a + b + outerVar;
    console.log("🔁 inner result:", result);
  }

  inner(20); // Call to inner → creates new FEC
}

// --------------------------- Code Execution Phase (GEC begins)
// Step-by-step execution starts now

outer(30);  // Call to outer → new FEC is created
console.log("🧮 x * y =", x * y); // Outputs: 50

console.log("🌍 Program Ends"); // End of GEC

