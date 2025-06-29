// Date : Date is an object in javascript.

let myDate = new Date();
console.log(myDate.toString()); // Thu Jun 05 2025 07:46:00 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Thu Jun 05 2025
console.log(myDate.toISOString()); // 2025-06-05T02:16:00.921Z
console.log(myDate.toJSON()); // 2025-06-05T02:16:00.921Z
console.log(myDate.toLocaleDateString()); // 6/5/2025
console.log(myDate.toLocaleString()); // 6/5/2025, 7:46:00 AM
console.log(myDate.toLocaleTimeString()); // 7:46:00 AM
console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("06-05-2025");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('defult', {
    weekday: 'long'
})