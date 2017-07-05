'use strict';

class PetShop {
    constructor () {
        this.petSet = new Set();
        this.addPetSet(); //можно ли здесь вызывать?
    }

    addPetSet () {
        this.petSet.add(new Cat('Kusia', 'grey', 500, true));
        this.petSet.add(new Cat('Busia', 'white', 700, false));
        this.petSet.add(new Cat('Musia', 'black', 300, true));
        this.petSet.add(new Dog('Bim', 'black', 600));
        this.petSet.add(new Dog('Kim', 'white', 400));
        this.petSet.add(new Dog('Jim', 'ginger', 700));
        this.petSet.add(new Hamster('white', 200, true));
        this.petSet.add(new Hamster('ginger', 100, false));
        this.petSet.add(new Hamster('grey', 300, true));
    }

    getCatList () {
        let catList = [];

        this.petSet.forEach((value, key, set) => {
            if (value instanceof Cat) {
                catList.push(value);
            }
        });

        return catList;
    }

    getExpensivePetList () {
        let petList = [],
            avPrice = 0,
            sumPrice = 0;

        this.petSet.forEach((value, key, set) => {
            sumPrice += value.getPrice();
        });

        avPrice = sumPrice/this.petSet.size;

        this.petSet.forEach((value, key, set) => {
            if (value.getPrice() > avPrice) {
                petList.push(value);
            }
        });

        return petList;
    }

    getFluffyOrWhite () {
        let petList = [];

        this.petSet.forEach((value, key, set) => {
            if (value.areYouFluffy) {
                if (value.areYouFluffy() || value.isYourColor('white')) {
                    petList.push(value);
                }
            } else if (value.isYourColor('white')) {
                petList.push(value);
            }    
        });

        return petList;
    }
}