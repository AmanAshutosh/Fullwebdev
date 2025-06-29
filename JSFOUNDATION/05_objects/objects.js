// singleton
// Object.create

/*
# Objects : Objects are variables too. But objects can contain many values.
# An object literal is a list of name:value pairs inside curly braces {}. [ name:value pairs are also called key:value pairs. object literals are also called object initializers.]
# For accessing an object [objectName["propertyName"]]
# to call a symbol in object we do hte
# Objects are containers for Properties and Methods.
# Properties are named Values.
# Methods are Functions stored as Properties.
# Properties can be primitive values, functions, or even other objects.
# Objects are objects, Maths are objects, Functions are objects, Dates are objects, Arrays are objects, Maps are objects,Sets are objects
# .freeze = freezes the object and after that the value cant be changer further
# .delete help us delete a property from an object
# 
*/

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Ashutosh",
  "full name": "Ashutosh aman",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "ashutosh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser["name"]);

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// Change value of objects

JsUser.email = "ashutosh@microsoft.com";
// Object.freeze(JsUser)
JsUser.email = "nikhil@gpt.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js user");
};
console.log(JsUser.greeting); // function refernce as output
console.log(JsUser.greeting()); // Hello Js user

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
