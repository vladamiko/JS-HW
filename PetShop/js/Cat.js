'use strict';

class Cat extends Pet {
    constructor (name, color, price, isFluffy) {
        super(color, price);
        this.name = name;
        this.isFluffy = isFluffy;
    }

    getName () {
        return this.name;
    }

    areYouFluffy () {
        return this.isFluffy;
    }
}