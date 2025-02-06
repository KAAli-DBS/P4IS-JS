// The number of items in an object must be determined manually whereas it is readily available with the size property in a map

// Create an object
const obj = {
    name: 'FirstName LastName',
    age: 25,
    city: 'Galway'
};

// Manually count the number of keys (properties) in the object
const objectSize = Object.keys(obj).length;

console.log("Object Example:");
console.log(`The object has ${objectSize} properties.`); 


// Create a Map
const map = new Map();
map.set('name', 'FirstName LastName');
map.set('age', 25);
map.set('city', 'Dundalk');

// Use the 'size' property to get the number of items in the map
console.log("\nMap Example:");
console.log(`The map has ${map.size} key-value pairs.`); 