'use strict';

class Cat extends Pet {
    constructor (name, color, price) {
        super(color, price);
        this.name = name;
        this.isFluffy = true;
    }
}