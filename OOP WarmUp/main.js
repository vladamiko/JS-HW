'use strict';

let Pet_ES5M = (function () {
    function Pet_ES5M (name, age) {
        this.name = name;
        this.age = age;
    }

    function _run () {
        console.log(`${this.name} is running now`);
    }

    Pet_ES5M.prototype.run = _run;

    return Pet_ES5M;
})();

function Dog(name, age, color) {
    this._super.call(this, name, age);
    this.color = color;
}

Dog.prototype = Object.create(Pet_ES5M.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype._super = Pet_ES5M;

Dog.prototype.getDogInfo = function() {
    return this.name + " " + this.age + ", " + this.color;
};

let cat = new Pet_ES5M('kusia', 2),
    puppy = new Dog('bim', 1, 'black');

cat.run();
puppy.run();
console.log(puppy.getDogInfo());

console.dir(cat);

/*---ES6---*/

class Pet_ES6 {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    run () {
        console.log(`${this.name} is running now, ${this.age}`);
    }
}

class Cat extends Pet_ES6 {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    getCatInfo() {
        return this.name + " " + this.age + ", " + this.color;
    }
}

let dog = new Pet_ES6('bim', 8),
    kitty = new Pet_ES6('kusia', 2, 'grey');

dog.run();
kitty.run();

console.dir(dog);
console.dir(kitty);