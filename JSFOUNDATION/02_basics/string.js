const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

// console.log(typeof name);

const gameName = new String("Nikhilsingh-aa");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newSting = gameName.substring(0, 4);
console.log(newSting);

const anotherString = gameName.slice(1, 4);
console.log(anotherString);

const newStingOne = "    hitesh    ";
console.log(newStingOne);
console.log(newStingOne.trim());

const url = "https://ashutosh.com/ashutosh%20aman";
console.log(url.replace("%20", "-"));


console.log(url.includes('nikhil'));
 