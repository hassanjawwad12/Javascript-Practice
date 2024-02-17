class Basket {
    constructor() {
        this.basketValue = 0;
    }

    addToBasket(value) {
        this.basketValue += value;
    }

    clearBasket() {
        this.basketValue = 0;
    }

    getBasketValue() {
        return this.basketValue;
    }

    pay() {
        console.log(`${this.basketValue} has been paid.`);
    }
}

let b1 = new Basket();
b1.addToBasket(2);
b1.addToBasket(4);
b1.pay()
b1.clearBasket();
b1.pay()

//Question 4 :
class myBasket extends Basket {
    constructor() {
        super();
        this.items = [];
    }

    addToBasket(itemName, itemPrice) {
        super.addToBasket(itemPrice);
        this.items.push({ itemName, itemPrice });
    }

    clearBasket() {
        super.clearBasket();
        this.items = [];
    }
}

let x = new myBasket(['none',0]);
x.addToBasket('mango', 100);
x.addToBasket('orange', 100);
x.pay();
x.clearBasket();
x.pay(); 


//Question 5 :

class myBasket extends Basket {
    constructor() {
        super();
        this.items = [];
    }

    addToBasket(itemName, itemPrice) {
        super.addToBasket(itemPrice);
        this.items.push({ itemName, itemPrice });
    }

    removeFromBasket(index) {
        if (index >= 0 && index < this.items.length) {
            const removedItem = this.items.splice(index, 1)[0];
            super.addToBasket(-removedItem.itemPrice); // Subtract the price of the removed item from the basket value
        } else {
            console.log(`No item found at index ${index}.`);
        }
    }

    clearBasket() {
        super.clearBasket();
        this.items = [];
    }
}

let y = new myBasket();
y.addToBasket('mango', 100);
y.addToBasket('apple', 50);
y.removeFromBasket(0); // Removes 'mango' from the basket
y.pay(); 
y.clearBasket();
y.pay(); 
