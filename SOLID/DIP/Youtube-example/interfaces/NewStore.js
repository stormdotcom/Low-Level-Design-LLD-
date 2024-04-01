const PayPalPaymentProcessor = require("./PayPalPaymentProcessor.js");
const StripePaymentProcessor = require("./StripePaymentProcessor.js");

class NewStore {
    constructor(user, quantity) {
        this.user = user
        this.paymentProcessor = new StripePaymentProcessor(user)
    }
    purchaseBike(quantity) {
        this.paymentProcessor.makePayment(210 * quantity)

    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.makePayment(45 * quantity)
    }
}

module.exports = NewStore;