/*
1. Write a for loop that loops through the array ["green tea","black tea", "chai", "oolong tea" ] and stops the loop when it finds "chai".
Store all teas before "chai in a new array named "selectedTeas".
*/

let teas = ["Green Tea", "Black Tea", "Chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
   if (teas[i] === "Chai") {
       break;
    }
    selectedTeas.push(teas[i])
    
}
// console.log(selectedTeas);

/*
2. write a for loop that loops through the array [london, New York, "Paris", "Berlin"] and skips "Paris".
store the other cities in a new array named visitedCities.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'Paris' || cities[i] === 'paris') {
        continue;
    }
    visitedCities.push(cities[i])
}
// console.log(visitedCities);


/*
3. use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number '4' is found 
store the number before '4' in an array named 'smallNumber.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumber.push(num)
}

//console.log(smallNumber);


/*
4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
Store the other teas in an array named "preferredTeas."
*/

let teaType = ["chai", "green tea", "herbal tea", "black tea"]
preferredTeas = [];

for (const tea of teaType) {
    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea)
}
// console.log(preferredTeas);

/*
5. use a for-in loop to loop through an object containing city populations.
stop the loop when the population of "berlin" is found and store all previous cities populations in a new object named cityPopulations.

let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};
*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
}

let cityNewPopulations = {}
// console.log(Object.keys(citiesPopulation));

for (const city in citiesPopulation) {
    if (city == "Berlin") {
        break;
    }
    // key = value
    cityNewPopulations[city] = citiesPopulation[city];

}
// console.log(cityNewPopulations);

/*
6. use a for in loop to loop through an object containing city populations.
skip any city with a population below 3 million and store in a new object named 'largeCities'. 
 
 let worldCities = {
 "Sydney" : 5000000,
 "Tokyo" : 9000000,
 "Berlin" : 3500000,
 "Paris" : 2200000
 }
*/

let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city];
}
// console.log(largeCities);

/*
7. write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
stop the loop when "chai is found and store all previous tea types in an array named 'availableTea'
*/

let tea = ["earl grey", "green tea", "Chai", "oolong tea"];
let availableTea = [];

tea.forEach((tea) => {
    if (tea === "Chai") {
        return;
    }
    availableTea.push(tea)
});

// console.log(availableTea)

/*
8. write a foreach loop that iterates through the array  ["Berlin", "Tokyo", "Sydney", "Paris"].
skip "sydney" and store the other cities in a new array named 'traveledCities'.
*/

let topCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

topCities.forEach(city => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city)
})
// console.log(traveledCities);

/*
9. write a for loop that iterates through the array [2,5,7,9].
skip the value "7" and multiply the rest by 2. store the results in a new array named "doubledNumbers"
*/

let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(myNumbers[i] * 2);
}

// console.log(doubledNumbers);

/*
10. use a for-of loop to iterate through the array ["Chai", "Green tea", "Black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10.
store the teas iterated over in an array named 'shortTeas'
*/

let teaCollection = [
  "Chai",
  "Green tea",
  "Black tea",
  "jasmine tea",
  "herbal tea",
];

let shortTeas = []

for (const tea of teaCollection) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}

// console.log(shortTeas);

