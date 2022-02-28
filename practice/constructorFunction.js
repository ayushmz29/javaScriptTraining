function CreateAlienObject(name, tech) {
    // 'this' here refers to the empty object(of type Alien) created
    // while this constructor fn is called using 'new' keyword
    this.name = name;
    this.tech = tech;

    // method which is shared among all objects
    this.method1 = function () {
        console.log(`${this.name} is solving bugs for 12hrs`);
    };

    // Also constructor function returns 'this' automatically
    // ie there is, a statement but we don't need to mention it
    // return this;
    // if we try to return something other than an object it will get ignored
    // ex if we write, return 7; it will get ignored
}

myObj1 = new CreateAlienObject("Ayush", "React");
myObj2 = new CreateAlienObject("Harsh", "Java");

console.log(myObj1.name, myObj1.tech);
console.log(myObj2.name, myObj2.tech);
