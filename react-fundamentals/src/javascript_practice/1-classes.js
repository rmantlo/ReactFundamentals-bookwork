//ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User';
    }
    //method 1
    greet() {
        console.log('Welcome Back, ' +this. name);
    }
    //method 2
    status() {
        console.log('Current status: ' + this.type);
    }

}

//Instance of the class/new object
let anonDude = new User('Anonymous dude');
//we can now use the instance and the . operator
//to access the 2 methods
anonDude.greet();
anonDude.status();

//another instance of the class
let anonLady = new User('anonymous Lady');
anonLady.greet();
anonLady.status();

//another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

let mary = new User('Mary');
mary.greet();
mary.status();

let susan = new User('Susan');
susan.greet();
susan.status();