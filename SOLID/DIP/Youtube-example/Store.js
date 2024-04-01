const Stripe = require("./Stripe.js");
const PayPal = require("./PayPal.js");
const PayPalPaymentProcessor = require("./interfaces/PayPalPaymentProcessor.js");
const NewStore = require("./interfaces/NewStore.js");


// bad practice
class Store {
    constructor(user) {
        this.paypal = new PayPal()
        this.user = user
        // this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.paypal.makePayment(this.user, 210 * quantity / 100)

    }

    purchaseHelmet(quantity) {
        this.paypal.makePayment(this.user, 45 * quantity / 100)
    }
}
// const store = new Store("Ajmal");
// store.purchaseBike(2);
// store.purchaseHelmet(4)


// SOLID - > DIP



const store1 = new NewStore("Ajmal");
store1.purchaseBike(2);
store1.purchaseHelmet(4)