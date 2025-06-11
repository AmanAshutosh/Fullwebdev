// Primitive Data type = 7  ( call by value)


// Numbers

let balance = 120;
let anotherBalance = new Number(120);


console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true) // not recommended

//  null and undefined

let firstname = null;
let lastName = undefined;
console.log(firstname);
console.log(lastName);


//string

let myString = "hello"
let myStringOne = 'Hola'
let userName = "ashu"

let oldGreet = myString + 'ashu';
console.log(oldGreet)

let greetMessage = `Hello ${userName} !`;
console.log(greetMessage);

let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

let sm1 = Symbol("ashu")
let sm2 = Symbol("ashu")

console.log(sm1 == sm2)

// Symbol
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); //false


// BigInt

const bigNumber = 355755885544555n

