
// /** 
//  * Every object has a prototype.
//  * 
//  * A prototype is the 'parent' object that is shared by all instances
//  * of the 'child' obect
//  * 
//  * Ex: if we create a Dog object and add 'bark()' function
//  * to the prototype, all dogs will share the same 'bark()' function
//  */


// // first, without prototypes
// function Dog(name) {
//     this.name = name;
//     this.bark = function () {
//         console.log(this.name + ' goes bark bark');
//     };
//     // this.eat = function () {
//     //     console.log('is eating now')
//     // };
//     return this;
// }

// // second move 'bark' and 'eat' to the prototype
// // 'prototype' is the built-in property of all functions
// //
// // the prototype of a constructor is shared w/ all objects
// //      constructed from that prototype
// Dog.prototype.eat = function () {
//     console.log('is eating now')
// }


// /**
//  * it is bad practice to modify types you didn't create
//  * 
//  * this is b/c the creators may one day a capitalize function
//  * and that's gonna be really, really confusing
//  */
// String.prototype.capitalize = function () {
//     let str = this.toString();
//     //console.log(str);
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// window.addEventListener('load', function () {
//     let fido = new Dog('Fido');
//     fido.bark();
//     fido.eat();

//     //console.log(fido.toString()); //toString() is built in property 

//     let game = 'NinTENDO SIXTY FOUR'
//     console.log(game.capitalize()); // will not work by default
// });

/* ------------------------------------------------------- */

// stuff in common between all buyable things
function CartItem() {

}

CartItem.prototype.displayText = function () {
    return this.show();
};

// Foods are a type of buyable thing
function Food(name, price, quantity) {
    this.name = name;
    this.price =  price;
    this.quantity = quantity;
    this.show = function () {
        return this.name;
    };

    //secretly happening:
    //this.prototype = Food.prototype;
    return this;
}
Food.prototype = CartItem.prototype;


// Vacations are a type of buyable thing
function Vacation(destination, price) {
    this.destination = destination;
    this.price = price;
    this.show = function () {
        return 'Trip to ' + this.destination;
    };

    return this;
}
Vacation.prototype = CartItem.prototype;

window.addEventListener('load', function () {
    let pasta = new Food('Lasgna', 15.99, 2);
    let trip = new Vacation('South Africa', 1400.00);

    let cart = [];
    cart.push(pasta);
    cart.push(trip);

    for (let i = 0; i < cart.length; i++) {
        //implication: every cart item should have a displayText() property
        console.log(cart[i].displayText());
    }
});
