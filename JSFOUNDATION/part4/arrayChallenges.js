/*
1. Declare an array named 'teaFlavours' that contains the strings "green tea" "black tea" and "oolong tea".

 Access the first element of array and store it in a variable named 'firstTea'
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]

let firstTea = teaFlavors[0]
// console.log(firstTea);

/*
2. Declare an array named "cities  containing "London", "Tokyo", "paris" and "new york".
Access the third element in the array and store it in a variable named 'favoriteCity'
*/

let cities = ["London", "Tokyo", "Paris", "New York"]

let favoriteCity = cities[3]
// console.log(favoriteCity);

/*
3. You have an array named 'teaTypes' containing 'herbal tea', 'white tea' and 'masala chai'.
change the second element of array to 'jasmine  tea"
*/

let teaTypes = ["herbel tea", "white tea", "masala chai"]

teaTypes[2] = "Jasmine tea"
// console.log(teaTypes);




/*
4. Declare an array named "citiesVisited" containing "Mumbai" and "Sydney".
Add "Berlin" to the array using the 'push' method
*/

let citiesVisited = ["Mumbai", "Sydney"]
// citiesVisited[2] = "Berlin"
//citiesVisited[citiesVisited.length] = "Berlin"
// citiesVisited.push("Berlin");
// console.log(citiesVisited)
// console.log(citiesVisited.length)
// console.log(citiesVisited[2])

/*
5. You have an array named "teaOrders" with "chai" "ice tea" "matcha" and "earl grey".
Remove the last element of the array using the pop method and store it in a variable named "lastOrder"
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);


/*
6. You have an array named "popularTeas" containing "green tea", "oolong tea" and chai.
create a soft copy of this array named "softCopyTeas."
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas;
// console.log(softCopyTeas);
// console.log(popularTeas);


/*
7. You have an array named 'topCities containing 'berlin' 'singapore' and 'newyork'.
Create a hard copy of this array named 'hardCopy Cities.
*/

let topCities = ["berlin", "singapore", "newyork"];
//let hardCopyCities = [...topCities]
let hardCopyCities = topCities.slice();
topCities.pop();
//console.log(hardCopyCities);


/*
8. You have two arrays: "europeanCities" containing "paris" and "Rome" and "asianCities" containing "Tokyo" and "Bangkok."
Merge these two arrays into a new array named "WorldCities".
*/

let europeanCities = ["Paris", "Rome "];
let asianCities = [" Tokyo", "Bangkok"]

let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);
// console.log(typeof worldCities);

/*
9. You have an array named "teaMenu" containing "masala chai", "oolong tea" and "earl grey"
find the length of the array and store it in a variable named "menuLength".
*/

let teaMenu = ["masala chai", "oolong tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength);

/*
10. You have an array named 'cityBucketList' containing 'Kyoto', "London", "cape town" and "Vancouver"
check if "London" is in the array and store the result in a variable named "isLondonInList"
*/

let cityBucketList = ["Kyoto", "London", "CapeTown", "Vancouver"];

let isLondonInList = cityBucketList.includes("london");
// console.log(isLondonInList);

let arr = [1, 2, 3, 4]
console.log(arr.indexOf(3));
