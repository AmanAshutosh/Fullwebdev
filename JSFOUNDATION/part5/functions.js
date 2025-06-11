/*
1. write a function named "makeTea" that takes one parameter 'typeOfTea' and returns a string like 'making green tea' when called with 'green tea'.
store the result in a variable named 'teaOrder'.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("lemon Tea")
// console.log(teaOrder);

/*
2. Create a function named 'order tea' that takes one parameter, 'teaType'. Inside this function create another function named 'confirmOrder that returns a message like "Order confirmed for chai".
Call "confirmOrder" from within "orderTea" and return the result.
*/

function orderTea(teaType) {
    function confirmOrder( ) {
        return 'order confirmed for chai';
    }
    return confirmOrder()
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
3. write an arrow function named 'calculateTotal' takes two parameters: 'price' and 'quantity'. the function should return the total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable named 'totalCost'.
*/

const calculateTotal = (price, quantity) =>  price * quantity

let totalCost = calculateTotal(499 * 100)

/*
5. Write a function named 'processTeaOrder' that takes another function, 'makeTea' as parameter and calls it with the argument 'earl grey'
Return the result of calling 'makeTea'.
*/

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
    return teaFunction('earl grey')
 }

let order = processTeaOrder(makeTea)
// console.log(order);

/*
5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType' and return message like 'making green tea'. 
Store the returned function in a variable named 'teaMaker' and call it with 'green tea'
*/

function createTeaMaker(name) {
    return function (teaType) {
        return `Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker("ashu");
let result = teaMaker("green tea")
console.log(result);