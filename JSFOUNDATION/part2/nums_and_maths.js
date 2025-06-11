const score = 400;
//  console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4 {cuz only -ve value is converted into +ve }
console.log(Math.round(4.6)); // 5 {convert to the nearest as we do in day to day life}
console.log(Math.ceil(4.2));  // 5 {convert to the nearest higher as the term ceil is celling}
console.log(Math.floor(4.6)); // 4 { convert to the nearest lower as the term floor is floor i.e lower}
console.log(Math.min(4, 5, 6, 2, 1,)); // gives max among the given numbers
console.log(Math.max(4, 5, 6, 2, 1)); // gives max among the given numbers
*/

console.log(Math.random()); // the value of random always come between 0 and 1 only 
console.log((Math.random() * 10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min);
