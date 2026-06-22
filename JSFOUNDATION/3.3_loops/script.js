// Q1. Print numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++){
    console.log(i);
}


// Q2. Print number from 10 to 1 using a while loop.
for (let i = 10; i >= 1; i--){
    console.log(i)
}

// using while loop
let i = 10; //initilize kiya
while (i >= 1) {
  // condition kahan tak chalena hai
  console.log(i);
  i--; // Decrement (Har baar 1 kam karna hai)
}



// Q3. Print even number from 1 to 20 using a for loop.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
        
    }
}





// Q4. Print odd number from 1 to 15 using a while loop.

for (let i = 1; i <= 15; i++){
    if (i % 2 !== 0) {
        
    } else {
        console.log(i)
    }
}


// solution 2 short
for (let i = 1; i <= 15; i += 2){
    console.log(i);
    
}





// Q5. Print the multiplication table of 5(i.e, 5x1=5...5x10=50)

for (let i = 1; i <= 10; i++){
    let result = 5 * i;
    console.log(result);
    
}

// solution 2
for (let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}






// Q6. Find the sum of numbers from 1 to 100 using loop.

let sum = 0;
for(i = 1; i <= 100; i++) {
    sum = sum + i;

}
console.log(sum);

// solution 2

let sum = 0;

for (let i = start; i <= end; i++){
    sum += i;
}
console.log(sum);





// Q7. Print all numbers between 1 to 50 that are divisible by 3.
for (let i = 1; i <= 50; i++){
    if (i % 3 === 0) {
        console.log(i);
    }
}


// solution 2 short

for (let i = 3; i <= 50; i += 3){
    console.log(i);
    
}


// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

let num = prompt('enter number');
for (let i = 1; i <= num; i++){
    if (i % 2 === 0) {
        console.log(i + " is even");
        
    } else {
        console.log(i + " is odd");
        
    }
}

// Q9. Count how many number between 1 to 100 are divisible by both 3 and 5.

let count = 0;

for (let i = 1; i <= 100; i++){
    if ((i % 3 === 0) && (i % 5 === 0)) {
        count++
    }
}

console.log(count);


// solution aproch 2

let count = 0;

for (let i = 15; i <= 100; i += 15) {
  count++;
}

console.log(count);
