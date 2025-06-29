//  function

/*
# functions simply means what ever code we have written 1line, two line or 10 line what ever its closed in a package and it can be used where or when ever we need or want to use it as a copy of that particular function.

#  explanation : we will take example of below function called "sayMyName" [
  function = A keyword used to declare a function
  sayMyName = function name
  () = These are used to define parameters (inputs) if any. In this case, it's empty, meaning the function takes no input.
  {} = scope or body. It contains the statements (code) that will run when the function is called.
  console.log("a") = Prints "hi" to the console
  sayMyName() =   This is a function call. It executes the code inside the function named sayMy.
  sayMyName = this is called reference
  sayMyName() = this is called execution
]
*/

function sayMyName() {
  console.log("A");
  console.log("s");
  console.log("h");
  console.log("u");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  // number1 & number2 are parameter
  // let result = number1 + number2
  // return result
  // console.log("nikhil"); // this code wont get executed because its after the return statement but if we move this above return it will get printed

  return number1 + number2;
}

addTwoNumbers(3, 4); // here 3 and 4 is argument

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter a user name");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("nikhil"));
// console.log(loginUserMessage("nik"));

function calculateCartprice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartprice(200, 400, 500, 9000));

const user = {
  username: "ashutoshsingh",
  price: 999,
  location: "hajipur",
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is  ${anyobject.price} and the product is coming from ${anyobject.location}`
  );
}

// handleObject(user)
handleObject({
  username: "nik",
  price: 8888,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[0];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 500]));
