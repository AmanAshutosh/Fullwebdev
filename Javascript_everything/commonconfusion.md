1. Why "var" leaks outside block but let doesn't?

>> snippet 1: 
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a); // (Right) 1
console.log(b); // (Error) ReferenceError

>> "var" is Right cuz it only respects "Functions" and so when called outside the block scope it give the output.
>> BUT "let" respects ({}) scope so when called outside the scope it gives Error.

________________________________________________________________________________________________________________
2. Why const allows changing object properties.

>> snippet 2
const person  = { name: "ashutosh" };
person.name = "Sharma"; // ✓ allowed
person = {}; // ✗ Not allowed


>> Aisa kyu hua ??
person.name = "sharma"; // allowed
>> but
person = {}; // Not allowed

>> const says you can't use "=" to put New values. but update is allowed.
