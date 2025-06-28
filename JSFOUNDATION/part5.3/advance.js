const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const values = coding.forEach((item) => {
     console.log(item);
     return item
})
console.log(values);
// this is to check what forEach return if assigned into a variable

//  =======================================================================================================================================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums);


// if we use arrow function as below we must  use return keyword if we open scope. 
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.filter((num) => {
    return num > 4
})
console.log(newNum);



const newNumber = []

myNums.forEach((num) => { 
    if (num > 4) {
        newNumber.push(num);
    }
})

console.log(newNumber);


