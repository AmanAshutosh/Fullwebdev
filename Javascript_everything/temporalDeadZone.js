// Temporal Dead Zone
 
/* -------------------------------------------------- >> NOTES << -------------------------------------------------------------------------
>> Javascript prepares memory before running code.
>> It Moves all declarations to the top - this is called "Hoisting"  BUT var is hoisted and set to undefine.
>> var is hoisted and set to undefined.
>> let and const are hoisted but not initialized-  so accessing them early gives "Reference Error"
>> TDZ = Utna area jitne mein JS ko pata to hai ki variable exist krta hai par wo aapko value nahi de saskta 
>> var -> hoist -> undefined
>> let -> hoist -> but gives ReferenceError 
>> const -> hoist -> but gives ReferenceError

------------------------------------------------------------------------------------------------------------------------------------------*/


// Snippet 1
// console.log(a);
// let a = 12;  // Cannot access 'a' before initialization. (ERROR)


//  Snippet 2
// console.log(a);
// const a = 12;  // Cannot access 'a' before initialization. (ERROR)

// Snippet 3
// console.log(a);
// var a = 12; // undefined


/* ---------------------------->> >> Hoisting inpact per type << << -----------------------------------------------------------
Ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declare paart upar chala jaata hai and uska initialization part neeche reh jata hai.
>> Hoisting — "JavaScript lifts declarations to the top!"
------------------------------------------------------------------------------------------------------------------------------------*/

// Snippet 1 
var a = 12;
// this will get splitted in 2 parts

// part 1 
var a = undefined;

// part 2
var a = 12;

// Snippet 2
// Before running your code, Javascript secretly rewrites this:
console.log(name);
var name = "Ashu";
// as this 
var name;
console.log(name); // undefined
name = "Ashu";
//  So it "knows" the name but not the value.


// But with let and const, it's different:
console.log(age); // ❌ Error!
let age = 10;
// They get hoisted too, but they are kept in a "dead zone" until they are declared properly.

// Hosting — NOT a thing in JavaScript
// Some people say “hosting” by mistake.
//  ✅ Correct term is Hoisting — remember: JavaScript lifts code like a weightlifter 🏋️
// "Hoisting is lifting, Hosting is a myth — don't confuse the gift!"
