let myObject = {
    name: "Ayush",
    laptop: {
        cpu: "i9",
        brand: "Lenovo",
        ram: "8 gb",
    },
};

// to print only keys in 'myObject' object
for (let key in myObject.laptop) {
    console.log(key, myObject[key]);
}

// print only the key-values of 'laptop' object
for (let key in myObject.laptop) {
    console.log(key, myObject.laptop[key]);
}

// Alternative way to print key-value in 'laptop' project
for (let key in myObject["laptop"]) {
    console.log(key, myObject["laptop"][key]);
}
