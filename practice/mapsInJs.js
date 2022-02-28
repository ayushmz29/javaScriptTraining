// Similar to sets, to use maps we need to use constructor
// function or new keyword
// it stores data in the form of key-value pairs
let map = new Map();

// we can set values using 'set()' method
map.set("Navin", "Java");
map.set("Kiran", "Android");
map.set("Chirag", "ML");
map.set("Ayush", "React");

// to fetch all the 'keys' of the map, we can use
console.log(map.keys());

// to check if the particular key is available in the Map
// using '.has()' method.
console.log(map.has("Chirag"));
console.log(map.has("Ayush"));

// To get the value from the specified key
// we need to use '.get()' method
console.log(map.get("Ayush"));

// To print all the values we need to use
// forEach loop or for-of loop
// ->for-of loop
for (let [k, v] of map) {
    console.log(k, " : ", v);
}

// ->forEach
// value fist then the index value
map.forEach((value, key) => {
    return console.log(value, ":", key);
});

// 'set' will update the value if we use it again for
//  already existing key-value


// DIFF between map and object
// for some particular entity -> object
// for some collection of values -> map