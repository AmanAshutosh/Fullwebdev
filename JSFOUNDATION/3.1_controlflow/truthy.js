// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ===============================================================

// Truthy values
// "0", 'false', " ", [], {}, function(){},


// array
const usersEmail = [];
if (usersEmail.length === 0) {
    console.log("array is empty");
}

// obj
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


const userEmail = "a@ashutosh.ai"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
}

/*================================== Nullish coalescing operator (??) : null undefined ===========================================

The nullish coalescing operator (??) is used to provide a default value when the left-hand operand is either null or undefined.
✅ Syntax
let result = value ?? defaultValue;

If value is null or undefined, then result becomes defaultValue.
If value is anything else (even 0, false, ''), then result is value.

✅ When to Use
Use ?? when you want to assign a fallback only if a value is truly absent (null or undefined), and not if it's just falsy like 0 or false.
*/

let val1;
// val1 = 10 ?? 15
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

/* ================ Terniary operator ========================
condition ? true : flase
*/

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

