'use strict';

class Pet {
    constructor (color, price) {
        this.color = color;
        this.price = price;
    }

    getColor () {
        return this.color;
    }

    getPrice () {
        return this.price;
    }

    isYourColor (_color) {
        return this.color === _color;
    }

    getName () {
        return undefined;
    }

    areYouFluffy () {
        return undefined;
    }

    isFluffyOrWhite () {
        return this.isYourColor('white') || this.areYouFluffy();
    }
}