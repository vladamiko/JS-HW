'use strict';

class PetShopView {
    constructor () {
        this.petShop = new PetShop();
    }

    showAllLists () {
        let listName1 = `All Cats`,
            listName2 = `Expensive Pets`,
            listName3 = `Fluffy or White Pets`;

        this.showPetList(this.petShop.getCatList(), listName1);
        this.showPetList(this.petShop.getExpensivePetList(), listName2);
        this.showPetList(this.petShop.getFluffyOrWhite(), listName3);
    }

    showPetList (petList, listName) {
        let div = document.querySelector('.pet-shop'),
            petItem = '';

        petList.forEach((value) => {
            petItem += value.getName? `<li>${value.getName()}</li>`: `<li>hamster</li>`;
        });

        div.innerHTML += this.getTpl(petItem, listName);
    }

    getTpl (petList, listName) {
        return `
            <div class="pet-list">
                <p>${listName}</p>
                <ul>
                    ${petList}
                </ul>
            </div>`;
    }
}

