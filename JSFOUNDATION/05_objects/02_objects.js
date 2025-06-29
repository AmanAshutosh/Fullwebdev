// singleton

// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "nikhil";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "hi@gpt",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastnmae: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj5 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign(obj1, obj2, obj5); // (.assign) is used to merge 2 or more object together
// console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2, obj5); // in this if we need to combine objects we must use {} in output so that all the source (i.e obj1,obj2..) goes into the target {}.
// console.log(obj4);

// but mostly we use spread operator
const obj6 = { ...obj1, ...obj2, ...obj5 };
// console.log(obj6);

// basic idea of how data come from data base

const users = [
  {
    id: 1,
    email: "ashutosh@google.com",
  },
  {
    id: 1,
    email: "ashutosh@google.com",
  },
  {
    id: 1,
    email: "ashutosh@google.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); // gives type as array
console.log(Object.entries(tinderUser)); // gives array inside array and all key value pair is made under array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // (.hasOwnProperty) is used as to check the property of wether its available or not 
