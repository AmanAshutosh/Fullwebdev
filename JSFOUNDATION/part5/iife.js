/* ======================================== IIFE (Immediately Invoked Function expression) ===================================================
1. Is a function that runs immediately after it's defined.
2. Main reason to use IIFE: 
   a). Avoid Polluting the Global Scope: Variables declared inside an IIFE are not accessible outside the function. This helps prevent naming conflicts in larger codebases.
   b). Encapsulation / Private Scope: You can create a private scope for your variables, like modules.
   c). Run Code Once: If you need to initialize something once (like a setup task), IIFE is a clean way to do it.
   d): Old Alternative to Modules: Before ES6 modules and let/const, developers used IIFE to simulate module-like behavior and block scoping.

3. Always put a semicolon ; after an IIFE to avoid accidental chaining or syntax errors.
*/

// ================================================== code snippet 1 ==============================================================

// Syntax:
(function () {
  // code here
})();

(function chai() { 
    // named IIFE
    console.log(`DB connected`);
})();

( () => {
    console.log(`DB connected 2`);
    
})();

((name) => {
  console.log(`DB connected 2 ${name}`);
})("nikhil");