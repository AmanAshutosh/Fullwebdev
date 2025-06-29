// while {1. You don't know how many times you’ll loop. 2.You loop until a condition becomes false (based on user input, API response, etc). }

let index = 1;
while (index <= 10) {
//   console.log(`value of index is ${index}`);
  index = index + 2;
}

let myArray = ['flash', 'batman', 'superman', ' ']

let arr = 0
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
}


// =============================== do while

let money = 1
do {
    // console.log(`money is ${money}`);
    money++
} while (money <= 10) {
    
} // it will print 1-10



// The do block runs at least once, even if the condition is false. then it checks while conditions.

let usdt = 15;
do {
  console.log(`money is ${usdt}`);
  usdt++;
} while (usdt <= 10) {
    
}// it will still print usdt 15 and than get out of the loop while checking the condition.
