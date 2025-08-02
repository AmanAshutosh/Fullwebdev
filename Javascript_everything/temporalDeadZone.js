// Temporal Dead Zone
 
/* -------------------------------------------------- >> NOTES << -------------------------------------------------------------------------
>> Javascript prepares memory before running code.
>> It Moves all declarations to the top - this is called "Hoisting"  BUT var is hoisted and set to undefine.
>> var is hoisted and set to undefined.
>> let and const are hoisted but not initialized-  so accessing them early gives "Reference Error"
------------------------------------------------------------------------------------------------------------------------------------------*/


// Snippet 1
console.log(a);
let a = 12;  // Cannot access 'a' before initialization. (ERROR)

