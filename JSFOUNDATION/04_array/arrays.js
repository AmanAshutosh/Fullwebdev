// Arrays

/*
# Javascript arrays are resizable and can contain mix of diffrent data types.
# Javascript arrays are not associative arrays and so array elements cannot be accessed using arbitrary strings as indexes.
# Javascript arrays are zero-indexed: the first element of an array is at index [0], the second is at index [1] and so on.
# Javascript array-copy operation create "Shallow copies" rather than "Deep copies".
# When to Use Arrays. When to use Objects. JavaScript does not support associative arrays. You should use objects when you want the element names to be strings (text).You should use arrays when you want the element names to be numbers.
# Arrays are a special kind of objects, with numbered indexes.
*/

/*
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

 console.log(myArr[0]);

// ========================================================= Array Methods ========================================================

myArr.push(6);
myArr.push(9);
myArr.pop(); // removes lastvalue

myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);


// Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);

// =========================== slice, splice ===================================================================

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("c ", myArr);
console.log(myn2);

console.log(typeof myArr); // it will return object so we will check it through
console.log(Array.isArray(myArr)); // the method called "Array.isArray()"
*/

// ++++++++++++++++++++++++++++++++++++++++++++ 02 array +++++++++++++++++++++++++++++++++++++++++++++++++++

/*
# To add 2 arrays we use various methods like ".push", ".concat" and "[..., ...]"
# There is also a method called ".flat(depth of array or infinity)" so this method help add 2 array
*/
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let real_another_array = another_arr.flat(Infinity);
console.log(real_another_array);

console.log(Array.from("ashutosh"));
console.log(Array.from({ name: "ashutosh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
