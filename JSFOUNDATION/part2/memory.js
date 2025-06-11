//  stack (Primitive) = [boolean,BigInt,string,symbol,number,null,undefined,]
//  Heap (Non-primitive) = [array, function, objects]

// stack example

let myYoutubename = "codelessnesstv"


let anothername = myYoutubename;  // console.log(anothername);
anothername = "5parindey";

console.log(myYoutubename); // codelessnesstv
console.log(anothername); // 5parindey


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ashutosh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
