let words = "My Name is Ayush Mazumdar Software Developer".split(" ");

// empty ,, is used to skip elements.
let [a, b, , ...d] = words;

console.log(d);
