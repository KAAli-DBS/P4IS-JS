
//Keys in objects can only be string or symbol type whereas in maps, they can be of any type.

// Creating an object
const obj = {
    name: 'FirstName LastName',
    age: 25,
};

// Adding numeric and boolean keys (which get converted to strings)
obj[100] = 'one hundred';
obj[true] = 'true value';

console.log('Keys and their types in Object:');

for (let key in obj) {
    console.log(`Key: ${key}, Type: ${typeof key}`);
}

// Show the type of the symbol key
console.log(`Symbol Key: ${Object.getOwnPropertySymbols(obj)[0]}, Type: Symbol`);

// Example with Maps

// Creating a map
const map = new Map();

// Adding various types of keys
map.set('name', 'FirstName LastName');
map.set(100, 'one hundred'); 
map.set(true, 'true value'); 
map.set({ id: 1 }, 'Object as key'); 
map.set(function() {}, 'Function as key'); 

console.log('\nKeys and their types in Map:');
for (let [key] of map) {
    console.log(`Key: ${key}, Type: ${Object.prototype.toString.call(key)}`);
}
