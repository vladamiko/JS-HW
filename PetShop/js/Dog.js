'use strict';

class Dog extends Pet {
    constructor (name, color, price) {
        super(color, price);
        this.name = name;
    }

    getName () {
        return this.name;
    }
}