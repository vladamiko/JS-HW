'use strict';

class Hamster extends Pet {
    constructor (color, price, isFluffy) {
        super(color, price);
        this.isFluffy = isFluffy;
    }

    areYouFluffy () {
        return this.isFluffy;
    }
}