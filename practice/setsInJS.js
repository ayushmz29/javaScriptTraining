// introduced in ES6, contains unique values only
// does not maintain the order of the elements which came in
// to use Sets in JS we need to use it as Constructor function ie with 'new' keyword

// we can pass values through constructor function
let set1 = new Set("book-keeper");

// this will print only the unique letters
console.log(set1); 


// we can also use '.add' to assign values into the set
set1.add("Ayush");
set1.add(99);
set1.add("React");
set1.add("JavaScript");

for(let i of set1){
    console.log(i);
}; 