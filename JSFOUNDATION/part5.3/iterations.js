/* ======================= for loop =====================================
syntax :-
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}


*/

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`outer loop value: ${i}`);

  for (let j = 0; j < 10; j++) {
    // console.log(`inner loop value: ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected 5`);
//     break; // get out of loops
//   } 
//   console.log(`value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected 5`);
    continue; // skips and keep moving
  }
  console.log(`value of i is ${index}`);
}
