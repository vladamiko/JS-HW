'use strict';

class PetShopView {
    constructor () {
        this.petShop = new PetShop();
        this.div = document.querySelector('.pet-shop');
    }

    showAllLists () {
        let listName1 = `All Cats`,
            listName2 = `Expensive Pets`,
            listName3 = `Fluffy or White Pets`;
        this.showPetsList(this.petShop.getCatsList(), listName1);
        this.showPetsList(this.petShop.getExpensivePetsList(), listName2);
        this.showPetsList(this.petShop.getFluffyOrWhite(), listName3);
    }

    showPetsList (petsList, listName) {
        let fragment = document.createDocumentFragment(),
            divList = document.createElement('div'),
            ul = document.createElement('ul'),
            p = document.createElement('p');

        p.innerHTML = listName;

        petsList.forEach((value) => {
            let li = document.createElement('li');
            li.innerHTML = (value.name)? value.name: 'hamster';
            fragment.appendChild(li);
        });

        ul.appendChild(fragment);

        divList.classList.add('pet-list');
        divList.appendChild(p);
        divList.appendChild(ul);

        this.div.appendChild(divList);
    };
}

