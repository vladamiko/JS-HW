'use strict';

class PetShop {
    constructor () {
        this.petSet = new Set();
        this.addPetsSet(); //можно ли здесь вызывать?
    }

    addPetsSet () {
        this.petSet.add(new Cat('Kusia', 'grey', 500));
        this.petSet.add(new Cat('Busia', 'white', 700));
        this.petSet.add(new Cat('Musia', 'black', 300));
        this.petSet.add(new Dog('Bim', 'black', 600));
        this.petSet.add(new Dog('Kim', 'white', 400));
        this.petSet.add(new Dog('Jim', 'ginger', 700));
        this.petSet.add(new Hamster('white', 200));
        this.petSet.add(new Hamster('ginger', 100));
        this.petSet.add(new Hamster('grey', 300));
    }

    getCatsList () {
        let catsList = [];

        this.petSet.forEach((value, key, set) => {
            if (value instanceof Cat) {
                catsList.push(value);
            }
        });

        return catsList;
    }

    getExpensivePetsList () {
        let petsList = [],
            avPrice = 0,
            sumPrice = 0;

        this.petSet.forEach((value, key, set) => {
            sumPrice = sumPrice + value.price;
        });

        avPrice = sumPrice/this.petSet.size;

        this.petSet.forEach((value, key, set) => {
            if (value.price > avPrice) {
                petsList.push(value);
            }
        });

        return petsList;
    }

    getFluffyOrWhite () {
        let petsList = [];

        this.petSet.forEach((value, key, set) => {
            let fluffyOrWhite = value.isFluffy || value.color === 'white';

            if (fluffyOrWhite) {
                petsList.push(value);
            }
        });

        return petsList;
    }
}