/* =============== FOR OF ============================

*/

const arr = [1, 2, 3, 4, 5, 6]
 
for (const num of arr) {
    // console.log(num);
}

const greet = "hello world!"
for (const wish of greet) {
    if (wish == " ") {
        continue;
    }
    // console.log(`each char is ${wish}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('BR', "Bihar")
map.set("IN", "India");

// console.log(map);

for (const key of map) {
  console.log(key);  // this will give full map data into array with key and value 
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
} // and this is the way we can extract key and value differently or sep. 