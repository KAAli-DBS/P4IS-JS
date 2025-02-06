// Objects are not iterables whereas maps are iterables. 

// Create an object
const obj = {
    name: 'FirstName LastName',
    age: 28,
    city: 'Dublin'
};

console.log("Object Example:");

/*
 for (let [key, value] of obj) { 
    console.log(key, value);
 }
    */

// Instead, use Object.entries() to make it iterable
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}


// Create a map
const map = new Map();
map.set('name', 'FirstName LastName');
map.set('age', 25);
map.set('city', 'Galway');

console.log("\nMap Example:");

// Directly use 'for...of' to loop through the map
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}